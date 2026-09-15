import { PACKS } from '@/data/productos';
import { CardPack } from '@/components/producto/CardPack';
import { Carrusel, CarruselItem } from '@/components/ui/Carrusel';
import { Reveal } from '@/components/ui/Reveal';

export function PacksSeccion() {
  return (
    <section className="border-b border-line bg-surface-alt py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-ink-900">Packs que le convienen</h2>
          <p className="mt-2 text-lg text-ink-700">Comprando en pack, cada unidad le sale más barata.</p>
        </Reveal>
        <div className="mt-8">
          <Carrusel>
            {PACKS.map((pack) => (
              <CarruselItem key={pack.sku} id={pack.slug} className="w-72">
                <CardPack pack={pack} />
              </CarruselItem>
            ))}
          </Carrusel>
        </div>
      </div>
    </section>
  );
}
