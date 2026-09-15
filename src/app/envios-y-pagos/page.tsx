import type { Metadata } from 'next';
import { BotonWhatsApp } from '@/components/pedido/BotonWhatsApp';

export const metadata: Metadata = {
  title: 'Envíos y pagos',
  description: 'Cobertura de entrega, tiempos y métodos de pago de Nowet en Lima.',
};

export default function EnviosYPagosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-ink-900">Envíos y pagos</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Cobertura y tiempos de entrega</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          [PENDIENTE CONFIRMAR CON CLIENTE] — distritos de Lima que cubrimos, costo del envío y tiempo estimado de
          entrega.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Métodos de pago</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          [PENDIENTE CONFIRMAR CON CLIENTE] — actualmente el sitio anterior menciona Yape, Plin, transferencia y
          pago contra entrega; falta que el cliente confirme cuáles acepta realmente.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Monto mínimo de compra</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">[PENDIENTE CONFIRMAR CON CLIENTE]</p>
      </section>

      <div className="mt-10">
        <BotonWhatsApp mensaje={'Hola Nowet 👋 Tengo una consulta sobre envíos y pagos.\n\nOrigen: página web'}>
          Preguntar por WhatsApp
        </BotonWhatsApp>
      </div>
    </div>
  );
}
