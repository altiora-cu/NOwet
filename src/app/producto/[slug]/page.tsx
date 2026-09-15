import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTOS, buscarProductoPorSlug } from '@/data/productos';
import { BotonAgregar } from '@/components/producto/BotonAgregar';
import { BadgeProducto } from '@/components/producto/BadgeAhorro';
import { PlaceholderImagen } from '@/components/ui/PlaceholderImagen';
import { faltaAsset } from '@/lib/assets';
import { CardProducto } from '@/components/producto/CardProducto';

export function generateStaticParams() {
  return PRODUCTOS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const producto = buscarProductoPorSlug(params.slug);
  if (!producto) return {};
  return {
    title: producto.nombreCorto,
    description: producto.descripcion,
  };
}

export default function FichaProductoPage({ params }: { params: { slug: string } }) {
  const producto = buscarProductoPorSlug(params.slug);
  if (!producto) notFound();

  const relacionados = PRODUCTOS.filter((p) => p.categoria === producto.categoria && p.sku !== producto.sku).slice(0, 3);

  const schemaProducto = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: producto.nombre,
    description: producto.descripcion,
    sku: producto.sku,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PEN',
      price: producto.precio ?? undefined,
      availability: 'https://schema.org/InStock',
    },
  };

  const schemaMigas = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Productos', item: '/productos' },
      { '@type': 'ListItem', position: 3, name: producto.nombreCorto, item: `/producto/${producto.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProducto) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMigas) }} />

      <nav aria-label="Migas de pan" className="text-sm text-ink-500">
        <Link href="/" className="hover:text-turquesa-900">
          Inicio
        </Link>{' '}
        /{' '}
        <Link href="/productos" className="hover:text-turquesa-900">
          Productos
        </Link>{' '}
        / <span className="text-ink-900">{producto.nombreCorto}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[6/5] overflow-hidden rounded-lg bg-surface-alt">
          {producto.badge && <BadgeProducto tipo={producto.badge} />}
          {faltaAsset(producto.imagen) ? (
            <PlaceholderImagen nombreArchivo={producto.imagen} />
          ) : (
            <Image src={producto.imagen} alt={producto.imagenAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8" />
          )}
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-turquesa-aa">{producto.categoria}</p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink-900">{producto.nombre}</h1>
          <p className="mt-4 text-2xl font-extrabold text-ink-900">
            {producto.precio != null ? `S/ ${producto.precio}` : 'Consultar precio'}
          </p>

          <dl className="mt-4 space-y-1 text-base text-ink-700">
            {producto.medida && (
              <div className="flex gap-2">
                <dt className="font-semibold">Medida:</dt>
                <dd>{producto.medida}</dd>
              </div>
            )}
            {producto.duracionTexto && (
              <div className="flex gap-2">
                <dt className="font-semibold">Duración:</dt>
                <dd>{producto.duracionTexto}</dd>
              </div>
            )}
            {producto.coberturaM2 && (
              <div className="flex gap-2">
                <dt className="font-semibold">Cobertura:</dt>
                <dd>hasta {producto.coberturaM2} m²</dd>
              </div>
            )}
          </dl>

          <p className="mt-4 max-w-prose-a11y text-lg text-ink-700">{producto.descripcion}</p>

          <ul className="mt-4 space-y-2">
            {producto.caracteristicas.map((c) => (
              <li key={c} className="flex items-start gap-2 text-base text-ink-700">
                <span aria-hidden className="mt-1 text-turquesa-aa">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <BotonAgregar sku={producto.sku} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} className="w-full sm:w-auto" />
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold text-ink-900">También le puede interesar</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((p) => (
              <CardProducto key={p.sku} producto={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
