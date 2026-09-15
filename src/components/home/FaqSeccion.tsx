import { FAQ } from '@/data/faq';
import { Acordeon } from '@/components/ui/Acordeon';
import { Reveal } from '@/components/ui/Reveal';

export function FaqSeccion() {
  return (
    <section className="border-b border-line bg-surface-alt py-14">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Preguntas frecuentes</h2>
        </Reveal>
        <div className="mt-8">
          <Acordeon items={FAQ.map((f) => ({ pregunta: f.pregunta, respuesta: f.respuesta }))} />
        </div>
      </div>
    </section>
  );
}
