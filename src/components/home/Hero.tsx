import Image from 'next/image';
import Link from 'next/link';
import { PalabraNowet } from './PalabraNowet';

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden sm:min-h-[560px] lg:min-h-[640px]">
      <Image
        src="/fotos/hero-closet-producto.jpg"
        alt="Closet de melamina con una percha antihumedad Nowet colgada entre la ropa, mostrando el producto real en uso"
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: '68% 50%' }}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(20,49,58,0.92) 0%, rgba(20,49,58,0.82) 32%, rgba(20,49,58,0.45) 55%, rgba(20,49,58,0.08) 72%, transparent 88%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent sm:hidden"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:py-20 lg:py-0">
        <div className="max-w-lg">
          <p className="text-sm font-bold uppercase tracking-wide text-cian-claro">Absorbentes de humedad · Lima</p>
          <h1 className="mt-3 text-3xl font-extrabold text-white">
            En Lima la humedad no descansa. <PalabraNowet sobreOscuro /> tampoco.
          </h1>
          <p className="mt-4 max-w-prose-a11y text-lg text-white/90">
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
              className="inline-flex min-h-[56px] items-center justify-center rounded-md border-2 border-white px-6 text-base font-semibold text-white transition-all duration-hover hover:bg-white hover:text-turquesa-900 active:scale-[0.97]"
            >
              ¿Cuánto necesito?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
