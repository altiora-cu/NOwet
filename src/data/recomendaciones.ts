import { Espacio } from './productos';

export type TamanoEspacio = 'pequeno' | 'mediano' | 'grande';
export type Sintoma = 'humedo' | 'olor' | 'ambos';

export interface OpcionEspacio {
  valor: Espacio;
  etiqueta: string;
}

export const OPCIONES_ESPACIO: OpcionEspacio[] = [
  { valor: 'closet', etiqueta: 'Closet o ropero' },
  { valor: 'dormitorio', etiqueta: 'Dormitorio' },
  { valor: 'cocina-bano', etiqueta: 'Cocina o baño' },
  { valor: 'cajones', etiqueta: 'Cajones y repisas' },
  { valor: 'zapatos', etiqueta: 'Zapatos' },
  { valor: 'auto', etiqueta: 'Auto' },
  { valor: 'almacen', etiqueta: 'Almacén o depósito' },
  { valor: 'electronica', etiqueta: 'Electrónica y documentos' },
];

export const OPCIONES_TAMANO: { valor: TamanoEspacio; etiqueta: string; ayuda: string }[] = [
  { valor: 'pequeno', etiqueta: 'Pequeño', ayuda: 'Un cajón, una caja' },
  { valor: 'mediano', etiqueta: 'Mediano', ayuda: 'Un closet normal' },
  { valor: 'grande', etiqueta: 'Grande', ayuda: 'Un walk-in, un cuarto entero' },
];

export const OPCIONES_SINTOMA: { valor: Sintoma; etiqueta: string }[] = [
  { valor: 'humedo', etiqueta: 'Se siente húmedo' },
  { valor: 'olor', etiqueta: 'Huele a guardado' },
  { valor: 'ambos', etiqueta: 'Las dos cosas' },
];

export interface ItemRecomendado {
  sku: string;
  cantidad: number;
}

export interface Recomendacion {
  items: ItemRecomendado[];
  nota?: string;
  sugerirPack?: string; // slug del pack, si conviene más que las unidades sueltas
}

interface Regla {
  espacio: Espacio;
  tamano: TamanoEspacio | 'cualquiera';
  sintoma: Sintoma | 'cualquiera';
  recomendacion: Recomendacion;
}

// Tabla de recomendación — sección C.2 del paquete de producción v2.
// Regla de upsell honesta: nunca se infla la cantidad para empujar un pack.
const REGLAS: Regla[] = [
  {
    espacio: 'closet',
    tamano: 'pequeno',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'P-300D', cantidad: 1 }] },
  },
  {
    espacio: 'closet',
    tamano: 'mediano',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'P-500D', cantidad: 1 }] },
  },
  {
    espacio: 'closet',
    tamano: 'mediano',
    sintoma: 'ambos',
    recomendacion: { items: [{ sku: 'P-500D', cantidad: 1 }, { sku: 'OL-CLO', cantidad: 1 }] },
  },
  {
    espacio: 'closet',
    tamano: 'grande',
    sintoma: 'humedo',
    recomendacion: {
      items: [{ sku: 'P-500R', cantidad: 2 }],
      sugerirPack: 'pack-percha-recargable-500g-x4',
      nota: 'La recargable le conviene si piensa usarla más de dos meses: después solo cambia el recambio (S/8 cada uno en vez de S/25).',
    },
  },
  {
    espacio: 'closet',
    tamano: 'cualquiera',
    sintoma: 'olor',
    recomendacion: { items: [{ sku: 'OL-CLO', cantidad: 1 }] },
  },
  {
    espacio: 'dormitorio',
    tamano: 'mediano',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'P-500D', cantidad: 2 }] },
  },
  {
    espacio: 'dormitorio',
    tamano: 'grande',
    sintoma: 'humedo',
    recomendacion: {
      items: [{ sku: 'P-500R', cantidad: 3 }],
      sugerirPack: 'pack-percha-recargable-500g-x4',
      nota: 'La recargable le conviene si piensa usarla más de dos meses: después solo cambia el recambio (S/8 cada uno en vez de S/25).',
    },
  },
  {
    espacio: 'cocina-bano',
    tamano: 'pequeno',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'ECO-135', cantidad: 1 }] },
  },
  {
    espacio: 'cocina-bano',
    tamano: 'cualquiera',
    sintoma: 'olor',
    recomendacion: { items: [{ sku: 'OL-TAC', cantidad: 1 }] },
  },
  {
    espacio: 'cajones',
    tamano: 'pequeno',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'ECO-135', cantidad: 2 }] },
  },
  {
    espacio: 'zapatos',
    tamano: 'cualquiera',
    sintoma: 'olor',
    recomendacion: { items: [{ sku: 'PIL-TC', cantidad: 2 }] },
  },
  {
    espacio: 'zapatos',
    tamano: 'cualquiera',
    sintoma: 'ambos',
    recomendacion: { items: [{ sku: 'PIL-TC', cantidad: 2 }] },
  },
  {
    espacio: 'auto',
    tamano: 'cualquiera',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'P-300D', cantidad: 1 }] },
  },
  {
    espacio: 'almacen',
    tamano: 'grande',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'SIL-200', cantidad: 3 }] },
  },
  {
    espacio: 'electronica',
    tamano: 'pequeno',
    sintoma: 'humedo',
    recomendacion: { items: [{ sku: 'SIL-100', cantidad: 2 }] },
  },
];

// Reglas de respaldo por espacio, para combinaciones no cubiertas explícitamente arriba.
const RESPALDO_POR_ESPACIO: Record<Espacio, Recomendacion> = {
  closet: { items: [{ sku: 'P-500D', cantidad: 1 }] },
  dormitorio: { items: [{ sku: 'P-500D', cantidad: 1 }] },
  'cocina-bano': { items: [{ sku: 'ECO-135', cantidad: 1 }] },
  auto: { items: [{ sku: 'P-300D', cantidad: 1 }] },
  zapatos: { items: [{ sku: 'PIL-TC', cantidad: 1 }] },
  cajones: { items: [{ sku: 'ECO-135', cantidad: 1 }] },
  almacen: { items: [{ sku: 'SIL-200', cantidad: 2 }] },
  electronica: { items: [{ sku: 'SIL-100', cantidad: 1 }] },
};

export function recomendar(espacio: Espacio, tamano: TamanoEspacio, sintoma: Sintoma): Recomendacion {
  const exacta = REGLAS.find(
    (r) =>
      r.espacio === espacio &&
      (r.tamano === tamano || r.tamano === 'cualquiera') &&
      (r.sintoma === sintoma || r.sintoma === 'cualquiera')
  );
  if (exacta) return exacta.recomendacion;
  return RESPALDO_POR_ESPACIO[espacio];
}

// Coberturas m² del catálogo, ver corrección de marca v3 §3.
// unidades = ceil(area_m2 / 12) para la caja de 300 g.
export const M2_POR_UNIDAD_300G = 12;

export const REFERENCIA_M2: { etiqueta: string; m2: number }[] = [
  { etiqueta: 'Un cajón o una caja', m2: 2 },
  { etiqueta: 'Un closet normal', m2: 6 },
  { etiqueta: 'Un closet grande / walk-in', m2: 12 },
  { etiqueta: 'Un dormitorio chico', m2: 12 },
  { etiqueta: 'Un dormitorio grande', m2: 24 },
  { etiqueta: 'Sala o comedor', m2: 35 },
  { etiqueta: 'Almacén o depósito', m2: 40 },
];

export function unidadesDe300gPara(m2: number): number {
  return Math.max(1, Math.ceil(m2 / M2_POR_UNIDAD_300G));
}
