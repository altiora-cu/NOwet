import { Carrusel, CarruselItem } from '@/components/ui/Carrusel';

const ITEMS: { icono: string; texto: string; pendiente?: boolean }[] = [
  { icono: '🚚', texto: 'Entrega en Lima', pendiente: true },
  { icono: '🤝', texto: 'Pago contra entrega', pendiente: true },
  { icono: '💳', texto: 'Yape, Plin o transferencia', pendiente: true },
  { icono: '💬', texto: 'Le ayudamos por WhatsApp' },
  { icono: '🇵🇪', texto: 'Producto peruano' },
];

export function BarraConfianza() {
  return (
    <section className="border-b border-line bg-surface py-6" aria-label="Ventajas de comprar en Nowet">
      <div className="mx-auto max-w-6xl px-4">
        <Carrusel>
          {ITEMS.map((item) => (
            <CarruselItem key={item.texto}>
              <div className="flex min-w-[220px] items-center gap-3 rounded-md border border-line px-4 py-3">
                <span aria-hidden className="text-2xl">
                  {item.icono}
                </span>
                <span className="text-base font-semibold text-ink-900">
                  {item.texto}
                  {item.pendiente && <span className="ml-1 block text-xs font-normal text-magenta-900">[PENDIENTE CONFIRMAR]</span>}
                </span>
              </div>
            </CarruselItem>
          ))}
        </Carrusel>
      </div>
    </section>
  );
}
