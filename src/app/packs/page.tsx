import type { Metadata } from 'next';
import { PACKS } from '@/data/productos';
import { CardPack } from '@/components/producto/CardPack';

export const metadata: Metadata = {
  title: 'Packs con ahorro',
  description: 'Packs de perchas antihumedad Nowet con ahorro frente al precio suelto.',
};

export default function PacksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-ink-900">Packs que le convienen</h1>
      <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">Comprando en pack, cada unidad le sale más barata.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKS.map((pack) => (
          <div key={pack.sku} id={pack.slug}>
            <CardPack pack={pack} />
          </div>
        ))}
      </div>
    </div>
  );
}
