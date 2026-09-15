'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ControlTamanoTexto } from './ControlTamanoTexto';
import { usePedido } from '@/lib/pedido-context';

const ENLACES = [
  { href: '/productos', etiqueta: 'Productos' },
  { href: '/packs', etiqueta: 'Packs' },
  { href: '/calculadora', etiqueta: '¿Cuánto necesito?' },
  { href: '/envios-y-pagos', etiqueta: 'Envíos y pagos' },
  { href: '/empresas', etiqueta: 'Empresas' },
  { href: '/nosotros', etiqueta: 'Nosotros' },
  { href: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes' },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const { totalItems, setAbrirResumen } = usePedido();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setAbierto(false)}>
          <span className="text-2xl font-extrabold tracking-tight text-turquesa-900">
            NO<span className="text-magenta">WET</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {ENLACES.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-base font-medium text-ink-700 hover:text-turquesa-900"
            >
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ControlTamanoTexto />
          {totalItems > 0 && (
            <button
              type="button"
              onClick={() => setAbrirResumen(true)}
              className="hidden items-center gap-2 rounded-md border border-turquesa-aa px-4 py-3 text-base font-semibold text-turquesa-aa hover:bg-turquesa-50 xl:inline-flex"
            >
              Mi pedido ({totalItems})
            </button>
          )}
          <Link
            href="/productos"
            className="hidden rounded-md bg-turquesa-aa px-5 py-3 text-base font-semibold text-white hover:bg-turquesa-900 sm:inline-flex"
          >
            Ver productos
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line xl:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
          >
            <span aria-hidden className="text-xl">
              {abierto ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-line px-4 py-2 xl:hidden">
          <ul className="flex flex-col">
            {ENLACES.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setAbierto(false)}
                  className="flex min-h-[56px] items-center text-lg font-medium text-ink-700 hover:text-turquesa-900"
                >
                  {enlace.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
