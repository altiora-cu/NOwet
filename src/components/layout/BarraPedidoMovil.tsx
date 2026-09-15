'use client';

import { usePedido } from '@/lib/pedido-context';

export function BarraPedidoMovil() {
  const { totalItems, totalSoles, hayPrecio, setAbrirResumen } = usePedido();

  if (totalItems === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 backdrop-blur pb-[env(safe-area-inset-bottom)] lg:hidden">
      <button
        type="button"
        onClick={() => setAbrirResumen(true)}
        className="flex h-16 w-full items-center justify-between px-4 text-left"
      >
        <span className="font-semibold text-ink-900">
          Mi pedido ({totalItems}){hayPrecio ? ` · S/ ${totalSoles}` : ''}
        </span>
        <span className="rounded-md bg-turquesa-aa px-4 py-2 text-sm font-semibold text-white">Ver pedido</span>
      </button>
    </div>
  );
}
