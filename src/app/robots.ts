import type { MetadataRoute } from 'next';

// Demo — bloquear indexación hasta que el cliente apruebe y se pase a producción.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
