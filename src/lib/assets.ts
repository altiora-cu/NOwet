// Rutas de imagen que el paquete de assets v2 todavía no incluye.
// Ver nowet-assets-v2/LEEME.txt — dependen de material del cliente (logo, testimonios) o
// de productos que el sitio actual no fotografía (absorbentes de olores).
export const ASSETS_FALTANTES = new Set<string>([
  '/productos/absorbente-olores-closet.webp',
  '/productos/absorbente-olores-tachos.webp',
]);

export function faltaAsset(ruta: string): boolean {
  return ASSETS_FALTANTES.has(ruta);
}
