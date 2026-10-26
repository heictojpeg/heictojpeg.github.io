import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  UploadCloud,
  Download,
  ShieldCheck,
  Layers,
  Sparkles,
  Trash2,
  Plus,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FolderArchive,
  Sliders,
  FileImage,
} from 'lucide-react';
import type { TranslationDictionary } from '../i18n/translations';

interface ConvertedItem {
  id: string;
  originalFile: File;
  originalName: string;
  originalSize: number;
  status: 'converting' | 'done' | 'error';
  convertedBlob?: Blob;
  convertedUrl?: string;
  convertedSize?: number;
  errorMessage?: string;
  exifStripped: boolean;
}

interface Props {
  t: TranslationDictionary['converter'];
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

async function stripExifAndReencodeViaCanvas(blob: Blob, qualityFraction: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const tempUrl = URL.createObjectURL(blob);
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(tempUrl);
          resolve(blob);
          return;
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(tempUrl);
        canvas.toBlob(
          (cleanBlob) => {
            if (cleanBlob) {
              resolve(cleanBlob);
            } else {
              reject(new Error('Canvas toBlob failed'));
            }
          },
          'image/jpeg',
          qualityFraction
        );
      } catch (err) {
        URL.revokeObjectURL(tempUrl);
        reject(err);
      }
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(tempUrl);
      reject(err);
    };
    img.src = tempUrl;
  });
}

async function decodeHeicWithLibheif(file: File, qualityFraction: number): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  // Dynamically import modern WebAssembly libheif-js decoder (supports iOS 11–18+, 12MP/48MP grid tiles, miaf/MiHB)
  const libheifModule: any = await import('libheif-js/wasm-bundle');
  const libheif = libheifModule?.default?.HeifDecoder
    ? libheifModule.default
    : libheifModule?.HeifDecoder
    ? libheifModule
    : libheifModule?.default?.default || libheifModule;

  const decoder = new libheif.HeifDecoder();
  const imagesArr = decoder.decode(uint8Array);

  if (!imagesArr || imagesArr.length === 0) {
    throw new Error('No decodable HEIC/HEIF image frames found');
  }

  // Pick primary image or first image frame
  const primaryImage = imagesArr.find((img: any) => {
    try {
      return typeof img.is_primary === 'function' && img.is_primary();
    } catch (_) {
      return false;
    }
  }) || imagesArr[0];

  const width = primaryImage.get_width();
  const height = primaryImage.get_height();

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not initialize 2D canvas context');
  }

  // Initialize opaque white canvas ImageData buffer
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);

  await new Promise<void>((resolve, reject) => {
    primaryImage.display(imageData, (displayResult: ImageData | null) => {
      if (!displayResult) {
        reject(new Error('libheif display decoding failed'));
        return;
      }
      resolve();
    });
  });

  ctx.putImageData(imageData, 0, 0);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (jpegBlob) => {
        if (jpegBlob) {
          resolve(jpegBlob);
        } else {
          reject(new Error('Failed to encode canvas to JPEG blob'));
        }
      },
      'image/jpeg',
      qualityFraction
    );
  });
}

export default function HeicConverterIsland({ t }: Props) {
  const [items, setItems] = useState<ConvertedItem[]>([]);
  const [outputFormat, setOutputFormat] = useState<'jpg' | 'jpeg'>('jpg');
  const [quality, setQuality] = useState<number>(92);
  const [stripExif, setStripExif] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const itemsRef = useRef<ConvertedItem[]>([]);
  itemsRef.current = items;

  // Cleanup all object URLs on unmount
  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        if (item.convertedUrl) {
          URL.revokeObjectURL(item.convertedUrl);
        }
      });
    };
  }, []);

  const convertSingleFile = useCallback(
    async (file: File, targetQuality: number, shouldStripExif: boolean): Promise<{ blob: Blob; url: string }> => {
      const qualityFraction = Math.min(1, Math.max(0.1, targetQuality / 100));
      let resultBlob: Blob;

      const isStandardBrowserImage =
        file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';

      if (isStandardBrowserImage) {
        resultBlob = await stripExifAndReencodeViaCanvas(file, qualityFraction);
      } else {
        try {
          // Primary Engine: Modern WebAssembly libheif-js (handles 12MP/48MP iPhone HEIC, grid tiles, miaf, etc.)
          resultBlob = await decodeHeicWithLibheif(file, qualityFraction);
        } catch (primaryErr) {
          console.warn('Primary WASM HEIC decoder fallback to heic2any:', primaryErr);
          // Fallback Engine: heic2any (properly unwrapping nested CJS default export)
          const heic2anyModule: any = await import('heic2any');
          const heic2anyFn =
            typeof heic2anyModule === 'function'
              ? heic2anyModule
              : typeof heic2anyModule?.default === 'function'
              ? heic2anyModule.default
              : heic2anyModule?.default?.default;

          if (typeof heic2anyFn !== 'function') {
            throw primaryErr;
          }

          const converted = await heic2anyFn({
            blob: file,
            toType: 'image/jpeg',
            quality: qualityFraction,
          });

          const rawJpegBlob = Array.isArray(converted) ? converted[0] : converted;
          resultBlob = shouldStripExif
            ? await stripExifAndReencodeViaCanvas(rawJpegBlob, qualityFraction)
            : rawJpegBlob;
        }
      }

      const url = URL.createObjectURL(resultBlob);
      return { blob: resultBlob, url };
    },
    []
  );

  const processFiles = useCallback(
    async (fileList: FileList | File[]) => {
      const incomingFiles = Array.from(fileList);
      if (incomingFiles.length === 0) return;

      const newEntries: ConvertedItem[] = incomingFiles.map((file) => ({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        originalFile: file,
        originalName: file.name,
        originalSize: file.size,
        status: 'converting',
        exifStripped: stripExif,
      }));

      setItems((prev) => [...prev, ...newEntries]);
      setLiveAnnouncement(`${t.convertingStatus} (${incomingFiles.length})`);

      for (const entry of newEntries) {
        try {
          const { blob, url } = await convertSingleFile(entry.originalFile, quality, stripExif);
          setItems((prev) =>
            prev.map((item) =>
              item.id === entry.id
                ? {
                    ...item,
                    status: 'done',
                    convertedBlob: blob,
                    convertedUrl: url,
                    convertedSize: blob.size,
                    exifStripped: stripExif,
                  }
                : item
            )
          );
          setLiveAnnouncement(`${entry.originalName} - ${t.readyStatus}`);
        } catch (err) {
          console.error('HEIC conversion error:', err);
          setItems((prev) =>
            prev.map((item) =>
              item.id === entry.id
                ? {
                    ...item,
                    status: 'error',
                    errorMessage: t.errorStatus,
                  }
                : item
            )
          );
          setLiveAnnouncement(`${entry.originalName} - ${t.errorStatus}`);
        }
      }
    },
    [convertSingleFile, quality, stripExif, t.convertingStatus, t.readyStatus, t.errorStatus]
  );

  // Re-process existing files when user finishes changing quality or EXIF toggle
  const reprocessAll = useCallback(
    async (newQuality: number, newStripExif: boolean) => {
      const currentItems = itemsRef.current;
      if (currentItems.length === 0) return;

      setItems((prev) =>
        prev.map((item) => {
          if (item.convertedUrl) {
            URL.revokeObjectURL(item.convertedUrl);
          }
          return {
            ...item,
            status: 'converting',
            convertedUrl: undefined,
            convertedBlob: undefined,
          };
        })
      );

      for (const entry of currentItems) {
        try {
          const { blob, url } = await convertSingleFile(entry.originalFile, newQuality, newStripExif);
          setItems((prev) =>
            prev.map((item) =>
              item.id === entry.id
                ? {
                    ...item,
                    status: 'done',
                    convertedBlob: blob,
                    convertedUrl: url,
                    convertedSize: blob.size,
                    exifStripped: newStripExif,
                  }
                : item
            )
          );
        } catch (_) {
          setItems((prev) =>
            prev.map((item) =>
              item.id === entry.id
                ? {
                    ...item,
                    status: 'error',
                    errorMessage: t.errorStatus,
                  }
                : item
            )
          );
        }
      }
    },
    [convertSingleFile, t.errorStatus]
  );

  const handleRemoveItem = (id: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target?.convertedUrl) {
        URL.revokeObjectURL(target.convertedUrl);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    items.forEach((item) => {
      if (item.convertedUrl) {
        URL.revokeObjectURL(item.convertedUrl);
      }
    });
    setItems([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getOutputFileName = (originalName: string, ext: 'jpg' | 'jpeg') => {
    const base = originalName.replace(/\.(heic|heif|jpg|jpeg|png|webp)$/i, '');
    return `${base}.${ext}`;
  };

  const handleDownloadSingle = (item: ConvertedItem) => {
    if (!item.convertedUrl) return;
    const link = document.createElement('a');
    link.href = item.convertedUrl;
    link.download = getOutputFileName(item.originalName, outputFormat);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAllZip = async () => {
    const readyItems = items.filter((i) => i.status === 'done' && i.convertedBlob);
    if (readyItems.length === 0) return;

    setIsZipping(true);
    setLiveAnnouncement(t.zippingStatus);
    try {
      const JSZipModule = await import('jszip');
      const JSZip = JSZipModule.default || JSZipModule;
      const zip = new JSZip();

      const usedNames = new Set<string>();
      readyItems.forEach((item) => {
        if (!item.convertedBlob) return;
        let fileName = getOutputFileName(item.originalName, outputFormat);
        if (usedNames.has(fileName)) {
          const base = fileName.replace(/\.(jpg|jpeg)$/i, '');
          fileName = `${base}-${Math.random().toString(36).slice(2, 6)}.${outputFormat}`;
        }
        usedNames.add(fileName);
        zip.file(fileName, item.convertedBlob);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = zipUrl;
      link.download = `heic-to-${outputFormat}-batch-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(zipUrl), 5000);
    } catch (err) {
      console.error('Error creating ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const readyItemsCount = items.filter((i) => i.status === 'done').length;

  return (
    <div className="w-full">
      {/* Polite ARIA Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveAnnouncement}
      </div>

      {/* Hidden File Input with Descriptive ARIA Label */}
      <input
        ref={fileInputRef}
        type="file"
        id="heic-file-input"
        multiple
        accept=".heic,.heif,image/heic,image/heif"
        aria-label={t.selectButton}
        className="sr-only"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
          }
        }}
      />

      {/* STATE 1: OVERSIZED DROPZONE (When 0 files in workspace) */}
      {items.length === 0 && (
        <div className="w-full">
          <div
            role="button"
            tabIndex={0}
            aria-label={`${t.dropTitle}. ${t.selectButton}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                processFiles(e.dataTransfer.files);
              }
            }}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            className={`min-h-[340px] md:min-h-[380px] w-full rounded-3xl border-4 border-dashed transition-all duration-200 flex flex-col items-center justify-center p-6 md:p-12 text-center cursor-pointer shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-sage-primary ${
              isDragging
                ? 'border-sage-primary bg-sage-light/70 dark:bg-sage-moss/40 scale-[1.01]'
                : 'border-sage-moss dark:border-sage-accent bg-sage-light/35 dark:bg-sage-darkCard hover:bg-sage-light/55 dark:hover:bg-sage-darkCard/90'
            }`}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-sage-light dark:bg-sage-darkBg border-2 border-sage-accent dark:border-sage-moss flex items-center justify-center mb-6 shadow-md">
              <UploadCloud
                className="w-16 h-16 md:w-20 md:h-20 text-sage-primary dark:text-sage-light"
                aria-hidden="true"
              />
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-sage-charcoal dark:text-sage-light mb-3">
              {t.dropTitle}
            </h2>

            <p className="text-lg md:text-xl font-medium text-sage-charcoal/80 dark:text-gray-200 max-w-2xl mb-8">
              {t.dropSubtitle}
            </p>

            <span className="inline-flex items-center justify-center gap-3 px-8 py-5 min-h-[56px] text-xl md:text-2xl font-bold rounded-2xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal shadow-xl hover:opacity-95 transition-transform active:scale-95">
              <FileImage className="w-7 h-7 shrink-0" aria-hidden="true" />
              <span>{t.selectButton}</span>
            </span>
          </div>

          {/* 3 Big Trust Badges Below Dropzone */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            <div className="min-w-0 flex items-center gap-4 p-5 rounded-2xl border-2 border-sage-accent dark:border-sage-moss bg-sage-light/30 dark:bg-sage-darkCard">
              <div className="w-12 h-12 rounded-xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-lg md:text-xl font-bold text-sage-charcoal dark:text-sage-light break-words">
                {t.trustOffline}
              </span>
            </div>

            <div className="min-w-0 flex items-center gap-4 p-5 rounded-2xl border-2 border-sage-accent dark:border-sage-moss bg-sage-light/30 dark:bg-sage-darkCard">
              <div className="w-12 h-12 rounded-xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal flex items-center justify-center shrink-0">
                <Layers className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-lg md:text-xl font-bold text-sage-charcoal dark:text-sage-light break-words">
                {t.trustBatch}
              </span>
            </div>

            <div className="min-w-0 flex items-center gap-4 p-5 rounded-2xl border-2 border-sage-accent dark:border-sage-moss bg-sage-light/30 dark:bg-sage-darkCard">
              <div className="w-12 h-12 rounded-xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-lg md:text-xl font-bold text-sage-charcoal dark:text-sage-light break-words">
                {t.trustQuality}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STATE 2: CONVERSION WORKSPACE (Appears immediately when 1+ files are added) */}
      {items.length > 0 && (
        <div className="space-y-8">
          {/* Oversized Controls Top Bar */}
          <div className="rounded-3xl border-2 border-sage-accent dark:border-sage-moss bg-sage-light/45 dark:bg-sage-darkCard p-6 md:p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Output Format (.jpg / .jpeg) */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <label className="text-lg md:text-xl font-extrabold text-sage-charcoal dark:text-sage-light flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-sage-primary dark:text-sage-accent" aria-hidden="true" />
                  <span>{t.outputFormatLabel}</span>
                </label>
                <div className="grid grid-cols-2 gap-3" role="group" aria-label={t.outputFormatLabel}>
                  <button
                    type="button"
                    onClick={() => setOutputFormat('jpg')}
                    aria-pressed={outputFormat === 'jpg'}
                    className={`min-h-[56px] px-6 py-3 rounded-2xl text-xl font-extrabold border-2 transition-all ${
                      outputFormat === 'jpg'
                        ? 'bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal border-sage-primary dark:border-sage-accent shadow-md'
                        : 'bg-sage-surface dark:bg-sage-darkBg text-sage-charcoal dark:text-sage-light border-sage-moss hover:bg-sage-light/60'
                    }`}
                  >
                    .JPG
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutputFormat('jpeg')}
                    aria-pressed={outputFormat === 'jpeg'}
                    className={`min-h-[56px] px-6 py-3 rounded-2xl text-xl font-extrabold border-2 transition-all ${
                      outputFormat === 'jpeg'
                        ? 'bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal border-sage-primary dark:border-sage-accent shadow-md'
                        : 'bg-sage-surface dark:bg-sage-darkBg text-sage-charcoal dark:text-sage-light border-sage-moss hover:bg-sage-light/60'
                    }`}
                  >
                    .JPEG
                  </button>
                </div>
              </div>

              {/* JPEG Quality Slider (60% to 100%, default 92%) */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="jpeg-quality-slider"
                    className="text-lg md:text-xl font-extrabold text-sage-charcoal dark:text-sage-light"
                  >
                    {t.qualityLabel}
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal text-lg font-extrabold">
                    {quality}%
                  </span>
                </div>
                <div className="min-h-[56px] flex items-center px-4 rounded-2xl bg-sage-surface dark:bg-sage-darkBg border-2 border-sage-moss">
                  <input
                    id="jpeg-quality-slider"
                    type="range"
                    min={60}
                    max={100}
                    step={1}
                    value={quality}
                    aria-label={`${t.qualityLabel} (${quality}%)`}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    onMouseUp={() => reprocessAll(quality, stripExif)}
                    onTouchEnd={() => reprocessAll(quality, stripExif)}
                    onKeyUp={() => reprocessAll(quality, stripExif)}
                    className="w-full h-3 bg-sage-light dark:bg-sage-moss rounded-lg appearance-none cursor-pointer accent-sage-primary dark:accent-sage-accent"
                  />
                </div>
              </div>

              {/* Action Buttons: Add More + Clear All */}
              <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 min-h-[56px] px-6 py-4 rounded-2xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal text-lg md:text-xl font-bold flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity"
                >
                  <Plus className="w-6 h-6 shrink-0" aria-hidden="true" />
                  <span>{t.addMoreButton}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  aria-label={t.clearAllButton}
                  className="min-h-[56px] px-5 py-4 rounded-2xl border-2 border-sage-moss bg-sage-surface dark:bg-sage-darkBg text-sage-charcoal dark:text-sage-light text-lg font-bold flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-950/40 transition-colors"
                >
                  <Trash2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                  <span>{t.clearAllButton}</span>
                </button>
              </div>
            </div>

            {/* Prominent Privacy Toggle: Strip GPS & EXIF Metadata (Checked by Default) */}
            <div className="pt-4 border-t-2 border-sage-accent/60 dark:border-sage-moss/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label
                htmlFor="strip-exif-toggle"
                className="flex items-start sm:items-center gap-4 cursor-pointer select-none"
              >
                <input
                  id="strip-exif-toggle"
                  type="checkbox"
                  checked={stripExif}
                  aria-label={t.stripExifLabel}
                  onChange={(e) => {
                    const nextVal = e.target.checked;
                    setStripExif(nextVal);
                    reprocessAll(quality, nextVal);
                  }}
                  className="w-7 h-7 mt-1 sm:mt-0 rounded-lg accent-sage-primary dark:accent-sage-accent cursor-pointer shrink-0"
                />
                <div>
                  <span className="block text-lg md:text-xl font-extrabold text-sage-charcoal dark:text-sage-light">
                    {t.stripExifLabel}
                  </span>
                  <span className="block text-base md:text-lg font-medium text-sage-charcoal/80 dark:text-gray-300">
                    {t.stripExifHint}
                  </span>
                </div>
              </label>

              <div className="px-4 py-2 rounded-xl bg-sage-surface dark:bg-sage-darkBg border border-sage-moss text-base md:text-lg font-bold text-sage-charcoal dark:text-sage-light shrink-0">
                {t.filesCountLabel}: {items.length}
              </div>
            </div>
          </div>

          {/* Main Grid of Converted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border-2 border-sage-accent dark:border-sage-moss bg-sage-surface dark:bg-sage-darkCard overflow-hidden shadow-lg flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="px-5 py-4 bg-sage-light dark:bg-sage-darkBg border-b-2 border-sage-accent dark:border-sage-moss flex items-center justify-between gap-2">
                    <h3
                      className="text-lg md:text-xl font-extrabold text-sage-charcoal dark:text-sage-light truncate"
                      title={item.originalName}
                    >
                      {getOutputFileName(item.originalName, outputFormat)}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label={`${t.removeFileAria}: ${item.originalName}`}
                      className="w-11 h-11 rounded-xl bg-sage-surface/80 dark:bg-sage-darkCard text-sage-charcoal dark:text-sage-light hover:bg-red-200 dark:hover:bg-red-900/50 flex items-center justify-center shrink-0 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Fixed Aspect-Ratio Thumbnail Box (Zero CLS) */}
                  <div className="relative w-full aspect-[4/3] bg-sage-light/25 dark:bg-sage-darkBg flex items-center justify-center overflow-hidden">
                    {item.status === 'converting' && (
                      <div className="flex flex-col items-center gap-3 p-6 text-center">
                        <Loader2 className="w-12 h-12 animate-spin text-sage-primary dark:text-sage-accent" aria-hidden="true" />
                        <span className="text-lg font-bold text-sage-charcoal dark:text-sage-light">
                          {t.convertingStatus}
                        </span>
                      </div>
                    )}

                    {item.status === 'error' && (
                      <div className="flex flex-col items-center gap-3 p-6 text-center text-red-700 dark:text-red-300">
                        <AlertCircle className="w-12 h-12" aria-hidden="true" />
                        <span className="text-lg font-bold">{item.errorMessage}</span>
                      </div>
                    )}

                    {item.status === 'done' && item.convertedUrl && (
                      <img
                        src={item.convertedUrl}
                        alt={getOutputFileName(item.originalName, outputFormat)}
                        width={640}
                        height={480}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    )}

                    {item.status === 'done' && item.exifStripped && (
                      <span className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-sage-charcoal/85 text-sage-light text-sm font-bold flex items-center gap-1.5 backdrop-blur-sm">
                        <ShieldCheck className="w-4 h-4 text-sage-accent" aria-hidden="true" />
                        {t.privacyRemovedBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Sizes & Big Individual Download Button */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-base md:text-lg font-bold text-sage-charcoal dark:text-gray-200 bg-sage-light/30 dark:bg-sage-darkBg px-4 py-2.5 rounded-2xl">
                    <span>
                      {t.originalSize}: {formatBytes(item.originalSize)}
                    </span>
                    {item.convertedSize && (
                      <span className="text-sage-primary dark:text-sage-accent flex items-center gap-1">
                        <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                        {t.convertedSize}: {formatBytes(item.convertedSize)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={item.status !== 'done'}
                    onClick={() => handleDownloadSingle(item)}
                    className="w-full px-8 py-5 min-h-[56px] text-xl font-bold rounded-2xl bg-sage-primary dark:bg-sage-accent text-white dark:text-sage-charcoal shadow-md hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
                  >
                    <Download className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span>
                      {t.downloadSingle} (.{outputFormat.toUpperCase()})
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Giant Floating 'Download All as ZIP' Button when 2+ files are present */}
          {items.length >= 2 && (
            <div className="sticky bottom-6 z-40 flex justify-center pt-4">
              <button
                type="button"
                disabled={readyItemsCount === 0 || isZipping}
                onClick={handleDownloadAllZip}
                className="w-full sm:w-auto min-w-[320px] px-10 py-6 min-h-[64px] text-xl md:text-2xl font-extrabold rounded-3xl bg-sage-charcoal dark:bg-sage-light text-sage-light dark:text-sage-charcoal border-4 border-sage-light dark:border-sage-primary shadow-2xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-4 transition-all"
              >
                {isZipping ? (
                  <>
                    <Loader2 className="w-8 h-8 animate-spin shrink-0" aria-hidden="true" />
                    <span>{t.zippingStatus}</span>
                  </>
                ) : (
                  <>
                    <FolderArchive className="w-8 h-8 shrink-0" aria-hidden="true" />
                    <span>
                      {t.downloadAllZip} ({readyItemsCount})
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
