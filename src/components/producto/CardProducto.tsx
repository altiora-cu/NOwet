import Image from 'next/image';
import Link from 'next/link';
import { Producto } from '@/data/productos';
import { BotonAgregar } from './BotonAgregar';
import { BadgeProducto } from './BadgeAhorro';
import { PlaceholderImagen } from '@/components/ui/PlaceholderImagen';
import { faltaAsset } from '@/lib/assets';

export function CardProducto({ producto }: { producto: Producto }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-md border border-line bg-surface transition-all duration-hover ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:hover:translate-y-0">
      {producto.badge && <BadgeProducto tipo={producto.badge} />}
      <Link href={`/producto/${producto.slug}`} className="relative block aspect-[6/5] bg-surface-alt">
        {faltaAsset(producto.imagen) ? (
          <PlaceholderImagen nombreArchivo={producto.imagen} />
        ) : (
          <Image
            src={producto.imagen}
            alt={producto.imagenAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-4"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-turquesa-aa">{producto.categoria}</p>
        <Link href={`/producto/${producto.slug}`}>
          <h3 className="text-lg font-bold text-ink-900">{producto.nombreCorto}</h3>
        </Link>
        {producto.coberturaM2 && (
          <p className="text-sm text-ink-700">
            Cubre hasta <strong>{producto.coberturaM2} m²</strong> · {producto.duracionTexto}
          </p>
        )}
        {!producto.coberturaM2 && producto.duracionTexto && (
          <p className="text-sm text-ink-500">Dura {producto.duracionTexto}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-xl font-extrabold text-ink-900">
            {producto.precio != null ? `S/ ${producto.precio}` : 'Consultar'}
          </span>
        </div>
        <BotonAgregar
          sku={producto.sku}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
          className="w-full"
        />
      </div>
    </div>
  );
}
