import Image from 'next/image';
import Link from 'next/link';
import { PalabraNowet } from './PalabraNowet';
import { FotoProductoFlotante } from './FotoProductoFlotante';

export function Hero() {
  return (
    <section className="border-b border-line bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-bold uppercase tracking-wide text-turquesa-aa">Absorbentes de humedad · Lima</p>
          <h1 className="mt-3 text-3xl font-extrabold text-ink-900">
            En Lima la humedad no descansa. <PalabraNowet /> tampoco.
          </h1>
          <p className="mt-4 max-w-prose-a11y text-lg text-ink-700">
            Perchas, cajitas y saquitos que secan closets, cajones y ambientes. Entrega en Lima.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/productos"
              className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-turquesa-aa px-6 text-base font-semibold text-white transition-all duration-hover hover:bg-turquesa-900 hover:shadow-md active:scale-[0.97]"
            >
              Ver productos
            </Link>
            <Link
              href="/calculadora"
              className="inline-flex min-h-[56px] items-center justify-center rounded-md border-2 border-turquesa-aa px-6 text-base font-semibold text-turquesa-aa transition-all duration-hover hover:bg-turquesa-50 active:scale-[0.97]"
            >
              ¿Cuánto necesito?
            </Link>
          </div>
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2 lg:aspect-[16/11]">
          <Image
            src="/fotos/hero-closet-lima.webp"
            alt="Closet de melamina en un dormitorio limeño con una percha antihumedad Nowet colgada entre la ropa"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <FotoProductoFlotante />
        </div>
      </div>
    </section>
  );
}
