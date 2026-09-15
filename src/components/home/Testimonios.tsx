import { Reveal } from '@/components/ui/Reveal';

const ESPACIOS_RESERVADOS = 3;

export function Testimonios() {
  return (
    <section className="border-b border-line py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Lo que dicen nuestros clientes</h2>
          <p className="mt-2 text-base text-ink-500">
            Espacio reservado para testimonios reales de clientes — pendientes de recibir del cliente.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {Array.from({ length: ESPACIOS_RESERVADOS }).map((_, i) => (
            <Reveal key={i}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-line p-6 text-center">
                <div className="h-16 w-16 rounded-pill bg-surface-alt" aria-hidden />
                <p className="text-sm text-ink-500">Testimonio {i + 1} — [PENDIENTE: nombre, distrito y foto real del cliente]</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
