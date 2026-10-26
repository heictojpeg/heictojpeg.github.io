export type LangCode = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh' | 'ru';

export interface LanguageMeta {
  code: LangCode;
  badge: string;
  label: string;
  path: string;
  hreflang: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', badge: 'US', label: 'English', path: '/', hreflang: 'en' },
  { code: 'es', badge: 'ES', label: 'Español', path: '/es/', hreflang: 'es' },
  { code: 'pt', badge: 'BR', label: 'Português', path: '/pt/', hreflang: 'pt' },
  { code: 'de', badge: 'DE', label: 'Deutsch', path: '/de/', hreflang: 'de' },
  { code: 'fr', badge: 'FR', label: 'Français', path: '/fr/', hreflang: 'fr' },
  { code: 'ja', badge: 'JP', label: '日本語', path: '/ja/', hreflang: 'ja' },
  { code: 'zh', badge: 'CN', label: '简体中文', path: '/zh/', hreflang: 'zh' },
  { code: 'ru', badge: 'RU', label: 'Русский', path: '/ru/', hreflang: 'ru' },
];

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  breadcrumbs: {
    home: string;
    current: string;
  };
  navbar: {
    brandSub: string;
    languageLabel: string;
    themeToggleLabel: string;
    installPwa: string;
    installPwaAria: string;
    supportDev: string;
    supportDevAria: string;
    iosModalTitle: string;
    iosModalStep1: string;
    iosModalStep2: string;
    iosModalClose: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
  };
  converter: {
    dropTitle: string;
    dropSubtitle: string;
    selectButton: string;
    addMoreButton: string;
    clearAllButton: string;
    trustOffline: string;
    trustBatch: string;
    trustQuality: string;
    outputFormatLabel: string;
    qualityLabel: string;
    stripExifLabel: string;
    stripExifHint: string;
    convertingStatus: string;
    readyStatus: string;
    errorStatus: string;
    downloadSingle: string;
    downloadAllZip: string;
    zippingStatus: string;
    originalSize: string;
    convertedSize: string;
    removeFileAria: string;
    privacyRemovedBadge: string;
    filesCountLabel: string;
  };
  howTo: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  comparison: {
    title: string;
    subtitle: string;
    headers: [string, string, string, string];
    rows: [string, string, string, string][];
  };
  offlinePwa: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    tagline: string;
    privacyPromise: string;
    supportCta: string;
    licenseText: string;
  };
}

export const TRANSLATIONS: Record<LangCode, TranslationDictionary> = {
  en: {
    meta: {
      title: 'HEIC to JPG & JPEG Converter | Free Offline HEIF to JPG Tool (100% Client-Side)',
      description:
        'Free online HEIC to JPG converter and offline HEIF to JPG converter. Learn how to convert HEIC to JPG instantly in your browser with zero uploads, batch ZIP export, EXIF privacy stripping, and free download PWA support.',
      keywords:
        'heic to jpeg, heic to jpg, heif to jpg converter, how to convert heic to jpg, heic to jpg converter free download, online heic to jpg converter, free heic to jpg converter, heic to jpg converter online',
    },
    breadcrumbs: {
      home: 'Home',
      current: 'HEIC to JPG Converter',
    },
    navbar: {
      brandSub: '100% Offline & Private',
      languageLabel: 'Select Language',
      themeToggleLabel: 'Toggle Light or Dark Theme',
      installPwa: 'Add to Home Screen',
      installPwaAria: 'Install HEIC to JPG Converter Offline App (Add to Home Screen)',
      supportDev: 'Support the Developer',
      supportDevAria: 'Support the Developer on Ko-fi',
      iosModalTitle: 'Install Offline HEIC to JPG App',
      iosModalStep1: '1. Tap the Share button in your browser toolbar or use your browser menu ("Install App" / "Add to Home Screen").',
      iosModalStep2: '2. Select "Add to Home Screen" to use this HEIC to JPG converter 100% offline anytime.',
      iosModalClose: 'Got It, Close',
    },
    hero: {
      badge: '100% Client-Side Browser Engine • Zero Server Uploads',
      h1: 'HEIC to JPG & JPEG Converter',
      subtitle:
        'The ultra-accessible, free online HEIC to JPG converter and HEIF to JPG converter. Convert Apple iPhone & iPad photos privately inside your browser with batch ZIP export and automatic GPS/EXIF removal.',
    },
    converter: {
      dropTitle: 'Drop your .HEIC or .HEIF photos here',
      dropSubtitle: 'Or click below to browse files from your device • Unlimited batch conversion',
      selectButton: 'Select HEIC Images',
      addMoreButton: 'Add More HEIC Photos',
      clearAllButton: 'Clear All',
      trustOffline: '100% Offline & Private',
      trustBatch: 'Supports Batch HEIC/HEIF',
      trustQuality: 'Zero Quality Loss',
      outputFormatLabel: 'Output Format',
      qualityLabel: 'JPEG Quality',
      stripExifLabel: 'Strip GPS & EXIF Metadata (Checked by Default)',
      stripExifHint: 'Removes hidden camera location coordinates & device tracking data via clean HTML5 Canvas reconstruction',
      convertingStatus: 'Converting in browser...',
      readyStatus: 'Converted & Ready',
      errorStatus: 'Conversion failed — ensure valid HEIC/HEIF file',
      downloadSingle: 'Download JPG',
      downloadAllZip: 'Download All as ZIP',
      zippingStatus: 'Creating ZIP Archive...',
      originalSize: 'Original',
      convertedSize: 'Converted',
      removeFileAria: 'Remove photo from workspace',
      privacyRemovedBadge: 'EXIF & GPS Stripped',
      filesCountLabel: 'Photos in Workspace',
    },
    howTo: {
      title: 'How to Convert HEIC to JPG in 3 Simple Steps',
      subtitle:
        'Searching for how to convert HEIC to JPG without uploading sensitive family or work photos to cloud servers? Our online HEIC to JPG converter runs entirely on your device hardware.',
      steps: [
        {
          title: '1. Select or Drag & Drop HEIC/HEIF Photos',
          description:
            'Click the oversized "Select HEIC Images" button or drag multiple Apple iPhone/iPad .heic and .heif files directly into the dropzone. There are no file count limits or cloud queue delays.',
        },
        {
          title: '2. Customize Format (.JPG / .JPEG), Quality & EXIF Privacy',
          description:
            'Choose between .jpg or .jpeg file extensions, adjust the JPEG quality slider from 60% to 100% (default 92%), and keep "Strip GPS & EXIF Metadata" enabled to wipe embedded location coordinates.',
        },
        {
          title: '3. Instant Download or Batch Export as ZIP',
          description:
            'Save individual converted photos with one tap on "Download JPG" or click the giant floating "Download All as ZIP" button to bundle dozens of converted images into a single clean archive.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF vs. JPG: Why Use Our Client-Side Converter?',
      subtitle:
        'Apple iOS uses HEIC (High Efficiency Image Coding) by default, which often fails to open on Windows PCs, older Android devices, government portals, and web CMS platforms.',
      headers: ['Feature', 'HEICtoJPEG (This Tool)', 'Cloud Online Converters', 'Desktop Paid Software'],
      rows: [
        ['Privacy & Data Security', '100% Local in Browser (Zero Uploads)', 'Uploads photos to remote servers', 'Local, but requires installer'],
        ['Cost & Limits', '100% Free, Unlimited Batch Files', 'File size & daily count paywalls', 'Paid license or freemium trial'],
        ['Offline App Support', 'Yes (Installable PWA Free Download)', 'Requires active internet connection', 'Yes'],
        ['GPS & EXIF Stripping', 'Automatic via Canvas Reconstruction', 'Rarely included', 'Varies by program'],
        ['Universal Compatibility', 'Outputs standard .JPG & .JPEG', 'Outputs .JPG', 'Outputs .JPG'],
      ],
    },
    offlinePwa: {
      title: 'HEIC to JPG Converter Free Download — Offline Web App (PWA)',
      subtitle:
        'Need a reliable HEIC to JPG converter free download without bloated installers or adware? Install HEICtoJPEG directly to your Windows, macOS, iOS, or Android home screen.',
      cards: [
        {
          title: 'Works 100% Without Internet',
          description:
            'Once opened or installed via "Add to Home Screen", our Service Worker caches the entire WebAssembly & JavaScript decoding engine so you can convert HEIC to JPEG on airplanes or remote job sites.',
        },
        {
          title: 'Zero Cloud Upload Risk',
          description:
            'Unlike traditional online HEIC to JPG converter websites that transmit your personal photos over the internet, every byte stays inside your browser RAM and is cleared the moment you close the tab.',
        },
        {
          title: 'Oversized Ergonomic Interface',
          description:
            'Designed with high-contrast botanical colors, 56px+ touch targets, and extra-large typography so photographers, seniors, and busy teams can convert files effortlessly without squinting.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions — Online HEIC to JPG Converter',
      subtitle: 'Everything you need to know about converting Apple HEIC and HEIF images to universally compatible JPEG format.',
      items: [
        {
          question: 'How to convert HEIC to JPG for free without uploading my photos?',
          answer:
            'Simply open https://heictojpeg.github.io/ and drop your .heic or .heif files into the box. Our free HEIC to JPG converter uses client-side decoding (heic2any + HTML5 Canvas) to process images directly on your computer or phone CPU with zero server uploads.',
        },
        {
          question: 'Is this both an online HEIC to JPG converter and a HEIF to JPG converter?',
          answer:
            'Yes! HEIC is Apple’s container implementation of the HEIF (High Efficiency Image File) standard. Our tool natively decodes both .heic and .heif extensions and converts them into standard .jpg or .jpeg images.',
        },
        {
          question: 'Can I get a HEIC to JPG converter free download for offline desktop or mobile use?',
          answer:
            'Yes. Click the "Add to Home Screen" button in the top navigation bar. This installs our Progressive Web App (PWA) on Windows, Mac, Chromebook, iOS, or Android so it launches like a native offline app anytime.',
        },
        {
          question: 'Does converting HEIC to JPEG remove GPS location and EXIF metadata?',
          answer:
            'By default, our "Strip GPS & EXIF Metadata" toggle is checked. When enabled, the image pixels are redrawn onto a clean HTML5 Canvas before encoding to JPEG, completely stripping hidden GPS coordinates, camera serial numbers, and timestamps.',
        },
        {
          question: 'How many HEIC photos can I batch convert at once?',
          answer:
            'There is no artificial limit! Because conversion happens locally on your device, you can drag dozens of HEIC photos at once and click "Download All as ZIP" to grab all converted JPGs in a single archive.',
        },
      ],
    },
    footer: {
      tagline: 'Ultra-minimal, 100% client-side HEIC/HEIF to JPG & JPEG converter built for privacy, speed, and accessibility.',
      privacyPromise: 'Privacy Guarantee: Your photos never leave your device. 0% server uploads.',
      supportCta: 'Support the Developer on Ko-fi',
      licenseText: 'Released under the MIT License.',
    },
  },
  es: {
    meta: {
      title: 'Convertidor HEIC a JPG y JPEG | Herramienta HEIF a JPG Gratis y Sin Conexión',
      description:
        'Convierte fotos HEIC y HEIF de iPhone a JPG/JPEG al instante en tu navegador. 100% privado sin subir archivos al servidor, descarga masiva en ZIP y eliminación de metadatos EXIF.',
      keywords:
        'convertir heic a jpg, heic a jpeg, convertidor heif a jpg, como convertir heic a jpg, convertidor heic a jpg gratis, heic a jpg online',
    },
    breadcrumbs: {
      home: 'Inicio',
      current: 'Convertidor HEIC a JPG',
    },
    navbar: {
      brandSub: '100% Privado y Sin Conexión',
      languageLabel: 'Seleccionar idioma',
      themeToggleLabel: 'Cambiar tema claro u oscuro',
      installPwa: 'Añadir a Inicio',
      installPwaAria: 'Instalar aplicación sin conexión HEIC a JPG',
      supportDev: 'Apoyar al Desarrollador',
      supportDevAria: 'Apoyar al desarrollador en Ko-fi',
      iosModalTitle: 'Instalar App HEIC a JPG Sin Conexión',
      iosModalStep1: '1. Toca el botón Compartir en Safari o abre el menú de tu navegador ("Instalar aplicación").',
      iosModalStep2: '2. Selecciona "Añadir a la pantalla de inicio" para usar el convertidor sin internet.',
      iosModalClose: 'Entendido, Cerrar',
    },
    hero: {
      badge: 'Motor 100% en tu Navegador • Cero Subidas al Servidor',
      h1: 'Convertidor HEIC a JPG y JPEG',
      subtitle:
        'Convierte fotos .HEIC y .HEIF de iPhone/iPad a formato .JPG universal al instante. 100% gratuito, privado, por lotes en ZIP y con limpieza automática de ubicación GPS.',
    },
    converter: {
      dropTitle: 'Arrastra tus fotos .HEIC o .HEIF aquí',
      dropSubtitle: 'O haz clic en el botón para elegir archivos de tu dispositivo • Conversión por lotes',
      selectButton: 'Seleccionar Imágenes HEIC',
      addMoreButton: 'Añadir Más Fotos HEIC',
      clearAllButton: 'Limpiar Todo',
      trustOffline: '100% Privado y Offline',
      trustBatch: 'Soporta Lotes HEIC/HEIF',
      trustQuality: 'Sin Pérdida de Calidad',
      outputFormatLabel: 'Formato de Salida',
      qualityLabel: 'Calidad JPEG',
      stripExifLabel: 'Eliminar GPS y Metadatos EXIF (Activado por defecto)',
      stripExifHint: 'Borra coordenadas ocultas de ubicación y datos del dispositivo al reconstruir el archivo JPG',
      convertingStatus: 'Convirtiendo en el navegador...',
      readyStatus: 'Convertido y Listo',
      errorStatus: 'Error al convertir — verifica el archivo HEIC/HEIF',
      downloadSingle: 'Descargar JPG',
      downloadAllZip: 'Descargar Todo en ZIP',
      zippingStatus: 'Creando archivo ZIP...',
      originalSize: 'Original',
      convertedSize: 'Convertido',
      removeFileAria: 'Eliminar foto de la lista',
      privacyRemovedBadge: 'Sin EXIF ni GPS',
      filesCountLabel: 'Fotos en el área de trabajo',
    },
    howTo: {
      title: 'Cómo Convertir HEIC a JPG en 3 Simples Pasos',
      subtitle: 'Convierte tus imágenes de Apple directamente en tu dispositivo sin subirlas a ningún servidor externo.',
      steps: [
        {
          title: '1. Selecciona o Arrastra tus Fotos HEIC/HEIF',
          description: 'Haz clic en "Seleccionar Imágenes HEIC" o suelta varios archivos .heic y .heif en la zona punteada.',
        },
        {
          title: '2. Ajusta Formato (.JPG / .JPEG), Calidad y Privacidad EXIF',
          description: 'Elige la extensión, ajusta la calidad (60% a 100%) y mantén activa la opción para borrar datos GPS.',
        },
        {
          title: '3. Descarga Individualmente o Todo en un ZIP',
          description: 'Descarga cada imagen al instante o pulsa "Descargar Todo en ZIP" para guardar todas tus fotos juntas.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF vs. JPG: ¿Por Qué Convertir Sin Conexión?',
      subtitle: 'Compara nuestra herramienta 100% local frente a los convertidores tradicionales en la nube.',
      headers: ['Característica', 'HEICtoJPEG (Esta Web)', 'Convertidores en la Nube', 'Programas de Pago'],
      rows: [
        ['Privacidad', '100% Local en tu Navegador', 'Sube tus fotos a servidores', 'Local con instalador pesado'],
        ['Precio y Límites', '100% Gratis e Ilimitado', 'Límites diarios y anuncios', 'Licencia de pago'],
        ['Modo Sin Conexión (PWA)', 'Sí (Instalable gratis)', 'Requiere internet siempre', 'Sí'],
        ['Limpieza de GPS / EXIF', 'Automática por defecto', 'Rara vez incluida', 'Variable'],
        ['Compatibilidad', 'Genera .JPG y .JPEG estándar', 'Genera .JPG', 'Genera .JPG'],
      ],
    },
    offlinePwa: {
      title: 'Descargar Convertidor HEIC a JPG Gratis — App Web Offline (PWA)',
      subtitle: 'Instala nuestra aplicación ligera en Windows, Mac, Android o iOS con un solo clic.',
      cards: [
        {
          title: 'Funciona 100% Sin Internet',
          description: 'Una vez instalada, puedes convertir fotos HEIC a JPG incluso en modo avión o sin cobertura.',
        },
        {
          title: 'Cero Riesgo en la Nube',
          description: 'Tus fotos personales nunca salen de tu ordenador o móvil.',
        },
        {
          title: 'Diseño Accesible y Grande',
          description: 'Botones grandes, tipografía clara y alto contraste para usar sin esfuerzo.',
        },
      ],
    },
    faq: {
      title: 'Preguntas Frecuentes — Convertidor HEIC a JPG',
      subtitle: 'Respuestas rápidas sobre la conversión de archivos HEIC y HEIF a JPEG.',
      items: [
        {
          question: '¿Cómo convertir HEIC a JPG gratis sin subir mis fotos?',
          answer: 'Solo arrastra tus archivos aquí. Todo el procesamiento ocurre dentro de tu navegador web mediante HTML5 Canvas.',
        },
        {
          question: '¿Funciona tanto con archivos .HEIC como .HEIF?',
          answer: 'Sí, soporta ambos formatos estándar de Apple y los exporta a .jpg o .jpeg.',
        },
        {
          question: '¿Se borran los datos de ubicación GPS al convertir?',
          answer: 'Sí, la opción para eliminar metadatos GPS y EXIF viene activada por defecto para proteger tu privacidad.',
        },
      ],
    },
    footer: {
      tagline: 'Convertidor minimalista HEIC/HEIF a JPG y JPEG 100% en el navegador.',
      privacyPromise: 'Garantía de privacidad: Tus fotos nunca salen de tu dispositivo.',
      supportCta: 'Apoyar al Desarrollador en Ko-fi',
      licenseText: 'Publicado bajo Licencia MIT.',
    },
  },
  pt: {
    meta: {
      title: 'Conversor HEIC para JPG e JPEG | Ferramenta HEIF para JPG Grátis e Offline',
      description:
        'Converta fotos HEIC e HEIF do iPhone para JPG/JPEG instantaneamente no navegador. 100% privado sem upload para servidor, download em lote ZIP e remoção de EXIF.',
      keywords:
        'heic para jpg, heic para jpeg, conversor heif para jpg, como converter heic para jpg, conversor heic para jpg gratis, heic para jpg online',
    },
    breadcrumbs: {
      home: 'Início',
      current: 'Conversor HEIC para JPG',
    },
    navbar: {
      brandSub: '100% Offline e Privado',
      languageLabel: 'Selecionar Idioma',
      themeToggleLabel: 'Alternar tema claro ou escuro',
      installPwa: 'Adicionar à Tela Inicial',
      installPwaAria: 'Instalar aplicativo offline Conversor HEIC para JPG',
      supportDev: 'Apoiar o Desenvolvedor',
      supportDevAria: 'Apoiar o desenvolvedor no Ko-fi',
      iosModalTitle: 'Instalar App Offline HEIC para JPG',
      iosModalStep1: '1. Toque no botão Compartilhar no navegador ou abra o menu ("Instalar aplicativo").',
      iosModalStep2: '2. Selecione "Adicionar à Tela de Início" para usar o conversor 100% offline.',
      iosModalClose: 'Entendi, Fechar',
    },
    hero: {
      badge: 'Processamento 100% no Navegador • Zero Uploads',
      h1: 'Conversor HEIC para JPG e JPEG',
      subtitle:
        'Converta fotos .HEIC e .HEIF do iPhone e iPad para .JPG com total privacidade no seu navegador, exportação em ZIP e remoção automática de localização GPS.',
    },
    converter: {
      dropTitle: 'Solte suas fotos .HEIC ou .HEIF aqui',
      dropSubtitle: 'Ou clique abaixo para selecionar arquivos do seu dispositivo • Conversão em lote ilimitada',
      selectButton: 'Selecionar Imagens HEIC',
      addMoreButton: 'Adicionar Mais Fotos HEIC',
      clearAllButton: 'Limpar Tudo',
      trustOffline: '100% Offline e Privado',
      trustBatch: 'Suporta Lotes HEIC/HEIF',
      trustQuality: 'Zero Perda de Qualidade',
      outputFormatLabel: 'Formato de Saída',
      qualityLabel: 'Qualidade JPEG',
      stripExifLabel: 'Remover Metadados GPS e EXIF (Ativado por Padrão)',
      stripExifHint: 'Remove coordenadas ocultas de localização GPS e dados da câmera via HTML5 Canvas',
      convertingStatus: 'Convertendo no navegador...',
      readyStatus: 'Convertido e Pronto',
      errorStatus: 'Falha na conversão — verifique o arquivo HEIC/HEIF',
      downloadSingle: 'Baixar JPG',
      downloadAllZip: 'Baixar Tudo em ZIP',
      zippingStatus: 'Criando arquivo ZIP...',
      originalSize: 'Original',
      convertedSize: 'Convertido',
      removeFileAria: 'Remover foto da área de trabalho',
      privacyRemovedBadge: 'EXIF e GPS Removidos',
      filesCountLabel: 'Fotos na Área de Trabalho',
    },
    howTo: {
      title: 'Como Converter HEIC para JPG em 3 Passos Simples',
      subtitle: 'Converta suas fotos da Apple diretamente no seu dispositivo sem enviar arquivos para a nuvem.',
      steps: [
        {
          title: '1. Selecione ou Arraste Fotos HEIC/HEIF',
          description: 'Clique em "Selecionar Imagens HEIC" ou arraste vários arquivos .heic e .heif para a área tracejada.',
        },
        {
          title: '2. Escolha Formato (.JPG / .JPEG), Qualidade e Privacidade EXIF',
          description: 'Defina a qualidade JPEG de 60% a 100% e mantenha a remoção de GPS ativada.',
        },
        {
          title: '3. Baixe Individualmente ou Tudo em ZIP',
          description: 'Salve cada foto convertida com um clique ou baixe todas de uma vez em um arquivo .ZIP.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF vs. JPG: Por Que Converter Offline?',
      subtitle: 'Veja por que nossa ferramenta local é mais rápida e segura do que conversores na nuvem.',
      headers: ['Recurso', 'HEICtoJPEG (Esta Ferramenta)', 'Conversores Online na Nuvem', 'Software Pago'],
      rows: [
        ['Privacidade', '100% Local no Navegador', 'Envia fotos para servidores remotos', 'Local com instalador'],
        ['Custo e Limites', '100% Grátis e Ilimitado', 'Limites de tamanho e quantidade', 'Licença paga'],
        ['Modo App Offline', 'Sim (PWA instalável grátis)', 'Exige conexão com a internet', 'Sim'],
        ['Remoção de GPS/EXIF', 'Automática por padrão', 'Raramente incluída', 'Varia'],
        ['Compatibilidade', 'Exporta .JPG e .JPEG padrão', 'Exporta .JPG', 'Exporta .JPG'],
      ],
    },
    offlinePwa: {
      title: 'Download Grátis do Conversor HEIC para JPG — App Offline (PWA)',
      subtitle: 'Adicione o HEICtoJPEG à sua tela inicial no Windows, macOS, Android ou iOS.',
      cards: [
        {
          title: 'Funciona 100% Sem Internet',
          description: 'Nosso Service Worker salva o conversor no seu navegador para uso totalmente offline.',
        },
        {
          title: 'Zero Risco de Vazamento',
          description: 'Suas fotos pessoais nunca saem da memória do seu dispositivo.',
        },
        {
          title: 'Interface Grande e Acessível',
          description: 'Botões amplos e tipografia de fácil leitura em qualquer tela.',
        },
      ],
    },
    faq: {
      title: 'Perguntas Frequentes — Conversor HEIC para JPG',
      subtitle: 'Tire suas dúvidas sobre a conversão de imagens HEIC e HEIF para JPEG.',
      items: [
        {
          question: 'Como converter HEIC para JPG grátis sem enviar minhas fotos?',
          answer: 'Basta soltar os arquivos nesta página. Tudo é processado localmente no seu navegador.',
        },
        {
          question: 'Suporta tanto .HEIC quanto .HEIF?',
          answer: 'Sim! Ambos os formatos são convertidos instantaneamente para .jpg ou .jpeg.',
        },
        {
          question: 'Meus dados de localização GPS são removidos?',
          answer: 'Sim, a opção de remover metadados EXIF e GPS já vem marcada por padrão.',
        },
      ],
    },
    footer: {
      tagline: 'Conversor minimalista de HEIC/HEIF para JPG e JPEG 100% local no navegador.',
      privacyPromise: 'Garantia de Privacidade: Suas fotos nunca saem do seu dispositivo.',
      supportCta: 'Apoiar o Desenvolvedor no Ko-fi',
      licenseText: 'Licenciado sob a Licença MIT.',
    },
  },
  de: {
    meta: {
      title: 'HEIC in JPG & JPEG Konverter | Kostenloses Offline HEIF zu JPG Tool',
      description:
        'Konvertieren Sie iPhone HEIC- und HEIF-Fotos sofort im Browser in JPG/JPEG. 100% lokal ohne Server-Upload, Stapelverarbeitung als ZIP und EXIF-Metadaten-Entfernung.',
      keywords:
        'heic in jpg, heic zu jpeg, heif zu jpg konverter, heic in jpg umwandeln, kostenloser heic zu jpg konverter, heic zu jpg online',
    },
    breadcrumbs: {
      home: 'Startseite',
      current: 'HEIC zu JPG Konverter',
    },
    navbar: {
      brandSub: '100% Offline & Privat',
      languageLabel: 'Sprache wählen',
      themeToggleLabel: 'Helles oder dunkles Design umschalten',
      installPwa: 'Zum Startbildschirm',
      installPwaAria: 'Offline HEIC zu JPG App installieren (Zum Startbildschirm hinzufügen)',
      supportDev: 'Entwickler unterstützen',
      supportDevAria: 'Entwickler auf Ko-fi unterstützen',
      iosModalTitle: 'Offline HEIC zu JPG App installieren',
      iosModalStep1: '1. Tippen Sie auf Teilen in Safari oder nutzen Sie das Browser-Menü ("App installieren").',
      iosModalStep2: '2. Wählen Sie "Zum Home-Bildschirm", um den Konverter jederzeit offline zu nutzen.',
      iosModalClose: 'Verstanden, Schließen',
    },
    hero: {
      badge: '100% Client-Seitige Browser-Engine • Keine Server-Uploads',
      h1: 'HEIC zu JPG & JPEG Konverter',
      subtitle:
        'Wandeln Sie Apple iPhone & iPad .HEIC und .HEIF Fotos direkt im Browser in .JPG um. Inklusive ZIP-Stapeldownload und automatischer GPS/EXIF-Bereinigung.',
    },
    converter: {
      dropTitle: '.HEIC oder .HEIF Fotos hier ablegen',
      dropSubtitle: 'Oder unten klicken, um Dateien vom Gerät auszuwählen • Unbegrenzte Stapelverarbeitung',
      selectButton: 'HEIC-Bilder auswählen',
      addMoreButton: 'Weitere HEIC-Fotos hinzufügen',
      clearAllButton: 'Alle löschen',
      trustOffline: '100% Offline & Privat',
      trustBatch: 'HEIC/HEIF Stapel-Support',
      trustQuality: 'Kein Qualitätsverlust',
      outputFormatLabel: 'Ausgabeformat',
      qualityLabel: 'JPEG-Qualität',
      stripExifLabel: 'GPS- & EXIF-Metadaten entfernen (Standardmäßig aktiviert)',
      stripExifHint: 'Entfernt versteckte GPS-Standortdaten und Kamera-Informationen durch saubere Canvas-Rekonstruktion',
      convertingStatus: 'Konvertiere im Browser...',
      readyStatus: 'Konvertiert & Bereit',
      errorStatus: 'Fehler — bitte gültige HEIC/HEIF-Datei prüfen',
      downloadSingle: 'JPG herunterladen',
      downloadAllZip: 'Alle als ZIP herunterladen',
      zippingStatus: 'Erstelle ZIP-Archiv...',
      originalSize: 'Original',
      convertedSize: 'Konvertiert',
      removeFileAria: 'Foto aus Arbeitsbereich entfernen',
      privacyRemovedBadge: 'EXIF & GPS entfernt',
      filesCountLabel: 'Fotos im Arbeitsbereich',
    },
    howTo: {
      title: 'So wandeln Sie HEIC in JPG um — in 3 einfachen Schritten',
      subtitle: 'Konvertieren Sie Ihre iPhone-Fotos sicher auf Ihrem eigenen Gerät ohne Cloud-Upload.',
      steps: [
        {
          title: '1. HEIC/HEIF-Fotos auswählen oder hineinziehen',
          description: 'Klicken Sie auf "HEIC-Bilder auswählen" oder ziehen Sie mehrere Dateien in das große Feld.',
        },
        {
          title: '2. Format (.JPG / .JPEG), Qualität & EXIF-Schutz wählen',
          description: 'Passen Sie die Qualität (60%–100%) an und lassen Sie die EXIF-Entfernung für maximalen Datenschutz aktiv.',
        },
        {
          title: '3. Einzeln oder gesammelt als ZIP herunterladen',
          description: 'Laden Sie einzelne JPGs herunter oder speichern Sie alle Bilder mit einem Klick als ZIP-Datei.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF vs. JPG: Warum Offline im Browser konvertieren?',
      subtitle: 'Maximale Datensicherheit im Vergleich zu herkömmlichen Online-Konvertern.',
      headers: ['Funktion', 'HEICtoJPEG (Dieses Tool)', 'Cloud-Online-Konverter', 'Bezahlte Desktop-Software'],
      rows: [
        ['Datenschutz', '100% Lokal im Browser', 'Lädt Fotos auf fremde Server hoch', 'Lokal, aber Installation nötig'],
        ['Kosten & Limits', '100% Kostenlos & Unbegrenzt', 'Größen- und Tageslimits', 'Kostenpflichtig'],
        ['Offline-App-Modus', 'Ja (Installierbare PWA)', 'Erfordert Internetverbindung', 'Ja'],
        ['GPS & EXIF löschen', 'Automatisch integriert', 'Selten vorhanden', 'Unterschiedlich'],
        ['Kompatibilität', 'Erzeugt Standard .JPG & .JPEG', 'Erzeugt .JPG', 'Erzeugt .JPG'],
      ],
    },
    offlinePwa: {
      title: 'HEIC zu JPG Konverter Kostenloser Download — Offline Web-App (PWA)',
      subtitle: 'Installieren Sie HEICtoJPEG direkt auf Windows, macOS, iOS oder Android.',
      cards: [
        {
          title: 'Funktioniert 100% ohne Internet',
          description: 'Nach dem Öffnen oder Installieren funktioniert die Konvertierung komplett offline.',
        },
        {
          title: 'Kein Cloud-Risiko',
          description: 'Ihre privaten Fotos verlassen niemals Ihren Computer oder Ihr Smartphone.',
        },
        {
          title: 'Große, barrierefreie Oberfläche',
          description: 'Extra große Schrift und große Schaltflächen für komfortables Arbeiten.',
        },
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen — HEIC zu JPG Konverter',
      subtitle: 'Wichtige Informationen zur Umwandlung von Apple HEIC- und HEIF-Dateien in JPEG.',
      items: [
        {
          question: 'Wie kann ich HEIC kostenlos in JPG umwandeln, ohne Fotos hochzuladen?',
          answer: 'Ziehen Sie Ihre Dateien einfach in das Feld. Die Umwandlung erfolgt zu 100% lokal in Ihrem Browser.',
        },
        {
          question: 'Werden sowohl .HEIC als auch .HEIF unterstützt?',
          answer: 'Ja, beide Dateiformate werden direkt in .jpg oder .jpeg umgewandelt.',
        },
        {
          question: 'Werden GPS-Standortdaten automatisch entfernt?',
          answer: 'Ja, die Option zum Entfernen von GPS- und EXIF-Metadaten ist standardmäßig aktiviert.',
        },
      ],
    },
    footer: {
      tagline: 'Minimalistischer, 100% lokaler HEIC/HEIF zu JPG & JPEG Konverter im Browser.',
      privacyPromise: 'Datenschutz-Garantie: Ihre Fotos verlassen niemals Ihr Gerät.',
      supportCta: 'Entwickler auf Ko-fi unterstützen',
      licenseText: 'Veröffentlicht unter der MIT-Lizenz.',
    },
  },
  fr: {
    meta: {
      title: 'Convertisseur HEIC en JPG et JPEG | Outil HEIF en JPG Gratuit et Hors Ligne',
      description:
        'Convertissez vos photos iPhone HEIC et HEIF en JPG/JPEG instantanément dans votre navigateur. 100% privé sans envoi serveur, export ZIP par lot et suppression EXIF.',
      keywords:
        'heic en jpg, heic en jpeg, convertisseur heif en jpg, comment convertir heic en jpg, convertisseur heic en jpg gratuit, heic en jpg en ligne',
    },
    breadcrumbs: {
      home: 'Accueil',
      current: 'Convertisseur HEIC en JPG',
    },
    navbar: {
      brandSub: '100% Hors Ligne & Privé',
      languageLabel: 'Choisir la langue',
      themeToggleLabel: 'Basculer le thème clair ou sombre',
      installPwa: 'Ajouter à l’écran d’accueil',
      installPwaAria: 'Installer l’application hors ligne Convertisseur HEIC en JPG',
      supportDev: 'Soutenir le Développeur',
      supportDevAria: 'Soutenir le développeur sur Ko-fi',
      iosModalTitle: 'Installer l’App HEIC en JPG Hors Ligne',
      iosModalStep1: '1. Appuyez sur le bouton Partager de Safari ou ouvrez le menu du navigateur ("Installer l’application").',
      iosModalStep2: '2. Choisissez "Sur l’écran d’accueil" pour convertir vos fichiers 100% hors ligne.',
      iosModalClose: 'Compris, Fermer',
    },
    hero: {
      badge: 'Moteur 100% Navigateur • Zéro Envoi sur Serveur',
      h1: 'Convertisseur HEIC en JPG & JPEG',
      subtitle:
        'Convertissez vos photos Apple iPhone et iPad (.HEIC / .HEIF) en .JPG universel directement dans votre navigateur avec téléchargement ZIP par lot et suppression GPS/EXIF.',
    },
    converter: {
      dropTitle: 'Déposez vos photos .HEIC ou .HEIF ici',
      dropSubtitle: 'Ou cliquez ci-dessous pour parcourir vos fichiers • Conversion par lot illimitée',
      selectButton: 'Sélectionner des Images HEIC',
      addMoreButton: 'Ajouter Plus de Photos HEIC',
      clearAllButton: 'Tout Effacer',
      trustOffline: '100% Hors Ligne & Privé',
      trustBatch: 'Lot HEIC/HEIF Supporté',
      trustQuality: 'Zéro Perte de Qualité',
      outputFormatLabel: 'Format de Sortie',
      qualityLabel: 'Qualité JPEG',
      stripExifLabel: 'Supprimer GPS & Métadonnées EXIF (Activé par défaut)',
      stripExifHint: 'Efface les coordonnées GPS cachées et les infos de l’appareil photo via reconstruction HTML5 Canvas',
      convertingStatus: 'Conversion dans le navigateur...',
      readyStatus: 'Converti & Prêt',
      errorStatus: 'Échec de conversion — vérifiez le fichier HEIC/HEIF',
      downloadSingle: 'Télécharger JPG',
      downloadAllZip: 'Tout Télécharger en ZIP',
      zippingStatus: 'Création de l’archive ZIP...',
      originalSize: 'Original',
      convertedSize: 'Converti',
      removeFileAria: 'Retirer la photo de l’espace de travail',
      privacyRemovedBadge: 'EXIF & GPS Supprimés',
      filesCountLabel: 'Photos dans l’espace de travail',
    },
    howTo: {
      title: 'Comment Convertir HEIC en JPG en 3 Étapes Simples',
      subtitle: 'Transformez vos photos Apple localement sans jamais les envoyer sur le cloud.',
      steps: [
        {
          title: '1. Sélectionnez ou Glissez vos Photos HEIC/HEIF',
          description: 'Cliquez sur "Sélectionner des Images HEIC" ou glissez vos fichiers dans la grande zone.',
        },
        {
          title: '2. Choisissez le Format (.JPG / .JPEG), la Qualité et la Confidentialité EXIF',
          description: 'Ajustez le curseur de qualité (60% à 100%) et gardez la suppression des données GPS activée.',
        },
        {
          title: '3. Téléchargez Individuellement ou en Archive ZIP',
          description: 'Récupérez chaque image JPG ou téléchargez tout le lot en un seul fichier ZIP.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF vs. JPG : Pourquoi Convertir Hors Ligne ?',
      subtitle: 'Comparez notre approche 100% locale avec les convertisseurs en ligne classiques.',
      headers: ['Fonctionnalité', 'HEICtoJPEG (Cet Outil)', 'Convertisseurs Cloud', 'Logiciels Payants'],
      rows: [
        ['Confidentialité', '100% Local dans le Navigateur', 'Envoie vos photos sur un serveur', 'Local avec installateur'],
        ['Prix & Limites', '100% Gratuit & Illimité', 'Limites de taille et de nombre', 'Licence payante'],
        ['Mode Hors Ligne (PWA)', 'Oui (Application installable)', 'Connexion internet requise', 'Oui'],
        ['Suppression GPS/EXIF', 'Automatique par défaut', 'Rarement incluse', 'Variable'],
        ['Compatibilité', 'Produit du .JPG & .JPEG standard', 'Produit du .JPG', 'Produit du .JPG'],
      ],
    },
    offlinePwa: {
      title: 'Téléchargement Gratuit Convertisseur HEIC en JPG — App Hors Ligne (PWA)',
      subtitle: 'Installez HEICtoJPEG sur votre écran d’accueil Windows, Mac, iOS ou Android.',
      cards: [
        {
          title: 'Fonctionne 100% Sans Internet',
          description: 'Notre Service Worker met en cache le moteur de conversion pour une utilisation hors connexion.',
        },
        {
          title: 'Aucun Risque Cloud',
          description: 'Vos photos personnelles ne quittent jamais la mémoire vive de votre appareil.',
        },
        {
          title: 'Interface Ergonomique Géante',
          description: 'Grands boutons et typographie haute lisibilité pour un confort visuel optimal.',
        },
      ],
    },
    faq: {
      title: 'Questions Fréquentes — Convertisseur HEIC en JPG',
      subtitle: 'Tout savoir sur la conversion des images HEIC et HEIF en JPEG.',
      items: [
        {
          question: 'Comment convertir HEIC en JPG gratuitement sans envoyer mes photos ?',
          answer: 'Déposez simplement vos fichiers sur cette page. Tout est traité localement par votre navigateur.',
        },
        {
          question: 'Les formats .HEIC et .HEIF sont-ils tous deux pris en charge ?',
          answer: 'Oui, notre outil décode nativement les extensions .heic et .heif vers .jpg ou .jpeg.',
        },
        {
          question: 'Les coordonnées GPS sont-elles supprimées ?',
          answer: 'Oui, l’option de suppression des métadonnées GPS et EXIF est activée par défaut.',
        },
      ],
    },
    footer: {
      tagline: 'Convertisseur minimaliste HEIC/HEIF en JPG et JPEG 100% côté client.',
      privacyPromise: 'Garantie de confidentialité : Vos photos ne quittent jamais votre appareil.',
      supportCta: 'Soutenir le Développeur sur Ko-fi',
      licenseText: 'Publié sous licence MIT.',
    },
  },
  ja: {
    meta: {
      title: 'HEIC JPG・JPEG 変換 | 無料オフライン HEIF JPG 変換ツール (100%ブラウザ完結)',
      description:
        'iPhoneやiPadのHEIC・HEIF写真をブラウザ内で即座にJPG/JPEGへ一括変換。サーバーへのアップロードなし、ZIP一括保存、GPS・EXIF位置情報の自動削除に対応。',
      keywords:
        'heic jpg 変換, heic jpeg 変換, heif jpg 変換, heic jpg 変換 方法, heic jpg 変換 無料, heic jpg 変換 オンライン',
    },
    breadcrumbs: {
      home: 'ホーム',
      current: 'HEIC JPG 変換ツール',
    },
    navbar: {
      brandSub: '100% オフライン＆安全',
      languageLabel: '言語を選択',
      themeToggleLabel: 'ライト／ダークモード切替',
      installPwa: 'ホーム画面に追加',
      installPwaAria: 'オフライン対応 HEIC JPG 変換アプリをインストール',
      supportDev: '開発者を支援',
      supportDevAria: 'Ko-fiで開発者を支援する',
      iosModalTitle: 'オフラインアプリとして追加',
      iosModalStep1: '1. ブラウザの共有ボタン、またはメニューから「アプリをインストール」を選択します。',
      iosModalStep2: '2. 「ホーム画面に追加」を選ぶと、オフラインでもいつでも高速に変換できます。',
      iosModalClose: '閉じる',
    },
    hero: {
      badge: '100% ブラウザ内処理 • サーバー送信ゼロ',
      h1: 'HEIC JPG & JPEG 変換ツール',
      subtitle:
        'Apple iPhone・iPadの.HEIC / .HEIF写真を、外部サーバーに一切アップロードせずブラウザ内で安全に.JPGへ変換。ZIP一括ダウンロード・EXIF位置情報の自動消去に対応。',
    },
    converter: {
      dropTitle: 'ここに .HEIC または .HEIF 写真をドロップ',
      dropSubtitle: 'または下の大きなボタンからファイルを選択 • 枚数無制限の一括変換',
      selectButton: 'HEIC画像を選択する',
      addMoreButton: 'さらにHEIC写真を追加',
      clearAllButton: 'すべてクリア',
      trustOffline: '100% オフライン＆秘密厳守',
      trustBatch: '複数ファイル一括変換対応',
      trustQuality: '高画質・劣化なし',
      outputFormatLabel: '出力形式',
      qualityLabel: 'JPEG 画質',
      stripExifLabel: 'GPS位置情報・EXIFメタデータを削除（デフォルトON）',
      stripExifHint: 'HTML5 Canvas再構築により撮影場所のGPS座標や端末情報を完全に消去します',
      convertingStatus: 'ブラウザ内で変換中...',
      readyStatus: '変換完了',
      errorStatus: '変換エラー — 有効なHEIC/HEIFか確認してください',
      downloadSingle: 'JPGを保存',
      downloadAllZip: 'すべてZIPで一括保存',
      zippingStatus: 'ZIPアーカイブ作成中...',
      originalSize: '元サイズ',
      convertedSize: '変換後',
      removeFileAria: 'この写真をリストから削除',
      privacyRemovedBadge: 'EXIF・GPS削除済',
      filesCountLabel: '作業中の写真枚数',
    },
    howTo: {
      title: 'HEICをJPGに変換する3つの簡単ステップ',
      subtitle: '大切な写真をクラウドに送信せず、お使いの端末内だけで瞬時に変換できます。',
      steps: [
        {
          title: '1. HEIC/HEIF写真を選択またはドラッグ＆ドロップ',
          description: '「HEIC画像を選択する」ボタンを押すか、点線エリアに複数の写真をドロップします。',
        },
        {
          title: '2. 拡張子（.JPG / .JPEG）・画質・EXIF削除を設定',
          description: '画質スライダー（60%〜100%）を調整し、プライバシー保護のためGPS削除スイッチをオンにします。',
        },
        {
          title: '3. 個別保存またはZIPで一括ダウンロード',
          description: '1枚ずつ保存するか、「すべてZIPで一括保存」ボタンでまとめてダウンロードします。',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF と JPG の比較：なぜオフライン変換が安全なのか？',
      subtitle: '一般的なオンライン変換サイトと当ツールの違いをご確認ください。',
      headers: ['機能', 'HEICtoJPEG（当ツール）', '一般的なクラウド変換サイト', '有料ソフト'],
      rows: [
        ['プライバシー保護', '100%ブラウザ内完結（送信なし）', '外部サーバーへ写真を送信', 'ローカル（要インストール）'],
        ['料金・制限', '完全無料・枚数無制限', '枚数や容量に制限あり', '有料ライセンス'],
        ['オフライン動作', '対応（PWAアプリとして追加可能）', '常にネット接続が必要', '対応'],
        ['GPS・EXIF削除', '標準で自動削除に対応', '非対応が多い', 'ソフトによる'],
        ['互換性', '標準の .JPG / .JPEG 出力', '.JPG 出力', '.JPG 出力'],
      ],
    },
    offlinePwa: {
      title: '無料ダウンロード不要のオフラインWebアプリ（PWA）',
      subtitle: '「ホーム画面に追加」するだけで、Windows・Mac・iPhone・Androidでネイティブアプリのように使えます。',
      cards: [
        {
          title: 'インターネットなしでも動作',
          description: 'Service Workerが変換エンジンをキャッシュするため、機内モードでも変換可能です。',
        },
        {
          title: '情報漏洩リスクゼロ',
          description: '写真データはお使いのブラウザのメモリ内だけで処理されます。',
        },
        {
          title: '大きくて見やすいUI設計',
          description: '大きな文字と押しやすい特大ボタンで、どなたでも迷わず操作できます。',
        },
      ],
    },
    faq: {
      title: 'よくある質問（FAQ）— HEIC JPG 変換',
      subtitle: 'iPhoneのHEIC・HEIF写真をJPEGに変換する際によくある疑問にお答えします。',
      items: [
        {
          question: '写真をサーバーにアップロードせずに無料でHEICをJPGに変換できますか？',
          answer: 'はい。当サイトは100%クライアントサイド技術を使用しており、写真がお使いの端末から外部へ送信されることは一切ありません。',
        },
        {
          question: '.HEIC と .HEIF の両方に対応していますか？',
          answer: 'はい、両方の拡張子に対応しており、汎用性の高い .jpg または .jpeg に変換できます。',
        },
        {
          question: '写真に含まれるGPS位置情報は消せますか？',
          answer: '初期設定で「GPS位置情報・EXIFメタデータを削除」がオンになっており、自動的に消去されます。',
        },
      ],
    },
    footer: {
      tagline: 'プライバシーと使いやすさを追求した、100%ブラウザ完結のHEIC/HEIF→JPG変換ツール。',
      privacyPromise: 'プライバシー保証：あなたの写真が端末の外へ送信されることはありません。',
      supportCta: 'Ko-fiで開発者を支援する',
      licenseText: 'MITライセンスのもとで公開されています。',
    },
  },
  zh: {
    meta: {
      title: 'HEIC转JPG与JPEG转换器 | 免费离线HEIF转JPG工具 (100%浏览器本地处理)',
      description:
        '在浏览器中即时将苹果iPhone/iPad的HEIC和HEIF照片转换为JPG/JPEG。100%本地转换无需上传服务器，支持批量ZIP打包下载与自动清除GPS/EXIF隐私信息。',
      keywords:
        'heic转jpg, heic转jpeg, heif转jpg转换器, 如何将heic转换为jpg, heic转jpg转换器免费下载, 在线heic转jpg转换器',
    },
    breadcrumbs: {
      home: '首页',
      current: 'HEIC转JPG转换器',
    },
    navbar: {
      brandSub: '100% 离线与隐私保护',
      languageLabel: '选择语言',
      themeToggleLabel: '切换浅色或深色主题',
      installPwa: '添加到主屏幕',
      installPwaAria: '安装离线版HEIC转JPG转换器应用',
      supportDev: '支持开发者',
      supportDevAria: '在 Ko-fi 上支持开发者',
      iosModalTitle: '安装离线 HEIC转JPG 应用',
      iosModalStep1: '1. 点击浏览器工具栏中的“分享”按钮或浏览器菜单中的“安装应用”。',
      iosModalStep2: '2. 选择“添加到主屏幕”，即可随时随地100%离线转换照片。',
      iosModalClose: '知道了，关闭',
    },
    hero: {
      badge: '100% 浏览器本地引擎 • 零服务器上传',
      h1: 'HEIC 转 JPG & JPEG 转换器',
      subtitle:
        '超易用的免费在线与离线 HEIC/HEIF 转 JPG 工具。直接在您的设备浏览器中安全转换苹果照片，支持批量导出 ZIP 及自动抹除 GPS 定位信息。',
    },
    converter: {
      dropTitle: '将您的 .HEIC 或 .HEIF 照片拖放到此处',
      dropSubtitle: '或点击下方大按钮从设备选择文件 • 无限制批量转换',
      selectButton: '选择 HEIC 图片',
      addMoreButton: '添加更多 HEIC 照片',
      clearAllButton: '清空全部',
      trustOffline: '100% 离线且私密',
      trustBatch: '支持 HEIC/HEIF 批量处理',
      trustQuality: '零画质损失',
      outputFormatLabel: '输出格式',
      qualityLabel: 'JPEG 画质',
      stripExifLabel: '清除 GPS 与 EXIF 元数据（默认开启）',
      stripExifHint: '通过 HTML5 Canvas 重新绘制像素，彻底移除隐藏的拍摄位置坐标与设备信息',
      convertingStatus: '正在浏览器中转换...',
      readyStatus: '转换完成',
      errorStatus: '转换失败 — 请确认是有效的 HEIC/HEIF 文件',
      downloadSingle: '下载 JPG',
      downloadAllZip: '全部打包下载为 ZIP',
      zippingStatus: '正在生成 ZIP 压缩包...',
      originalSize: '原大小',
      convertedSize: '转换后',
      removeFileAria: '从工作区移除此照片',
      privacyRemovedBadge: '已清除 EXIF 与 GPS',
      filesCountLabel: '工作区照片数量',
    },
    howTo: {
      title: '如何通过 3 个简单步骤将 HEIC 转换为 JPG',
      subtitle: '无需将私人照片上传到云端服务器，完全在您自己的手机或电脑浏览器中完成转换。',
      steps: [
        {
          title: '1. 选择或拖放 HEIC/HEIF 照片',
          description: '点击“选择 HEIC 图片”大按钮，或直接将多张 .heic / .heif 照片拖入虚线框内。',
        },
        {
          title: '2. 设置输出格式（.JPG / .JPEG）、画质与隐私保护',
          description: '滑动调节 JPEG 画质（60% 至 100%），并保持开启“清除 GPS 与 EXIF 元数据”。',
        },
        {
          title: '3. 单张保存或一键打包下载 ZIP',
          description: '点击单张图片下方的“下载 JPG”，或点击悬浮按钮将所有照片打包成 ZIP 下载。',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF 对比 JPG：为什么选择本地浏览器转换？',
      subtitle: '全方位对比本地客户端转换器与传统云端在线转换网站。',
      headers: ['功能特性', 'HEICtoJPEG（本工具）', '传统云端转换网站', '付费桌面软件'],
      rows: [
        ['隐私与安全', '100% 浏览器本地运行（零上传）', '需将照片上传至远程服务器', '本地运行但需安装软件'],
        ['费用与限制', '100% 免费、无数量与大小限制', '限制文件大小或每日张数', '需购买许可证'],
        ['离线应用模式', '支持（可一键安装 PWA）', '必须联网使用', '支持'],
        ['清除 GPS/EXIF', '默认自动清除', '极少支持', '视软件而定'],
        ['兼容性', '输出标准 .JPG 与 .JPEG', '输出 .JPG', '输出 .JPG'],
      ],
    },
    offlinePwa: {
      title: 'HEIC转JPG转换器免费下载 — 离线渐进式应用 (PWA)',
      subtitle: '无需下载臃肿的安装包，直接将本工具添加到 Windows、Mac、iOS 或 Android 主屏幕。',
      cards: [
        {
          title: '100% 断网可用',
          description: 'Service Worker 会自动缓存转换引擎，即使在没有网络的环境下也能正常转换。',
        },
        {
          title: '杜绝云端泄露风险',
          description: '您的所有照片数据仅在本地内存中处理，关闭标签页即刻释放。',
        },
        {
          title: '超大字体与高对比度界面',
          description: '专为护眼与便捷操作设计的大字号、大图标与超大点击区域。',
        },
      ],
    },
    faq: {
      title: '常见问题解答 (FAQ) — 在线 HEIC 转 JPG 转换器',
      subtitle: '关于苹果 HEIC 与 HEIF 照片转 JPEG 的常见疑问。',
      items: [
        {
          question: '如何免费将 HEIC 转换为 JPG 而不上传照片？',
          answer: '只需打开本网页并拖入文件。本工具采用纯前端解码技术，所有转换均在您的浏览器本地完成。',
        },
        {
          question: '同时支持 .HEIC 和 .HEIF 格式吗？',
          answer: '是的，完美支持这两种格式并可导出为 .jpg 或 .jpeg。',
        },
        {
          question: '转换后会自动抹除照片里的 GPS 位置信息吗？',
          answer: '是的，“清除 GPS 与 EXIF 元数据”默认处于勾选状态，保障您的位置隐私。',
        },
      ],
    },
    footer: {
      tagline: '极简、100% 纯前端本地运行的 HEIC/HEIF 转 JPG & JPEG 转换工具。',
      privacyPromise: '隐私承诺：您的照片绝不会离开您的设备，0% 服务器上传。',
      supportCta: '在 Ko-fi 上支持开发者',
      licenseText: '基于 MIT 开源许可证发布。',
    },
  },
  ru: {
    meta: {
      title: 'Конвертер HEIC в JPG и JPEG | Бесплатный офлайн инструмент HEIF в JPG',
      description:
        'Мгновенно конвертируйте фото HEIC и HEIF с iPhone в JPG/JPEG прямо в браузере. 100% локально без загрузки на сервер, пакетное скачивание в ZIP и удаление EXIF.',
      keywords:
        'heic в jpg, heic в jpeg, конвертер heif в jpg, как перевести heic в jpg, скачать конвертер heic в jpg бесплатно, онлайн конвертер heic в jpg',
    },
    breadcrumbs: {
      home: 'Главная',
      current: 'Конвертер HEIC в JPG',
    },
    navbar: {
      brandSub: '100% Офлайн и Приватно',
      languageLabel: 'Выбрать язык',
      themeToggleLabel: 'Переключить светлую или темную тему',
      installPwa: 'На главный экран',
      installPwaAria: 'Установить офлайн-приложение Конвертер HEIC в JPG',
      supportDev: 'Поддержать автора',
      supportDevAria: 'Поддержать разработчика на Ko-fi',
      iosModalTitle: 'Установить офлайн-приложение HEIC в JPG',
      iosModalStep1: '1. Нажмите кнопку «Поделиться» в Safari или откройте меню браузера («Установить приложение»).',
      iosModalStep2: '2. Выберите «На экран „Домой“», чтобы пользоваться конвертером без интернета.',
      iosModalClose: 'Понятно, закрыть',
    },
    hero: {
      badge: '100% в Вашем Браузере • Без Загрузки на Сервер',
      h1: 'Конвертер HEIC в JPG и JPEG',
      subtitle:
        'Бесплатный и доступный конвертер HEIC и HEIF в JPG. Преобразуйте фотографии с iPhone и iPad прямо в браузере с пакетным экспортом в ZIP и очисткой GPS/EXIF.',
    },
    converter: {
      dropTitle: 'Перетащите фото .HEIC или .HEIF сюда',
      dropSubtitle: 'Или нажмите огромную кнопку ниже для выбора файлов • Пакетная конвертация без лимитов',
      selectButton: 'Выбрать файлы HEIC',
      addMoreButton: 'Добавить ещё фото HEIC',
      clearAllButton: 'Очистить всё',
      trustOffline: '100% Офлайн и Приватно',
      trustBatch: 'Пакетная обработка HEIC/HEIF',
      trustQuality: 'Без потери качества',
      outputFormatLabel: 'Формат вывода',
      qualityLabel: 'Качество JPEG',
      stripExifLabel: 'Удалять GPS и метаданные EXIF (Включено по умолчанию)',
      stripExifHint: 'Удаляет скрытые координаты геолокации и данные камеры через перерисовку HTML5 Canvas',
      convertingStatus: 'Конвертация в браузере...',
      readyStatus: 'Готово к скачиванию',
      errorStatus: 'Ошибка конвертации — проверьте файл HEIC/HEIF',
      downloadSingle: 'Скачать JPG',
      downloadAllZip: 'Скачать всё в ZIP',
      zippingStatus: 'Создание ZIP-архива...',
      originalSize: 'Исходный',
      convertedSize: 'Новый',
      removeFileAria: 'Удалить фото из списка',
      privacyRemovedBadge: 'EXIF и GPS удалены',
      filesCountLabel: 'Фото в рабочей области',
    },
    howTo: {
      title: 'Как конвертировать HEIC в JPG за 3 простых шага',
      subtitle: 'Преобразуйте фотографии Apple на своем устройстве без отправки личных снимков в облако.',
      steps: [
        {
          title: '1. Выберите или перетащите фото HEIC/HEIF',
          description: 'Нажмите «Выбрать файлы HEIC» или перетащите сразу несколько файлов в пунктирную область.',
        },
        {
          title: '2. Настройте формат (.JPG / .JPEG), качество и защиту EXIF',
          description: 'Выберите качество JPEG от 60% до 100% и оставьте включенным удаление геолокации GPS.',
        },
        {
          title: '3. Скачайте по отдельности или одним архивом ZIP',
          description: 'Сохраняйте отдельные снимки или нажмите «Скачать всё в ZIP» для загрузки всех фото сразу.',
        },
      ],
    },
    comparison: {
      title: 'HEIC/HEIF против JPG: Почему офлайн-конвертация лучше?',
      subtitle: 'Сравнение нашего браузерного инструмента с облачными сервисами.',
      headers: ['Параметр', 'HEICtoJPEG (Этот инструмент)', 'Облачные конвертеры', 'Платные программы'],
      rows: [
        ['Конфиденциальность', '100% локально в браузере', 'Загрузка ваших фото на сервер', 'Локально, но нужен установщик'],
        ['Стоимость и лимиты', '100% бесплатно и без лимитов', 'Ограничения по размеру и числу', 'Платная лицензия'],
        ['Офлайн-режим (PWA)', 'Да (установка в 1 клик)', 'Требуется интернет', 'Да'],
        ['Удаление GPS/EXIF', 'Автоматически по умолчанию', 'Редко поддерживается', 'Зависит от программы'],
        ['Совместимость', 'Стандартные .JPG и .JPEG', 'Только .JPG', 'Только .JPG'],
      ],
    },
    offlinePwa: {
      title: 'Скачать конвертер HEIC в JPG бесплатно — Офлайн веб-приложение (PWA)',
      subtitle: 'Установите HEICtoJPEG на главный экран Windows, macOS, Android или iOS.',
      cards: [
        {
          title: 'Работает 100% без интернета',
          description: 'Service Worker сохраняет движок конвертации в кэше для работы полностью офлайн.',
        },
        {
          title: 'Никакого риска утечки данных',
          description: 'Ваши личные фотографии обрабатываются исключительно в оперативной памяти устройства.',
        },
        {
          title: 'Крупный эргономичный интерфейс',
          description: 'Большие шрифты, крупные кнопки и высокий контраст для максимального удобства.',
        },
      ],
    },
    faq: {
      title: 'Частые вопросы — Онлайн конвертер HEIC в JPG',
      subtitle: 'Ответы на главные вопросы о переводе фото HEIC и HEIF в формат JPEG.',
      items: [
        {
          question: 'Как бесплатно перевести HEIC в JPG без загрузки фото в интернет?',
          answer: 'Просто перетащите файлы на эту страницу. Вся обработка происходит локально внутри вашего браузера.',
        },
        {
          question: 'Поддерживаются ли оба формата .HEIC и .HEIF?',
          answer: 'Да, конвертер распознает файлы .heic и .heif и сохраняет их в .jpg или .jpeg.',
        },
        {
          question: 'Удаляются ли скрытые координаты GPS из фотографий?',
          answer: 'Да, переключатель «Удалять GPS и метаданные EXIF» активен по умолчанию.',
        },
      ],
    },
    footer: {
      tagline: 'Минималистичный, 100% клиентский конвертер HEIC/HEIF в JPG и JPEG.',
      privacyPromise: 'Гарантия приватности: Ваши фотографии никогда не покидают ваше устройство.',
      supportCta: 'Поддержать разработчика на Ko-fi',
      licenseText: 'Распространяется по лицензии MIT.',
    },
  },
};
