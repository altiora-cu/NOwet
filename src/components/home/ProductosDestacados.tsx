import Link from 'next/link';
import { PRODUCTOS } from '@/data/productos';
import { CardProducto } from '@/components/producto/CardProducto';
import { Reveal } from '@/components/ui/Reveal';

export function ProductosDestacados() {
  const destacados = PRODUCTOS.filter((p) => p.destacado).slice(0, 6);

  return (
    <section className="border-b border-line py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Nuestros productos</h2>
          <p className="mt-2 text-lg text-ink-700">Precios en soles. Entrega en Lima.</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((producto) => (
            <Reveal key={producto.sku}>
              <CardProducto producto={producto} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/productos" className="text-base font-semibold text-turquesa-aa underline underline-offset-4">
            Ver el catálogo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
