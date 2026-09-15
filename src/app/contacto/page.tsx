import type { Metadata } from 'next';
import { FormularioContacto } from '@/components/contacto/FormularioContacto';
import { numeroWhatsApp } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbanos por WhatsApp o el formulario de contacto. Libro de reclamaciones de Nowet Absorbente.',
};

export default function ContactoPage() {
  const numero = numeroWhatsApp();
  const numeroLegible = `+${numero.slice(0, 2)} ${numero.slice(2)}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-ink-900">Contacto</h1>

      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Escríbanos</h2>
          <ul className="mt-3 space-y-2 text-lg text-ink-700">
            <li>WhatsApp: {numeroLegible}</li>
            <li>Email: info@nowetabsorbente.com</li>
            <li>Instagram: @nowet_absorbente</li>
            <li>Facebook: /nowetperu</li>
          </ul>
          <p className="mt-2 text-sm text-ink-500">[PENDIENTE CONFIRMAR CON CLIENTE] cuál número de WhatsApp es el de ventas.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-ink-900">Formulario</h2>
          <div className="mt-3">
            <FormularioContacto />
          </div>
        </div>
      </section>

      <section id="libro-de-reclamaciones" className="mt-16 scroll-mt-24 rounded-lg border border-line bg-surface-alt p-6">
        <h2 className="text-xl font-bold text-ink-900">Libro de reclamaciones</h2>
        <p className="mt-2 max-w-prose-a11y text-base text-ink-700">
          Conforme al Código de Protección y Defensa del Consumidor, usted tiene derecho a formular un reclamo o una
          queja a través de este medio.
        </p>
        <p className="mt-2 text-sm text-ink-500">
          [PENDIENTE: razón social y RUC del cliente] — datos obligatorios para publicar el libro de reclamaciones
          virtual. Mientras se confirman, use el formulario de contacto o escriba por WhatsApp indicando &quot;Reclamo&quot;
          en el mensaje.
        </p>
      </section>
    </div>
  );
}
