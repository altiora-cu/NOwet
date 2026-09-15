'use client';

import { useState } from 'react';

export interface AcordeonItem {
  pregunta: string;
  respuesta: string;
}

export function Acordeon({ items }: { items: AcordeonItem[] }) {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const estaAbierto = abierto === i;
        return (
          <div key={item.pregunta}>
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(estaAbierto ? null : i)}
                aria-expanded={estaAbierto}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-ink-900 min-h-[56px]"
              >
                <span>{item.pregunta}</span>
                <span
                  aria-hidden
                  className={`shrink-0 text-2xl text-turquesa-aa transition-transform duration-hover ease-out ${
                    estaAbierto ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className="grid overflow-hidden transition-[grid-template-rows] duration-hover ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: estaAbierto ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose-a11y pb-5 text-ink-700">{item.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
