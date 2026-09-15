'use client';

import { useState } from 'react';
import { usePedido } from '@/lib/pedido-context';
import { trackEvento } from '@/lib/analytics';
import { enlaceWhatsApp } from '@/lib/whatsapp';

interface BotonAgregarProps {
  sku: string;
  nombre: string;
  precio: number | null;
  imagen: string;
  esPack?: boolean;
  className?: string;
}

export function BotonAgregar({ sku, nombre, precio, imagen, esPack = false, className = '' }: BotonAgregarProps) {
  const { agregarItem } = usePedido();
  const [agregado, setAgregado] = useState(false);

  if (precio == null) {
    return (
      <a
        href={enlaceWhatsApp(`Hola Nowet 👋 Quisiera consultar el precio de: ${nombre}.\n\nOrigen: página web`)}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvento('consultar_precio', { sku })}
        className={`inline-flex min-h-[56px] items-center justify-center rounded-md border-2 border-turquesa-aa px-6 text-base font-semibold text-turquesa-aa transition-colors duration-hover hover:bg-turquesa-50 ${className}`}
      >
        Consultar precio
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        agregarItem({ sku, nombre, precio, imagen, esPack });
        setAgregado(true);
        window.setTimeout(() => setAgregado(false), 1600);
      }}
      className={`inline-flex min-h-[56px] items-center justify-center rounded-md bg-turquesa-aa px-6 text-base font-semibold text-white shadow-sm transition-all duration-micro ease-out hover:bg-turquesa-900 hover:shadow-md active:scale-[0.97] ${className}`}
    >
      {agregado ? 'Agregado ✓' : 'Agregar a mi pedido'}
    </button>
  );
}
