import type { Metadata } from 'next';
import { FiltroProductos } from '@/components/producto/FiltroProductos';

export const metadata: Metadata = {
  title: 'Catálogo de absorbentes de humedad',
  description: 'Perchas desechables y recargables, Eco-BOX, sílica gel y más. Precios en soles, entrega en Lima.',
};

export default function ProductosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-ink-900">Nuestros productos</h1>
      <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">Precios en soles. Entrega en Lima.</p>
      <div className="mt-8">
        <FiltroProductos />
      </div>
    </div>
  );
}
