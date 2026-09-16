import { Carrusel, CarruselItem } from '@/components/ui/Carrusel';

const ITEMS: { icono: string; texto: string; pendiente?: boolean; fondo: string }[] = [
  { icono: '🚚', texto: 'Entrega en Lima', pendiente: true, fondo: 'bg-turquesa-100' },
  { icono: '🤝', texto: 'Pago contra entrega', pendiente: true, fondo: 'bg-magenta-100' },
  { icono: '💳', texto: 'Yape, Plin o transferencia', pendiente: true, fondo: 'bg-[#FED200]/25' },
  { icono: '💬', texto: 'Le ayudamos por WhatsApp', fondo: 'bg-[#25D366]/15' },
  { icono: '🇵🇪', texto: 'Producto peruano', fondo: 'bg-turquesa-100' },
];

export function BarraConfianza() {
  return (
    <section className="border-b border-line bg-surface py-6" aria-label="Ventajas de comprar en Nowet">
      <div className="mx-auto max-w-6xl px-4">
        <Carrusel>
          {ITEMS.map((item) => (
            <CarruselItem key={item.texto}>
              <div className="flex min-w-[220px] items-center gap-3 rounded-md border border-line px-4 py-3 transition-all duration-hover hover:-translate-y-0.5 hover:shadow-sm">
                <span
                  aria-hidden
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-pill text-xl ${item.fondo}`}
                >
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
