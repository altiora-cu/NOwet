import Image from 'next/image';
import Link from 'next/link';
import { Pack } from '@/data/productos';
import { BotonAgregar } from './BotonAgregar';
import { BadgeAhorro } from './BadgeAhorro';

export function CardPack({ pack }: { pack: Pack }) {
  const ahorro = pack.precioSuelto != null ? pack.precioSuelto - pack.precio : null;

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border border-line bg-surface transition-all duration-hover ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:hover:translate-y-0">
      {ahorro != null && ahorro > 0 && <div className="absolute left-3 top-3 z-10"><BadgeAhorro ahorro={ahorro} /></div>}
      <Link href={`/packs#${pack.slug}`} className="relative block aspect-[6/5] bg-surface-alt">
        <Image
          src={pack.imagen}
          alt={pack.imagenAlt}
          fill
          sizes="288px"
          className="object-contain p-4 transition-transform duration-hover ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold text-ink-900">{pack.nombre}</h3>
        <p className="text-sm text-ink-700">{pack.contenido}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-xl font-extrabold text-ink-900">S/ {pack.precio}</span>
          {pack.precioSuelto != null && (
            <span className="text-sm text-ink-500 line-through">S/ {pack.precioSuelto}</span>
          )}
        </div>
        {pack.revisar && <p className="text-xs text-magenta-900">[PENDIENTE CONFIRMAR] {pack.revisar}</p>}
        <BotonAgregar sku={pack.sku} nombre={pack.nombre} precio={pack.precio} imagen={pack.imagen} esPack className="w-full" />
      </div>
    </div>
  );
}
