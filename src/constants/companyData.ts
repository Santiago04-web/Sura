export const COMPANY_DATA = {
  publicName: 'EPS SURA',
  legalName: 'EPS SURAMERICANA S.A.',
  nit: '800088702-2',
  address: 'Carrera 43 A 34 95 Centro Comercial Almacentro local 259',
  city: 'Medellín',
  department: 'Antioquia',
  country: 'Colombia',
  fullAddress: 'Carrera 43 A 34 95 Centro Comercial Almacentro local 259, Medellín, Antioquia, Colombia',
  phone: '+57 3104378378',
  phoneClean: '+573104378378',
  email: 'soporte@epssura.online',
  domain: 'https://epssura.online/',
  domainDisplay: 'epssura.online',
  registrationNumber: '21-141964-04',
  chamberOfCommerce: 'Cámara de Comercio de Medellín para Antioquia',
} as const;

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'health-info',
    title: 'Información de Salud',
    shortDesc: 'Orientación conceptual sobre el cuidado integral, salud preventiva y recomendaciones de bienestar para las personas y familias.',
    fullDesc: 'Acceso a guías informativas completas orientadas al mantenimiento de la salud, recomendaciones sobre estilo de vida saludable y contenidos conceptuales diseñados para educar y capacitar a la comunidad.',
    iconName: 'HeartPulse',
    features: [
      'Guías conceptuales de autocuidado',
      'Artículos de divulgación en salud',
      'Recomendaciones para el hogar',
      'Educación continua en hábitos saludables'
    ]
  },
  {
    id: 'wellness',
    title: 'Bienestar Integral',
    shortDesc: 'Programas de orientación enfocados en mejorar la calidad de vida, equilibrio físico y mental.',
    fullDesc: 'Fomento del equilibrio físico, mental y emocional a través de contenidos estratégicos sobre nutrición, actividad física consciente y manejo saludable de entornos diarios.',
    iconName: 'Sparkles',
    features: [
      'Orientación en estilos de vida sanos',
      'Pautas de bienestar emocional y físico',
      'Consejos de nutrición balanceada',
      'Integración familiar y comunitaria'
    ]
  },
  {
    id: 'prevention',
    title: 'Prevención y Autocuidado',
    shortDesc: 'Estrategias y recomendaciones preventivas para la detección temprana de riesgos en la salud.',
    fullDesc: 'Información clave para identificar a tiempo factores de riesgo, promover revisiones periódicas y fortalecer la cultura de la prevención en todas las etapas de la vida.',
    iconName: 'ShieldCheck',
    features: [
      'Sensibilización sobre riesgos de salud',
      'Pautas de chequeo preventivo general',
      'Cultura de autocuidado proactivo',
      'Estrategias de hábitos protectores'
    ]
  },
  {
    id: 'care-guidance',
    title: 'Atención y Orientación',
    shortDesc: 'Canales oficiales de información y acompañamiento corporativo para resolver inquietudes institucionales.',
    fullDesc: 'Orientación oportuna y respuesta a consultas corporativas. Brindamos canales claros de comunicación para mantener informados a nuestros usuarios de manera transparente.',
    iconName: 'Headphones',
    features: [
      'Canales directos de atención y soporte',
      'Acompañamiento en consultas corporativas',
      'Orientación de trámites e información',
      'Respuesta clara y transparente'
    ]
  }
];

export const TRUST_VALUES = [
  {
    id: 'care',
    title: 'Atención',
    desc: 'Compromiso constante con la calidez, respeto y la mejor disposición de orientación para cada persona.',
    iconName: 'Heart'
  },
  {
    id: 'wellness',
    title: 'Bienestar',
    desc: 'Fomento continuo de la calidad de vida, equilibrando la salud física y el desarrollo humano.',
    iconName: 'Sun'
  },
  {
    id: 'prevention',
    title: 'Prevención',
    desc: 'Promoción activa de medidas y conocimientos oportunos para evitar riesgos de salud futuros.',
    iconName: 'Shield'
  },
  {
    id: 'protection',
    title: 'Protección',
    desc: 'Respaldo sólido y confiabilidad institucional para salvaguardar lo más valioso: la vida y la tranquilidad.',
    iconName: 'Lock'
  }
];
