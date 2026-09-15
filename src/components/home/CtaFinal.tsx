import { BotonWhatsApp } from '@/components/pedido/BotonWhatsApp';
import { Reveal } from '@/components/ui/Reveal';

export function CtaFinal() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">¿No sabe cuál le conviene?</h2>
          <p className="mt-3 text-lg text-ink-700">Escríbanos y le ayudamos a elegir. Le respondemos el mismo día.</p>
          <div className="mt-6 flex justify-center">
            <BotonWhatsApp mensaje={'Hola Nowet 👋 Tengo humedad en casa y no sé qué producto me conviene.\n\nOrigen: página web'}>
              Escribir por WhatsApp
            </BotonWhatsApp>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
