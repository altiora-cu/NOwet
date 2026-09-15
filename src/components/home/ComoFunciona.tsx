import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const PASOS = [
  { img: '/pasos/paso-1.webp', titulo: 'Lo cuelga', texto: 'En el closet, el cajón o el auto. No necesita instalación ni electricidad.' },
  {
    img: '/pasos/paso-2.webp',
    titulo: 'Absorbe la humedad',
    texto: 'Recoge la humedad del aire y la convierte en líquido dentro del envase. Sin goteos.',
  },
  { img: '/pasos/paso-3.webp', titulo: 'Lo cambia al mes', texto: 'Cuando el envase se llena, lo reemplaza. Nosotros le avisamos cuando toca.' },
];

export function ComoFunciona() {
  return (
    <section className="border-b border-line py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Así de simple</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {PASOS.map((paso, i) => (
            <Reveal key={paso.titulo}>
              <div className="text-center sm:text-left">
                <div className="relative mx-auto aspect-square w-32 sm:mx-0">
                  <Image src={paso.img} alt={`Ilustración: ${paso.titulo}`} fill sizes="128px" className="object-contain" />
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-wide text-turquesa-aa">Paso {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-ink-900">{paso.titulo}</h3>
                <p className="mt-2 max-w-prose-a11y text-base text-ink-700">{paso.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
