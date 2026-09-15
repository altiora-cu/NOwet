import type { Metadata } from 'next';
import { BotonWhatsApp } from '@/components/pedido/BotonWhatsApp';

export const metadata: Metadata = {
  title: 'Nowet para empresas',
  description: 'Absorbentes de humedad al por mayor para hoteles, almacenes, retail y otros negocios en Lima.',
};

const CASOS = [
  { titulo: 'Hoteles y alojamientos', texto: 'Closets y baños de habitaciones libres de humedad y malos olores.' },
  { titulo: 'Almacenes y depósitos', texto: 'Protección de mercadería contra moho y humedad en grandes espacios.' },
  { titulo: 'Retail y tiendas', texto: 'Presentación bilingüe lista para góndola, con cobertura declarada en el empaque.' },
];

export default function EmpresasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-bold uppercase tracking-wide text-turquesa-aa">Nowet empresas</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink-900">Absorbentes de humedad al por mayor</h1>
      <p className="mt-4 max-w-prose-a11y text-lg text-ink-700">
        El mismo producto que confían miles de hogares en Lima, en volumen para su negocio. Nuestra presentación en
        caja de 300 g ya viene en texto bilingüe español/inglés, lista para exportación.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {CASOS.map((caso) => (
          <div key={caso.titulo} className="rounded-lg border border-line p-5">
            <h2 className="text-lg font-bold text-ink-900">{caso.titulo}</h2>
            <p className="mt-2 text-base text-ink-700">{caso.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-turquesa-50 p-6">
        <h2 className="text-xl font-bold text-ink-900">Precios y condiciones al por mayor</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          [PENDIENTE CONFIRMAR CON CLIENTE] — escalas de precio por volumen, plazos de entrega y condiciones de pago
          para empresas.
        </p>
      </div>

      <div className="mt-10">
        <BotonWhatsApp mensaje={'Hola Nowet 👋 Represento a una empresa y quisiera cotizar un pedido al por mayor.\n\nOrigen: página web (empresas)'}>
          Cotizar por WhatsApp
        </BotonWhatsApp>
      </div>
    </div>
  );
}
