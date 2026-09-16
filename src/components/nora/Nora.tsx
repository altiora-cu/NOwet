'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { trackEvento } from '@/lib/analytics';
import { enlaceWhatsApp } from '@/lib/whatsapp';
import { BotonEscuchar } from './BotonEscuchar';
import {
  OPCIONES_ESPACIO,
  OPCIONES_TAMANO,
  OPCIONES_SINTOMA,
  recomendar,
  TamanoEspacio,
  Sintoma,
} from '@/data/recomendaciones';
import { Espacio, PRODUCTOS, buscarPackPorSlug } from '@/data/productos';
import { BotonAgregar } from '@/components/producto/BotonAgregar';

type Vista = 'menu' | 'espacio' | 'tamano' | 'sintoma' | 'resultado' | 'como-uso' | 'envio' | 'duracion';

const CLAVE_CERRADA = 'nowet_nora_cerrada_sesion';

export function Nora() {
  const [abierta, setAbierta] = useState(false);
  const [invitacion, setInvitacion] = useState(false);
  const [vista, setVista] = useState<Vista>('menu');
  const [espacio, setEspacio] = useState<Espacio | null>(null);
  const [tamano, setTamano] = useState<TamanoEspacio | null>(null);
  const [sintoma, setSintoma] = useState<Sintoma | null>(null);
  const dialogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(CLAVE_CERRADA) === '1') {
        return;
      }
    } catch {
      // sin sessionStorage, la invitación simplemente puede repetirse
    }
    const temporizador = window.setTimeout(() => setInvitacion(true), 5000);
    return () => window.clearTimeout(temporizador);
  }, []);

  useEffect(() => {
    if (!abierta) return;
    function alTeclado(e: KeyboardEvent) {
      if (e.key === 'Escape') cerrar();
    }
    document.addEventListener('keydown', alTeclado);
    dialogoRef.current?.focus();
    return () => document.removeEventListener('keydown', alTeclado);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierta]);

  function abrir(origen: 'auto' | 'click') {
    setAbierta(true);
    descartarInvitacion();
    setVista('menu');
    trackEvento('nora_abierta', { origen });
  }

  function descartarInvitacion() {
    setInvitacion(false);
    try {
      window.sessionStorage.setItem(CLAVE_CERRADA, '1');
    } catch {
      // no pasa nada si no se puede persistir
    }
  }

  function cerrar() {
    setAbierta(false);
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:bottom-6">
      <AnimatePresence>
        {abierta && (
          <motion.div
            ref={dialogoRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="nora-titulo"
            aria-live="polite"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-sm rounded-lg border border-line bg-surface p-5 shadow-md"
          >
            <VistaActual
              vista={vista}
              setVista={setVista}
              espacio={espacio}
              setEspacio={setEspacio}
              tamano={tamano}
              setTamano={setTamano}
              sintoma={sintoma}
              setSintoma={setSintoma}
              cerrar={cerrar}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-3">
        {invitacion && !abierta && (
          <motion.button
            type="button"
            onClick={() => abrir('click')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink-900 shadow-sm hover:shadow-md"
          >
            ¿Te ayudo a elegir? 👋
          </motion.button>
        )}
        <button
          type="button"
          onClick={() => (abierta ? cerrar() : abrir('click'))}
          aria-label={abierta ? 'Cerrar a Nora, la asistente' : 'Abrir a Nora, la asistente'}
          className="relative flex h-16 w-16 items-center justify-center rounded-pill border border-line bg-surface shadow-md"
        >
          <Image src="/nora/nora-saludo.webp" alt="" fill sizes="64px" className="rounded-pill object-cover" />
          {!abierta && (
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 animate-pulse rounded-pill bg-wa-500" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}

function VistaActual({
  vista,
  setVista,
  espacio,
  setEspacio,
  tamano,
  setTamano,
  sintoma,
  setSintoma,
  cerrar,
}: {
  vista: Vista;
  setVista: (v: Vista) => void;
  espacio: Espacio | null;
  setEspacio: (e: Espacio) => void;
  tamano: TamanoEspacio | null;
  setTamano: (t: TamanoEspacio) => void;
  sintoma: Sintoma | null;
  setSintoma: (s: Sintoma) => void;
  cerrar: () => void;
}) {
  if (vista === 'menu') {
    const texto = 'Hola, soy Nora. ¿En qué le ayudo?';
    return (
      <div>
        <h2 id="nora-titulo" className="text-lg font-bold text-ink-900">
          {texto}
        </h2>
        <BotonEscuchar texto={texto} />
        <div className="mt-4 flex flex-col gap-2">
          <OpcionMenu etiqueta="Te ayudo a elegir su producto" onClick={() => setVista('espacio')} />
          <OpcionMenu etiqueta="¿Cómo lo uso?" onClick={() => setVista('como-uso')} />
          <OpcionMenu etiqueta="¿Cuánto cuesta el envío?" onClick={() => setVista('envio')} />
          <OpcionMenu etiqueta="¿Cuánto dura?" onClick={() => setVista('duracion')} />
          <a
            href={enlaceWhatsApp('Hola Nowet 👋 Quisiera hablar con una persona.\n\nOrigen: página web (Nora)')}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[56px] items-center rounded-md bg-wa-600 px-4 text-left font-semibold text-white hover:bg-[#0f6f63]"
          >
            Hablar con una persona
          </a>
        </div>
      </div>
    );
  }

  if (vista === 'espacio') {
    return (
      <VistaConVolver titulo="¿Dónde tiene la humedad?" onVolver={() => setVista('menu')}>
        <div className="grid grid-cols-2 gap-2">
          {OPCIONES_ESPACIO.map((op) => (
            <button
              key={op.valor}
              type="button"
              onClick={() => {
                setEspacio(op.valor);
                setVista('tamano');
              }}
              className="min-h-[56px] rounded-md border-2 border-line px-3 py-2 text-sm font-semibold text-ink-900 hover:border-turquesa-aa hover:bg-turquesa-50"
            >
              {op.etiqueta}
            </button>
          ))}
        </div>
      </VistaConVolver>
    );
  }

  if (vista === 'tamano') {
    return (
      <VistaConVolver titulo="¿Qué tan grande es?" onVolver={() => setVista('espacio')}>
        <div className="flex flex-col gap-2">
          {OPCIONES_TAMANO.map((op) => (
            <button
              key={op.valor}
              type="button"
              onClick={() => {
                setTamano(op.valor);
                setVista('sintoma');
              }}
              className="min-h-[56px] rounded-md border-2 border-line px-3 py-2 text-left text-sm font-semibold text-ink-900 hover:border-turquesa-aa hover:bg-turquesa-50"
            >
              {op.etiqueta} <span className="font-normal text-ink-500">— {op.ayuda}</span>
            </button>
          ))}
        </div>
      </VistaConVolver>
    );
  }

  if (vista === 'sintoma') {
    return (
      <VistaConVolver titulo="¿Qué siente?" onVolver={() => setVista('tamano')}>
        <div className="flex flex-col gap-2">
          {OPCIONES_SINTOMA.map((op) => (
            <button
              key={op.valor}
              type="button"
              onClick={() => {
                setSintoma(op.valor);
                setVista('resultado');
              }}
              className="min-h-[56px] rounded-md border-2 border-line px-3 py-2 text-left text-sm font-semibold text-ink-900 hover:border-turquesa-aa hover:bg-turquesa-50"
            >
              {op.etiqueta}
            </button>
          ))}
        </div>
      </VistaConVolver>
    );
  }

  if (vista === 'resultado' && espacio && tamano && sintoma) {
    const recomendacion = recomendar(espacio, tamano, sintoma);
    const cantidadTotal = recomendacion.items.reduce((s, i) => s + i.cantidad, 0);
    const pack = recomendacion.sugerirPack && cantidadTotal >= 3 ? buscarPackPorSlug(recomendacion.sugerirPack) : undefined;
    const primero = PRODUCTOS.find((p) => p.sku === recomendacion.items[0]?.sku);

    return (
      <VistaConVolver titulo="Le recomiendo" onVolver={() => setVista('sintoma')}>
        <div className="mb-3 flex items-center gap-2 text-sm text-ink-700">
          <Image src="/nora/nora-ok.webp" alt="" width={32} height={32} className="rounded-pill" />
          <span>¡Aquí tiene!</span>
        </div>
        <ul className="space-y-1 text-sm text-ink-900">
          {recomendacion.items.map((i) => {
            const p = PRODUCTOS.find((pr) => pr.sku === i.sku);
            if (!p) return null;
            return (
              <li key={i.sku}>
                • {i.cantidad} × {p.nombreCorto}
              </li>
            );
          })}
        </ul>
        {pack && (
          <p className="mt-2 text-sm text-ink-700">
            Le conviene más el <strong>{pack.nombre}</strong> por S/ {pack.precio}.
          </p>
        )}
        {recomendacion.nota && <p className="mt-2 text-xs text-ink-500">{recomendacion.nota}</p>}
        <div className="mt-4">
          {pack ? (
            <BotonAgregar sku={pack.sku} nombre={pack.nombre} precio={pack.precio} imagen={pack.imagen} esPack className="w-full" />
          ) : primero ? (
            <BotonAgregar sku={primero.sku} nombre={primero.nombre} precio={primero.precio} imagen={primero.imagen} className="w-full" />
          ) : null}
        </div>
        <button type="button" onClick={cerrar} className="mt-3 text-sm text-ink-500 underline">
          Cerrar
        </button>
      </VistaConVolver>
    );
  }

  if (vista === 'como-uso') {
    const texto = 'Se usa así: uno, lo cuelga. Dos, absorbe la humedad del aire. Tres, lo cambia al mes.';
    return (
      <VistaConVolver titulo="¿Cómo lo uso?" onVolver={() => setVista('menu')}>
        <div className="grid grid-cols-3 gap-2">
          {['/pasos/paso-1.webp', '/pasos/paso-2.webp', '/pasos/paso-3.webp'].map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-sm bg-surface-alt">
              <Image src={src} alt={`Paso ${i + 1}`} fill sizes="100px" className="object-contain p-1" />
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-700">{texto}</p>
        <BotonEscuchar texto={texto} />
      </VistaConVolver>
    );
  }

  if (vista === 'envio') {
    return (
      <VistaConVolver titulo="¿Cuánto cuesta el envío?" onVolver={() => setVista('menu')}>
        <p className="text-sm text-ink-700">[PENDIENTE CONFIRMAR CON CLIENTE]</p>
        <a
          href={enlaceWhatsApp('Hola Nowet 👋 Quisiera saber el costo de envío a mi distrito.\n\nOrigen: página web (Nora)')}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex min-h-[56px] items-center justify-center rounded-md bg-wa-600 px-4 font-semibold text-white hover:bg-[#0f6f63]"
        >
          Preguntar por WhatsApp
        </a>
      </VistaConVolver>
    );
  }

  // vista === 'duracion'
  return (
    <VistaConVolver titulo="¿Cuánto dura?" onVolver={() => setVista('menu')}>
      <ul className="space-y-1 text-sm text-ink-700">
        <li>Perchas desechables 300 g: 30 días</li>
        <li>Perchas 500 g (desechable o recargable): 30 a 60 días</li>
        <li>Eco-BOX 135 g: 30 días</li>
        <li>Sílica gel: 3 meses</li>
        <li>Píldoras The Cure: 8 meses</li>
      </ul>
    </VistaConVolver>
  );
}

function OpcionMenu({ etiqueta, onClick }: { etiqueta: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[56px] items-center rounded-md border-2 border-line px-4 text-left font-semibold text-ink-900 hover:border-turquesa-aa hover:bg-turquesa-50"
    >
      {etiqueta}
    </button>
  );
}

function VistaConVolver({ titulo, onVolver, children }: { titulo: string; onVolver: () => void; children: React.ReactNode }) {
  return (
    <div>
      <h2 id="nora-titulo" className="text-lg font-bold text-ink-900">
        {titulo}
      </h2>
      <div className="mt-4">{children}</div>
      <button type="button" onClick={onVolver} className="mt-4 text-sm font-semibold text-turquesa-aa">
        ← Volver
      </button>
    </div>
  );
}
