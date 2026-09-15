import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gracias',
  description: 'Su pedido fue enviado por WhatsApp. Un asesor de Nowet le confirmará a la brevedad.',
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <span aria-hidden className="text-5xl">
        ✅
      </span>
      <h1 className="mt-4 text-3xl font-extrabold text-ink-900">¡Gracias por su pedido!</h1>
      <p className="mt-3 max-w-prose-a11y text-lg text-ink-700">
        Le llegó un mensaje ya escrito a WhatsApp con el detalle de su pedido. Un asesor de Nowet le confirmará el
        pago y coordinará la entrega a la brevedad.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/productos"
          className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-turquesa-aa px-6 text-base font-semibold text-white hover:bg-turquesa-900"
        >
          Seguir viendo productos
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-[56px] items-center justify-center rounded-md border-2 border-turquesa-aa px-6 text-base font-semibold text-turquesa-aa hover:bg-turquesa-50"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
