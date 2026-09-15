'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePedido } from '@/lib/pedido-context';
import { construirMensaje } from '@/lib/whatsapp';
import { trackEvento } from '@/lib/analytics';
import { BotonWhatsApp } from './BotonWhatsApp';
import { DISTRITOS_LIMA } from '@/data/distritos';
import { faltaAsset } from '@/lib/assets';
import { PlaceholderImagen } from '@/components/ui/PlaceholderImagen';

export function ResumenPedido() {
  const { items, distrito, avisos, setDistrito, setAvisos, actualizarCantidad, quitarItem, abrirResumen, setAbrirResumen, hayPrecio, totalSoles } =
    usePedido();
  const primerCampoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abrirResumen) return;
    function alTeclado(e: KeyboardEvent) {
      if (e.key === 'Escape') setAbrirResumen(false);
    }
    document.addEventListener('keydown', alTeclado);
    primerCampoRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', alTeclado);
      document.body.style.overflow = '';
    };
  }, [abrirResumen, setAbrirResumen]);

  if (!abrirResumen) return null;

  const mensaje = construirMensaje(items, distrito, avisos);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center" role="presentation">
      <button
        aria-label="Cerrar resumen del pedido"
        className="absolute inset-0 bg-ink-900/50"
        onClick={() => setAbrirResumen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-resumen-pedido"
        className="relative flex max-h-[90vh] w-full flex-col rounded-t-lg bg-surface p-5 sm:max-w-lg sm:rounded-lg"
      >
        <div className="flex items-center justify-between">
          <h2 id="titulo-resumen-pedido" className="text-xl font-bold">
            Mi pedido
          </h2>
          <button
            ref={primerCampoRef}
            type="button"
            onClick={() => setAbrirResumen(false)}
            aria-label="Cerrar"
            className="flex h-11 w-11 items-center justify-center rounded-md hover:bg-surface-alt"
          >
            <span aria-hidden className="text-2xl">
              ✕
            </span>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-6 text-ink-700">
            Todavía no ha agregado nada. Toque &quot;Agregar a mi pedido&quot; en el producto que quiera.
          </p>
        ) : (
          <>
            <ul className="mt-4 flex-1 space-y-4 overflow-y-auto">
              {items.map((item) => (
                <li key={item.sku} className="flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-surface-alt">
                    {faltaAsset(item.imagen) ? (
                      <PlaceholderImagen nombreArchivo={item.imagen} className="aspect-square" />
                    ) : (
                      <Image src={item.imagen} alt="" fill sizes="64px" className="object-contain" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink-900">{item.nombre}</p>
                    <p className="text-sm text-ink-500">
                      {item.precio != null ? `S/ ${item.precio} c/u` : 'Consultar precio'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Quitar una unidad de ${item.nombre}`}
                      onClick={() => actualizarCantidad(item.sku, item.cantidad - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-lg font-bold"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-semibold" aria-live="polite">
                      {item.cantidad}
                    </span>
                    <button
                      type="button"
                      aria-label={`Agregar una unidad más de ${item.nombre}`}
                      onClick={() => actualizarCantidad(item.sku, item.cantidad + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    aria-label={`Quitar ${item.nombre} del pedido`}
                    onClick={() => quitarItem(item.sku)}
                    className="text-ink-500 hover:text-magenta"
                  >
                    <span aria-hidden>🗑</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-4 border-t border-line pt-4">
              <div>
                <label htmlFor="distrito" className="mb-1 block text-sm font-semibold text-ink-700">
                  Distrito (opcional)
                </label>
                <select
                  id="distrito"
                  value={distrito}
                  onChange={(e) => setDistrito(e.target.value)}
                  className="w-full rounded-sm border border-line px-3 py-3 text-base"
                >
                  <option value="">Selecciona tu distrito</option>
                  {DISTRITOS_LIMA.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex min-h-[44px] cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={avisos}
                  onChange={(e) => setAvisos(e.target.checked)}
                  className="mt-1 h-5 w-5 accent-turquesa-aa"
                />
                <span className="text-base text-ink-700">Quiero que me avisen cuando toque cambiarlo</span>
              </label>

              {hayPrecio && (
                <p className="text-lg font-bold text-ink-900">
                  Total aproximado: <span className="text-turquesa-900">S/ {totalSoles}</span>
                </p>
              )}

              <BotonWhatsApp
                mensaje={mensaje}
                className="w-full"
                onClickExtra={() => {
                  trackEvento('pedido_enviado', {
                    total: totalSoles,
                    n_items: items.length,
                    avisos,
                    distrito: distrito || undefined,
                  });
                }}
              >
                Enviar mi pedido por WhatsApp
              </BotonWhatsApp>
              <Link
                href="/gracias"
                onClick={() => setAbrirResumen(false)}
                className="block text-center text-sm text-ink-500 underline underline-offset-4"
              >
                Ya envié mi pedido, continuar
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
