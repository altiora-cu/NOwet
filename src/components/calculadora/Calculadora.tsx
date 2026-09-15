'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  OPCIONES_ESPACIO,
  OPCIONES_TAMANO,
  OPCIONES_SINTOMA,
  recomendar,
  TamanoEspacio,
  Sintoma,
} from '@/data/recomendaciones';
import { Espacio, PRODUCTOS, buscarPackPorSlug } from '@/data/productos';
import { trackEvento } from '@/lib/analytics';
import { BotonAgregar } from '@/components/producto/BotonAgregar';
import { BotonWhatsApp } from '@/components/pedido/BotonWhatsApp';
import Image from 'next/image';

type Paso = 1 | 2 | 3 | 4;

const VARIANTES = {
  entra: { opacity: 0, x: 16 },
  centro: { opacity: 1, x: 0 },
  sale: { opacity: 0, x: -16 },
};

export function Calculadora() {
  const [paso, setPaso] = useState<Paso>(1);
  const [espacio, setEspacio] = useState<Espacio | null>(null);
  const [tamano, setTamano] = useState<TamanoEspacio | null>(null);
  const [sintoma, setSintoma] = useState<Sintoma | null>(null);

  useEffect(() => {
    trackEvento('calculadora_iniciada');
  }, []);

  function reiniciar() {
    setPaso(1);
    setEspacio(null);
    setTamano(null);
    setSintoma(null);
  }

  const recomendacion = espacio && tamano && sintoma ? recomendar(espacio, tamano, sintoma) : null;

  useEffect(() => {
    if (paso === 4 && espacio && tamano && sintoma && recomendacion) {
      trackEvento('calculadora_completada', {
        espacio,
        tamano,
        sintoma,
        sku_recomendado: recomendacion.items.map((i) => i.sku).join('+'),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paso]);

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-line bg-surface p-6 shadow-sm sm:p-8">
      {paso < 4 && (
        <div className="mb-6 flex gap-2" aria-hidden>
          {[1, 2, 3].map((n) => (
            <div key={n} className={`h-1.5 flex-1 rounded-pill ${n <= paso ? 'bg-turquesa-aa' : 'bg-line'}`} />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {paso === 1 && (
          <motion.div key="p1" variants={VARIANTES} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="text-xl font-bold text-ink-900">¿Dónde tiene la humedad?</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {OPCIONES_ESPACIO.map((op) => (
                <button
                  key={op.valor}
                  type="button"
                  onClick={() => {
                    setEspacio(op.valor);
                    setPaso(2);
                  }}
                  className="min-h-[56px] rounded-md border-2 border-line px-4 py-3 text-left font-semibold text-ink-900 transition-colors duration-hover hover:border-turquesa-aa hover:bg-turquesa-50"
                >
                  {op.etiqueta}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {paso === 2 && (
          <motion.div key="p2" variants={VARIANTES} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="text-xl font-bold text-ink-900">¿Qué tan grande es el espacio?</h3>
            <div className="mt-5 flex flex-col gap-3">
              {OPCIONES_TAMANO.map((op) => (
                <button
                  key={op.valor}
                  type="button"
                  onClick={() => {
                    setTamano(op.valor);
                    setPaso(3);
                  }}
                  className="flex min-h-[56px] flex-col items-start rounded-md border-2 border-line px-4 py-3 text-left transition-colors duration-hover hover:border-turquesa-aa hover:bg-turquesa-50"
                >
                  <span className="font-semibold text-ink-900">{op.etiqueta}</span>
                  <span className="text-sm text-ink-500">{op.ayuda}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setPaso(1)} className="mt-5 text-sm font-semibold text-turquesa-aa">
              ← Volver
            </button>
          </motion.div>
        )}

        {paso === 3 && (
          <motion.div key="p3" variants={VARIANTES} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="text-xl font-bold text-ink-900">¿Qué siente?</h3>
            <div className="mt-5 flex flex-col gap-3">
              {OPCIONES_SINTOMA.map((op) => (
                <button
                  key={op.valor}
                  type="button"
                  onClick={() => {
                    setSintoma(op.valor);
                    setPaso(4);
                  }}
                  className="min-h-[56px] rounded-md border-2 border-line px-4 py-3 text-left font-semibold text-ink-900 transition-colors duration-hover hover:border-turquesa-aa hover:bg-turquesa-50"
                >
                  {op.etiqueta}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setPaso(2)} className="mt-5 text-sm font-semibold text-turquesa-aa">
              ← Volver
            </button>
          </motion.div>
        )}

        {paso === 4 && recomendacion && (
          <motion.div key="p4" variants={VARIANTES} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <ResultadoRecomendacion
              skus={recomendacion.items}
              nota={recomendacion.nota}
              packSlug={recomendacion.sugerirPack}
            />
            <button type="button" onClick={reiniciar} className="mt-5 text-sm font-semibold text-turquesa-aa">
              ← Empezar de nuevo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultadoRecomendacion({
  skus,
  nota,
  packSlug,
}: {
  skus: { sku: string; cantidad: number }[];
  nota?: string;
  packSlug?: string;
}) {
  const cantidadTotal = skus.reduce((s, i) => s + i.cantidad, 0);
  const pack = packSlug && cantidadTotal >= 3 ? buscarPackPorSlug(packSlug) : undefined;
  const total = skus.reduce((s, i) => {
    const p = PRODUCTOS.find((pr) => pr.sku === i.sku);
    return s + (p?.precio ?? 0) * i.cantidad;
  }, 0);

  return (
    <div>
      <h3 className="text-xl font-bold text-ink-900">Le recomendamos</h3>
      <div className="mt-4 space-y-3">
        {skus.map(({ sku, cantidad }) => {
          const producto = PRODUCTOS.find((p) => p.sku === sku);
          if (!producto) return null;
          return (
            <div key={sku} className="flex items-center gap-3 rounded-md border border-line p-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-surface-alt">
                <Image src={producto.imagen} alt="" fill sizes="56px" className="object-contain p-1" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink-900">
                  {cantidad} × {producto.nombreCorto}
                </p>
                <p className="text-sm text-ink-500">
                  {producto.precio != null ? `S/ ${producto.precio * cantidad}` : 'Consultar precio'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {pack && (
        <p className="mt-4 rounded-md bg-magenta-100 p-3 text-sm text-ink-900">
          Le conviene más el <strong>{pack.nombre}</strong> por S/ {pack.precio} en vez de comprar suelto.
        </p>
      )}

      {nota && <p className="mt-4 text-sm text-ink-700">{nota}</p>}

      {total > 0 && !pack && <p className="mt-4 text-lg font-bold text-ink-900">Total aproximado: S/ {total}</p>}

      <div className="mt-6 flex flex-col gap-3">
        <AgregarRecomendacion skus={skus} pack={pack} />
        <BotonWhatsApp
          mensaje={'Hola Nowet 👋 Terminé la calculadora de la web y prefiero que un asesor me ayude a elegir.\n\nOrigen: página web'}
          className="w-full"
        >
          Prefiero hablar con alguien
        </BotonWhatsApp>
      </div>
    </div>
  );
}

function AgregarRecomendacion({
  skus,
  pack,
}: {
  skus: { sku: string; cantidad: number }[];
  pack?: ReturnType<typeof buscarPackPorSlug>;
}) {
  if (pack) {
    return <BotonAgregar sku={pack.sku} nombre={pack.nombre} precio={pack.precio} imagen={pack.imagen} esPack className="w-full" />;
  }
  const primero = PRODUCTOS.find((p) => p.sku === skus[0]?.sku);
  if (!primero) return null;
  return (
    <BotonAgregar
      sku={primero.sku}
      nombre={primero.nombre}
      precio={primero.precio}
      imagen={primero.imagen}
      className="w-full"
    />
  );
}
