import { PedidoItem } from './pedido-context';

export function construirMensaje(items: PedidoItem[], distrito: string, avisos: boolean): string {
  const lineas = items.map(
    (i) => `• ${i.cantidad} × ${i.nombre}${i.precio != null ? ` — S/ ${i.cantidad * i.precio}` : ' — Consultar precio'}`
  );
  const total = items.reduce((s, i) => s + i.cantidad * (i.precio ?? 0), 0);
  const hayPrecio = items.some((i) => i.precio != null);

  return [
    'Hola Nowet 👋 Quiero hacer este pedido:',
    '',
    ...lineas,
    '',
    hayPrecio ? `Total aproximado: S/ ${total}` : '',
    distrito ? `Distrito: ${distrito}` : '',
    avisos ? 'Avisos: SÍ, avísenme cuando toque cambiarlo' : '',
    'Origen: página web',
  ]
    .filter(Boolean)
    .join('\n');
}

export function construirMensajeSimple(nombreProducto: string): string {
  return `Hola Nowet 👋 Quisiera consultar el precio de: ${nombreProducto}.\n\nOrigen: página web`;
}

export function numeroWhatsApp(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP || '51945523082';
}

export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${numeroWhatsApp()}?text=${encodeURIComponent(mensaje)}`;
}
