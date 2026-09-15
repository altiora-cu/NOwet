import type { MetadataRoute } from 'next';
import { PRODUCTOS } from '@/data/productos';

const SITE_URL = 'https://nowet-demo.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas = [
    '',
    '/productos',
    '/packs',
    '/calculadora',
    '/envios-y-pagos',
    '/empresas',
    '/preguntas-frecuentes',
    '/nosotros',
    '/contacto',
  ].map((ruta) => ({
    url: `${SITE_URL}${ruta}`,
    lastModified: new Date(),
  }));

  const paginasProducto = PRODUCTOS.map((p) => ({
    url: `${SITE_URL}/producto/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...paginasEstaticas, ...paginasProducto];
}
