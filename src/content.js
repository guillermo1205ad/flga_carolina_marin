export const profile = {
  professionalName: 'Carolina Marín',
  fullName: 'Carolina Alexandra Marín Godoy',
  profession: 'Fonoaudióloga',
  location: 'Coquimbo, Región de Coquimbo, Chile',
  email: 'flga.carolinamarin@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/flga-carolina-marin',
  // Fuente: PDF de perfil profesional entregado por cliente.
  sourceLabel: 'Perfil profesional (PDF de referencia)'
};

export const whatsapp = {
  // TODO: Reemplazar por el número real en formato internacional sin +, ej: 56912345678
  number: '56961596373',
  defaultMessage:
    'Hola Carolina, me gustaría solicitar orientación fonoaudiológica. ¿Podemos conversar por favor?'
};

const normalizedWhatsapp = whatsapp.number.replace(/\D/g, '');

export const isWhatsappConfigured = /^\d{10,15}$/.test(normalizedWhatsapp);

export const whatsappUrl = isWhatsappConfigured
  ? `https://wa.me/${normalizedWhatsapp}?text=${encodeURIComponent(whatsapp.defaultMessage)}`
  : '#contacto';

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Respaldo', href: '#respaldo' },
  { label: 'Contacto', href: '#contacto' }
];

export const hero = {
  badge: 'Atención fonoaudiológica con enfoque humano',
  title: 'Acompañamiento cercano para fortalecer lenguaje, comunicación y bienestar familiar',
  description:
    'Carolina Marín ofrece un enfoque fonoaudiológico profesional para niños y niñas, con una mirada clara, personalizada y orientada a resultados concretos en el día a día.',
  ctaPrimary: 'Escribir por WhatsApp',
  ctaSecondary: 'Ver áreas de ayuda',
  highlights: [
    'Foco declarado en TEA, TEL, TDAH y TCC',
    'Experiencia en contextos de salud y educación',
    'Vocación de trabajo colaborativo y comunitario'
  ]
};

export const trust = {
  title: 'Una profesional cercana, rigurosa y comprometida',
  paragraphs: [
    'Carolina Marín se define como una profesional metodológicamente meticulosa y creativamente activa, con un enfoque terapéutico centrado en la persona.',
    'Su trabajo está orientado al acompañamiento de niños y niñas con trastornos del lenguaje y la comunicación, priorizando el vínculo de confianza con cada familia y entorno educativo.'
  ],
  quote:
    '“Interés vocacional fortalecido en salud y educación, con énfasis en terapias enfocadas en niños y niñas con trastornos del lenguaje.”'
};

export const services = [
  {
    title: 'Apoyo en trastornos del lenguaje y la comunicación',
    description:
      'Acompañamiento fonoaudiológico para necesidades vinculadas a TEA, TEL, TDAH y TCC, según el enfoque descrito en su perfil profesional.',
    audience: 'Para niños y niñas que requieren potenciar su comunicación en su etapa de desarrollo.'
  },
  {
    title: 'Orientación para familias y cuidadores',
    description:
      'Guía clara y cercana para entender desafíos comunicativos y avanzar con estrategias consistentes en casa y en la rutina diaria.',
    audience: 'Para madres, padres y apoderados que buscan apoyo profesional confiable.'
  },
  {
    title: 'Trabajo articulado con el entorno educativo',
    description:
      'Enfoque colaborativo con equipos multidisciplinarios y contexto escolar, especialmente en espacios de educación pública.',
    audience: 'Para familias y comunidades educativas que necesitan acompañamiento coordinado.'
  }
];

export const benefits = [
  {
    title: 'Atención humana y cercana',
    text: 'Cada caso se aborda con empatía, escucha activa y foco en el bienestar integral de la persona.'
  },
  {
    title: 'Base técnica y metodológica',
    text: 'La intervención se respalda en formación formal en fonoaudiología y experiencia en terreno educativo.'
  },
  {
    title: 'Comunicación clara con familias',
    text: 'Se traduce lo técnico a recomendaciones comprensibles para facilitar decisiones informadas.'
  },
  {
    title: 'Compromiso social y comunitario',
    text: 'Interés profesional orientado a contextos vulnerables y trabajo colaborativo con equipos.'
  }
];

export const credentials = {
  education: [
    {
      institution: 'IPChile',
      degree: 'Fonoaudióloga · Salud y Educación',
      period: 'Marzo 2013 - Marzo 2019'
    },
    {
      institution: 'Universidad del Mar',
      degree: 'Fonoaudiología · Salud y Educación',
      period: 'Marzo 2010 - Diciembre 2012'
    }
  ],
  experience: [
    {
      role: 'Fonoaudióloga · Escuela Padre Alberto Hurtado Cruchaga',
      period: 'Julio 2019 - Diciembre 2019'
    }
  ],
  skills: ['Redacción', 'Confianza en uno mismo', 'Servicio comunitario']
};

export const conversion = {
  title: 'Agenda una orientación por WhatsApp',
  text: 'Si necesitas orientación fonoaudiológica, conversemos. Puedes escribir directamente para resolver dudas y evaluar el tipo de acompañamiento más adecuado.'
};

export const placeholders = [
  {
    label: 'Número de WhatsApp',
    value: '56961596373',
    note: 'Configurado.'
  },
  {
    label: 'Modalidad de atención',
    value: '[Presencial / Online / Domicilio]',
    note: 'Definir modalidades para responder más rápido a consultas.'
  },
  {
    label: 'Horario de atención',
    value: '[Ej: Lunes a Viernes 09:00-18:00]',
    note: 'Agregar disponibilidad ayuda a filtrar contactos de forma eficiente.'
  }
];
