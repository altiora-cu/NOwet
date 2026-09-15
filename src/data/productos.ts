// NOWET — catálogo (fuente: nowetabsorbente.com + paquete de corrección de marca v3)
// Los campos marcados PENDIENTE requieren confirmación del cliente antes de producción.

export type Espacio =
  | 'closet'
  | 'dormitorio'
  | 'cocina-bano'
  | 'auto'
  | 'zapatos'
  | 'cajones'
  | 'almacen'
  | 'electronica';

export interface Producto {
  sku: string;
  slug: string;
  nombre: string;
  nombreCorto: string;
  precio: number | null; // null = precio pendiente → mostrar "Consultar precio"
  moneda: 'PEN';
  medida: string | null;
  duracionDias: [number, number] | null;
  duracionTexto: string | null;
  coberturaM2: number | null; // cobertura declarada en el empaque
  badge: 'Nuevo' | 'Más vendido' | null;
  categoria: string;
  descripcion: string;
  caracteristicas: string[];
  espacios: Espacio[];
  imagen: string;
  imagenAlt: string;
  destacado: boolean;
}

export const ESPACIOS_LABEL: Record<Espacio, string> = {
  closet: 'Closet o ropero',
  dormitorio: 'Dormitorio',
  'cocina-bano': 'Cocina o baño',
  auto: 'Auto',
  zapatos: 'Zapatos y zapatillas',
  cajones: 'Cajones y repisas',
  almacen: 'Almacén o depósito',
  electronica: 'Electrónica y documentos',
};

export const PRODUCTOS: Producto[] = [
  {
    sku: 'P-300D-CAJA',
    slug: 'percha-antihumedad-desechable-300g-caja',
    nombre: 'Nuevo NOWET Percha Desechable 300 g — Caja',
    nombreCorto: 'Caja Percha Desechable 300 g',
    precio: null, // TODO: PRECIO PENDIENTE — presentación nueva, el cliente no la ha cotizado
    moneda: 'PEN',
    medida: null,
    duracionDias: [30, 30],
    duracionTexto: '1 mes',
    coberturaM2: 12,
    badge: 'Nuevo',
    categoria: 'Perchas desechables',
    descripcion:
      'La nueva presentación en caja de Nowet. Cubre hasta 12 m² durante un mes: atrapa la humedad, neutraliza los olores y evita la formación de moho y hongos. Versión neutra, sin fragancia.',
    caracteristicas: [
      'Doble acción: humedad y olores',
      'Cubre hasta 12 m²',
      'Dura 1 mes',
      'Neutro, sin fragancia',
      'Evita moho y hongos',
      'Producto peruano',
    ],
    espacios: ['closet', 'dormitorio', 'almacen'],
    imagen: '/productos/caja-percha-desechable-300g.webp',
    imagenAlt:
      'Caja del absorbente de humedad Nowet Percha Desechable de 300 gramos, cubre 12 metros cuadrados por un mes',
    destacado: true,
  },
  {
    sku: 'P-300D',
    slug: 'percha-antihumedad-desechable-300g',
    nombre: 'Percha antihumedad desechable 300 g',
    nombreCorto: 'Percha desechable 300 g',
    precio: 20,
    moneda: 'PEN',
    medida: '37 × 17 cm',
    duracionDias: [30, 30],
    duracionTexto: '30 días',
    coberturaM2: null,
    badge: 'Más vendido',
    categoria: 'Perchas desechables',
    descripcion:
      'Solución para combatir la humedad en espacios medianos como armarios, closets o autos. Absorbe el exceso de humedad, elimina malos olores y previene la formación de moho, manteniendo tus pertenencias en perfectas condiciones.',
    caracteristicas: ['Práctica y compacta', 'Alta capacidad de absorción', 'Previene moho y malos olores'],
    espacios: ['closet', 'dormitorio', 'auto'],
    imagen: '/productos/percha-desechable-300g.webp',
    imagenAlt: 'Percha antihumedad Nowet desechable de 300 gramos colgada en un closet',
    destacado: true,
  },
  {
    sku: 'P-500D',
    slug: 'percha-antihumedad-desechable-500g',
    nombre: 'Percha antihumedad desechable 500 g',
    nombreCorto: 'Percha desechable 500 g',
    precio: 25,
    moneda: 'PEN',
    medida: '45 × 21 cm',
    duracionDias: [30, 60],
    duracionTexto: '30 a 60 días',
    coberturaM2: null,
    badge: null,
    categoria: 'Perchas desechables',
    descripcion:
      'Mayor capacidad para closets y armarios grandes. Absorbe el exceso de humedad, elimina malos olores y previene la formación de moho.',
    caracteristicas: ['Alta capacidad de absorción', 'Ideal para closets grandes', 'Previene moho y malos olores'],
    espacios: ['closet', 'dormitorio'],
    imagen: '/productos/percha-desechable-500g-oficial.webp',
    imagenAlt: 'Percha antihumedad Nowet desechable de 500 gramos, foto oficial de producto',
    destacado: true,
  },
  {
    sku: 'P-500R',
    slug: 'percha-antihumedad-recargable-500g',
    nombre: 'Percha antihumedad recargable 500 g',
    nombreCorto: 'Percha recargable 500 g',
    precio: 35,
    moneda: 'PEN',
    medida: '45 × 21 cm',
    duracionDias: [30, 60],
    duracionTexto: '30 a 60 días',
    coberturaM2: null,
    badge: null,
    categoria: 'Perchas recargables',
    descripcion:
      'Reutilizable: solo cambias el recambio interior. Más económica y sostenible a largo plazo que la versión desechable.',
    caracteristicas: ['Reutilizable', 'Recambio reemplazable', 'Más económica a largo plazo'],
    espacios: ['closet', 'dormitorio'],
    imagen: '/productos/percha-recargable-500g.webp',
    imagenAlt: 'Percha antihumedad Nowet recargable de 500 gramos',
    destacado: true,
  },
  {
    sku: 'R-400X3',
    slug: 'recambio-antihumedad-400g-x3',
    nombre: 'Recambio antihumedad 400 g × 3',
    nombreCorto: 'Recambio 400 g ×3',
    precio: 24,
    moneda: 'PEN',
    medida: null,
    duracionDias: [30, 60],
    duracionTexto: '30 a 60 días cada uno',
    coberturaM2: null,
    badge: null,
    categoria: 'Recambios',
    descripcion:
      'Pack de 3 recambios para tu percha recargable Nowet. Fáciles de reemplazar, prolongan la frescura y el confort en cualquier espacio cerrado.',
    caracteristicas: ['Pack de 3 unidades', 'Fácil reemplazo', 'Previene moho y malos olores'],
    espacios: ['closet', 'dormitorio'],
    imagen: '/productos/recambio-400g-x3.webp',
    imagenAlt: 'Pack de 3 recambios antihumedad Nowet de 400 gramos',
    destacado: true,
  },
  {
    sku: 'R-500X3',
    slug: 'recambio-antihumedad-500g-x3',
    nombre: 'Recambio antihumedad 500 g × 3',
    nombreCorto: 'Recambio 500 g ×3',
    precio: 30,
    moneda: 'PEN',
    medida: null,
    duracionDias: [30, 60],
    duracionTexto: '30 a 60 días cada uno',
    coberturaM2: null,
    badge: null,
    categoria: 'Recambios',
    descripcion: 'Pack de 3 recambios de mayor capacidad para tu percha recargable Nowet.',
    caracteristicas: ['Pack de 3 unidades', 'Mayor capacidad', 'Fácil reemplazo'],
    espacios: ['closet', 'dormitorio'],
    imagen: '/productos/recambio-500g-x3.webp',
    imagenAlt: 'Pack de 3 recambios antihumedad Nowet de 500 gramos',
    destacado: false,
  },
  {
    sku: 'PIL-TC',
    slug: 'pildoras-desodorizantes',
    nombre: 'Píldoras desodorizantes The Cure',
    nombreCorto: 'Píldoras The Cure',
    precio: 12,
    moneda: 'PEN',
    medida: '9 × 3 cm',
    duracionDias: [240, 240],
    duracionTexto: '8 meses',
    coberturaM2: null,
    badge: null,
    categoria: 'Control de olores',
    descripcion:
      'Cápsulas para neutralizar olores en espacios pequeños y objetos cerrados: zapatillas, armarios o mochilas. Eliminan el mal olor en lugar de enmascararlo.',
    caracteristicas: ['Duración de 8 meses', 'Elimina, no enmascara', 'Compactas y prácticas'],
    espacios: ['zapatos', 'closet', 'cajones'],
    imagen: '/productos/pildoras-the-cure.webp',
    imagenAlt: 'Píldoras desodorizantes Nowet The Cure',
    destacado: true,
  },
  {
    sku: 'ECO-135',
    slug: 'cajita-antihumedad-eco-box-de-135g',
    nombre: 'Cajita antihumedad Eco-BOX 135 g',
    nombreCorto: 'Eco-BOX 135 g',
    precio: 12,
    moneda: 'PEN',
    medida: '18 × 12 cm',
    duracionDias: [30, 30],
    duracionTexto: '30 días',
    coberturaM2: null,
    badge: null,
    categoria: 'Eco-BOX',
    descripcion:
      'Solución ecológica para absorber el exceso de humedad en espacios pequeños, evitando malos olores, moho y manchas. Compacta, reutilizable y libre de productos químicos dañinos. Uso apropiado en cajones y armarios.',
    caracteristicas: ['Reutilizable', 'Libre de químicos dañinos', 'Ideal para cajones y armarios'],
    espacios: ['cajones', 'closet', 'cocina-bano'],
    imagen: '/productos/eco-box-135g.webp',
    imagenAlt: 'Cajita antihumedad Nowet Eco-BOX de 135 gramos',
    destacado: true,
  },
  {
    sku: 'ECO-R135',
    slug: 'recambio-de-eco-box-de-135g',
    nombre: 'Recambio Eco-BOX 135 g',
    nombreCorto: 'Recambio Eco-BOX',
    precio: 8,
    moneda: 'PEN',
    medida: '18 × 12 cm',
    duracionDias: [30, 30],
    duracionTexto: '30 días',
    coberturaM2: null,
    badge: null,
    categoria: 'Eco-BOX',
    descripcion:
      'Repuesto para mantener la efectividad de tu cajita Eco-BOX. Recoge la humedad del ambiente y la convierte en gel, evitando fugas y goteos.',
    caracteristicas: ['Convierte la humedad en gel', 'Sin fugas ni goteos', 'Fácil de instalar'],
    espacios: ['cajones', 'closet', 'cocina-bano'],
    imagen: '/productos/recambio-eco-box-135g.webp',
    imagenAlt: 'Recambio para cajita antihumedad Nowet Eco-BOX de 135 gramos',
    destacado: false,
  },
  {
    sku: 'SIL-100',
    slug: 'saquito-silica-gel-100g',
    nombre: 'Saquito de sílica gel 100 g',
    nombreCorto: 'Sílica gel 100 g',
    precio: 8,
    moneda: 'PEN',
    medida: '8 × 14 cm',
    duracionDias: [90, 90],
    duracionTexto: '3 meses',
    coberturaM2: null,
    badge: null,
    categoria: 'Sílica gel',
    descripcion:
      'Absorbente de humedad ideal para artículos delicados: electrónica, ropa, zapatos o documentos. Reutilizable y no tóxico, previene moho, corrosión y malos olores.',
    caracteristicas: ['Reutilizable', 'Material no tóxico', 'Compacto y ligero', 'Previene corrosión'],
    espacios: ['electronica', 'zapatos', 'cajones'],
    imagen: '/productos/silica-gel-100g.webp',
    imagenAlt: 'Saquito de sílica gel Nowet de 100 gramos',
    destacado: false,
  },
  {
    sku: 'SIL-200',
    slug: 'saquito-silica-gel-200g',
    nombre: 'Saquito de sílica gel 200 g',
    nombreCorto: 'Sílica gel 200 g',
    precio: 15,
    moneda: 'PEN',
    medida: '18 × 10 cm',
    duracionDias: [90, 90],
    duracionTexto: '3 meses',
    coberturaM2: null,
    badge: null,
    categoria: 'Sílica gel',
    descripcion:
      'Mayor capacidad para espacios cerrados más grandes: maletas, cajas de almacenamiento, equipos y documentos.',
    caracteristicas: ['Reutilizable', 'Material no tóxico', 'Mayor capacidad', 'Versátil'],
    espacios: ['electronica', 'almacen', 'cajones'],
    imagen: '/productos/silica-gel-200g.webp',
    imagenAlt: 'Saquito de sílica gel Nowet de 200 gramos',
    destacado: false,
  },
  {
    sku: 'OL-CLO',
    slug: 'absorbente-de-olores-para-closet',
    nombre: 'Absorbente de olores para closet',
    nombreCorto: 'Absorbente closet',
    precio: null, // TODO: PRECIO PENDIENTE — el sitio actual muestra "S/ -"
    moneda: 'PEN',
    medida: null,
    duracionDias: null,
    duracionTexto: null,
    coberturaM2: null,
    badge: null,
    categoria: 'Control de olores',
    descripcion:
      'Neutraliza los olores persistentes y previene la acumulación de humedad. Mantén tus prendas impecables y con un aroma agradable.',
    caracteristicas: ['Práctico y compacto', 'Alta capacidad de absorción', 'Fácil de reemplazar'],
    espacios: ['closet'],
    imagen: '/productos/absorbente-olores-closet.webp', // TODO: falta el asset, ver PlaceholderImagen
    imagenAlt: 'Absorbente de olores Nowet para closet',
    destacado: false,
  },
  {
    sku: 'OL-TAC',
    slug: 'absorbente-de-olores-para-tachos',
    nombre: 'Absorbente de olores para tachos',
    nombreCorto: 'Absorbente tachos',
    precio: null, // TODO: PRECIO PENDIENTE — el sitio actual muestra "S/ -"
    moneda: 'PEN',
    medida: null,
    duracionDias: null,
    duracionTexto: null,
    coberturaM2: null,
    badge: null,
    categoria: 'Control de olores',
    descripcion: 'Elimina los malos olores de tus tachos de basura. Neutraliza incluso los olores más fuertes y asegura un ambiente fresco.',
    caracteristicas: ['Control total de olores', 'Alta capacidad de absorción', 'Práctico y compacto'],
    espacios: ['cocina-bano'],
    imagen: '/productos/absorbente-olores-tachos.webp', // TODO: falta el asset, ver PlaceholderImagen
    imagenAlt: 'Absorbente de olores Nowet para tachos de basura',
    destacado: false,
  },
];

export interface Pack {
  sku: string;
  slug: string;
  nombre: string;
  contenido: string;
  precio: number;
  precioSuelto: number | null; // suma del precio unitario, para calcular el ahorro
  imagen: string;
  imagenAlt: string;
  revisar?: string;
}

export const PACKS: Pack[] = [
  {
    sku: 'PK-1',
    slug: 'pack-percha-desechable-300g-x5',
    nombre: 'Pack Percha desechable 300 g × 5',
    contenido: '5 perchas antihumedad desechables de 300 g',
    precio: 80,
    precioSuelto: 100, // 5 × S/20 → ahorro S/20
    imagen: '/packs/pack-11.webp',
    imagenAlt: 'Pack de 5 perchas antihumedad Nowet desechables de 300 gramos',
  },
  {
    sku: 'PK-2',
    slug: 'pack-percha-desechable-500g-x4',
    nombre: 'Pack Percha desechable 500 g × 4',
    contenido: '4 perchas antihumedad desechables de 500 g',
    precio: 80,
    precioSuelto: 100, // 4 × S/25 → ahorro S/20
    imagen: '/packs/pack-12.webp',
    imagenAlt: 'Pack de 4 perchas antihumedad Nowet desechables de 500 gramos',
  },
  {
    sku: 'PK-3',
    slug: 'pack-percha-recargable-500g-x4',
    nombre: 'Pack Percha recargable 500 g × 4',
    contenido: '4 perchas antihumedad recargables de 500 g',
    precio: 120,
    precioSuelto: 140, // 4 × S/35 → ahorro S/20
    imagen: '/packs/pack-13.webp',
    imagenAlt: 'Pack de 4 perchas antihumedad Nowet recargables de 500 gramos',
  },
  {
    sku: 'PK-4',
    slug: 'pack-recargable-mas-recambios',
    nombre: 'Pack Percha recargable 500 g + 3 recambios malla × 4',
    contenido: '4 perchas recargables de 500 g + 3 saquitos de recambio en malla',
    precio: 60,
    precioSuelto: null,
    imagen: '/packs/pack-14.webp',
    imagenAlt: 'Pack de perchas antihumedad Nowet recargables con recambios en malla',
    revisar:
      'TODO: precio incoherente en el sitio actual (S/60 por un pack con más producto que el de S/120). Confirmar con el cliente antes de publicar.',
  },
];

export function buscarProductoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}

export function buscarPackPorSlug(slug: string): Pack | undefined {
  return PACKS.find((p) => p.slug === slug);
}
