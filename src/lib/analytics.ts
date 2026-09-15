// Envoltorio único de analítica. Envía a GA4 (gtag) y Meta Pixel (fbq) si están presentes
// en window; si no, no hace nada. Ningún componente debe llamar a gtag/fbq directamente.

type Parametros = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type EventoNowet =
  | 'producto_agregado'
  | 'pack_agregado'
  | 'calculadora_iniciada'
  | 'calculadora_completada'
  | 'nora_abierta'
  | 'pedido_enviado'
  | 'consultar_precio';

export function trackEvento(evento: EventoNowet, parametros: Parametros = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', evento, parametros);
    window.fbq?.('trackCustom', evento, parametros);
  } catch {
    // La analítica nunca debe romper la experiencia del usuario.
  }
}
