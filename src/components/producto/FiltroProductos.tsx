'use client';

import { useState } from 'react';
import { PRODUCTOS, ESPACIOS_LABEL, Espacio } from '@/data/productos';
import { CardProducto } from './CardProducto';

export function FiltroProductos() {
  const [espacio, setEspacio] = useState<Espacio | 'todos'>('todos');

  const productos = espacio === 'todos' ? PRODUCTOS : PRODUCTOS.filter((p) => p.espacios.includes(espacio));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por espacio">
        <button
          type="button"
          onClick={() => setEspacio('todos')}
          className={`min-h-[44px] rounded-pill border-2 px-4 text-sm font-semibold ${
            espacio === 'todos' ? 'border-turquesa-aa bg-turquesa-aa text-white' : 'border-line text-ink-700 hover:border-turquesa-aa'
          }`}
        >
          Todos
        </button>
        {(Object.keys(ESPACIOS_LABEL) as Espacio[]).map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setEspacio(e)}
            className={`min-h-[44px] rounded-pill border-2 px-4 text-sm font-semibold ${
              espacio === e ? 'border-turquesa-aa bg-turquesa-aa text-white' : 'border-line text-ink-700 hover:border-turquesa-aa'
            }`}
          >
            {ESPACIOS_LABEL[e]}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-ink-500" aria-live="polite">
        {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <CardProducto key={producto.sku} producto={producto} />
        ))}
      </div>
    </div>
  );
}
