'use client';

import { useEffect, useState } from 'react';

const CLAVE = 'nowet_texto_grande';
const ESCALA_GRANDE = '1.2';
const ESCALA_NORMAL = '1';

export function ControlTamanoTexto() {
  const [grande, setGrande] = useState(false);

  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem(CLAVE) === '1';
      setGrande(guardado);
      document.documentElement.style.setProperty('--text-scale', guardado ? ESCALA_GRANDE : ESCALA_NORMAL);
    } catch {
      // Si localStorage falla, el sitio se queda en tamaño normal.
    }
  }, []);

  function alternar() {
    const nuevo = !grande;
    setGrande(nuevo);
    document.documentElement.style.setProperty('--text-scale', nuevo ? ESCALA_GRANDE : ESCALA_NORMAL);
    try {
      window.localStorage.setItem(CLAVE, nuevo ? '1' : '0');
    } catch {
      // No pasa nada si no se puede persistir.
    }
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={grande}
      aria-label={grande ? 'Volver al tamaño de texto normal' : 'Aumentar el tamaño del texto un 20%'}
      className="flex h-11 min-w-[44px] items-center justify-center rounded-md border border-line px-3 text-sm font-bold text-ink-700 hover:border-turquesa-aa hover:text-turquesa-aa"
      title="Aumentar tamaño de texto"
    >
      Aa
    </button>
  );
}
