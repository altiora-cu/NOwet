import Image from 'next/image';
import { buscarProductoPorSlug } from '@/data/productos';
import { BotonAgregar } from '@/components/producto/BotonAgregar';
import { Reveal } from '@/components/ui/Reveal';

export function BloqueCaja300g() {
  const producto = buscarProductoPorSlug('percha-antihumedad-desechable-300g-caja');
  if (!producto) return null;

  return (
    <section className="border-b border-line bg-turquesa-50 py-14">
      <Reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
          <div className="relative order-2 aspect-[6/5] overflow-hidden rounded-lg bg-surface lg:order-1">
            <Image
              src={producto.imagen}
              alt={producto.imagenAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-wide text-magenta">Recién llegado a tienda</p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink-900">La nueva caja Nowet de 300 g</h2>
            <p className="mt-3 max-w-prose-a11y text-lg text-ink-700">
              Cubre hasta 12 m² durante un mes. Atrapa la humedad, neutraliza olores y evita la formación de moho.
              Sin fragancia.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['300 g', '12 m²', '1 mes'].map((chip) => (
                <span key={chip} className="rounded-pill bg-surface px-4 py-1.5 text-sm font-semibold text-turquesa-900">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <BotonAgregar sku={producto.sku} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
