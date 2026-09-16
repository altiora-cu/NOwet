'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ControlTamanoTexto } from './ControlTamanoTexto';
import { usePedido } from '@/lib/pedido-context';

const ENLACES = [
  { href: '/productos', etiqueta: 'Productos' },
  { href: '/packs', etiqueta: 'Packs' },
  { href: '/calculadora', etiqueta: 'Calculadora' },
  { href: '/envios-y-pagos', etiqueta: 'Envíos' },
  { href: '/empresas', etiqueta: 'Empresas' },
  { href: '/nosotros', etiqueta: 'Nosotros' },
  { href: '/preguntas-frecuentes', etiqueta: 'Preguntas' },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const { totalItems, setAbrirResumen } = usePedido();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setAbierto(false)}>
          <span className="text-xl font-extrabold tracking-tight text-turquesa-900 sm:text-2xl">
            NO<span className="text-magenta">WET</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Principal">
          {ENLACES.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="relative py-1 text-[15px] font-semibold text-ink-700 transition-colors duration-hover hover:text-turquesa-900 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-pill after:bg-turquesa-aa after:transition-all after:duration-hover after:ease-out hover:after:w-full"
            >
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ControlTamanoTexto />

          <button
            type="button"
            onClick={() => setAbrirResumen(true)}
            aria-label={totalItems > 0 ? `Mi pedido, ${totalItems} productos` : 'Mi pedido, vacío'}
            className="relative flex h-11 w-11 items-center justify-center rounded-md text-ink-700 transition-colors duration-hover hover:bg-surface-alt hover:text-turquesa-900"
          >
            <IconoBolsa />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-pill bg-magenta px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <Link
            href="/productos"
            className="hidden rounded-md bg-turquesa-aa px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-hover hover:bg-turquesa-900 hover:shadow-md sm:inline-flex sm:items-center"
          >
            Ver productos
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink-700 hover:bg-surface-alt xl:hidden"
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

function IconoBolsa() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
