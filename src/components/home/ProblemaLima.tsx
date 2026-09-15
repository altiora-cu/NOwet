import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

export function ProblemaLima() {
  return (
    <section className="border-b border-line bg-surface-alt py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/fotos/problema-humedad-lima.webp"
            alt="Gotas de condensación en el vidrio de una ventana, luz gris de garúa limeña de fondo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Por qué su ropa huele a guardado</h2>
          <p className="mt-4 max-w-prose-a11y text-lg text-ink-700">
            Lima pasa buena parte del año por encima del 80% de humedad. Esa humedad se mete en los closets, se
            queda en la ropa y termina en moho y mal olor. No es falta de limpieza — es el aire.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
