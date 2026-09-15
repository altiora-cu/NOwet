'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Nora = dynamic(() => import('./Nora').then((m) => m.Nora), { ssr: false });

// Carga diferida tras el evento `load` para no tocar el LCP — ver §7 del paquete de dirección creativa.
export function NoraCargador() {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setListo(true);
      return;
    }
    function alCargar() {
      setListo(true);
    }
    window.addEventListener('load', alCargar);
    return () => window.removeEventListener('load', alCargar);
  }, []);

  if (!listo) return null;
  return <Nora />;
}
