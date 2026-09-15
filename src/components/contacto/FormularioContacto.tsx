'use client';

import { FormEvent, useState } from 'react';
import { enlaceWhatsApp } from '@/lib/whatsapp';

interface Errores {
  nombre?: string;
  mensaje?: string;
}

export function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState<Errores>({});

  function alEnviar(e: FormEvent) {
    e.preventDefault();
    const nuevosErrores: Errores = {};
    if (!nombre.trim()) nuevosErrores.nombre = 'Escriba su nombre.';
    if (!mensaje.trim()) nuevosErrores.mensaje = 'Escriba su consulta.';
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const texto = [
      `Hola Nowet 👋 Soy ${nombre}.`,
      '',
      mensaje,
      '',
      telefono ? `Mi teléfono: ${telefono}` : '',
      'Origen: formulario de contacto web',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(enlaceWhatsApp(texto), '_blank', 'noreferrer');
  }

  return (
    <form onSubmit={alEnviar} noValidate className="space-y-5">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-base font-semibold text-ink-900">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          className="w-full rounded-sm border border-line px-4 py-3 text-base"
        />
        {errores.nombre && (
          <p id="error-nombre" className="mt-1 text-sm font-semibold text-magenta-900">
            {errores.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1 block text-base font-semibold text-ink-900">
          Teléfono (opcional)
        </label>
        <input
          id="telefono"
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="w-full rounded-sm border border-line px-4 py-3 text-base"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1 block text-base font-semibold text-ink-900">
          Su consulta
        </label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={4}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          className="w-full rounded-sm border border-line px-4 py-3 text-base"
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="mt-1 text-sm font-semibold text-magenta-900">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-wa-600 px-6 text-base font-semibold text-white hover:bg-[#0f6f63]"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
