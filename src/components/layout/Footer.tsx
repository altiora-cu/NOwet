import Link from 'next/link';
import { numeroWhatsApp } from '@/lib/whatsapp';

const COLUMNAS = [
  {
    titulo: 'Productos',
    enlaces: [
      { href: '/productos', etiqueta: 'Catálogo completo' },
      { href: '/packs', etiqueta: 'Packs con ahorro' },
      { href: '/calculadora', etiqueta: '¿Cuánto necesito?' },
    ],
  },
  {
    titulo: 'Nowet',
    enlaces: [
      { href: '/nosotros', etiqueta: 'Nosotros' },
      { href: '/empresas', etiqueta: 'Para empresas' },
      { href: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes' },
      { href: '/envios-y-pagos', etiqueta: 'Envíos y pagos' },
    ],
  },
  {
    titulo: 'Legal',
    enlaces: [
      { href: '/contacto', etiqueta: 'Contacto' },
      { href: '/contacto#libro-de-reclamaciones', etiqueta: 'Libro de reclamaciones' },
    ],
  },
];

export function Footer() {
  const numero = numeroWhatsApp();
  const numeroLegible = `+${numero.slice(0, 2)} ${numero.slice(2)}`;

  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-turquesa-900">
              NO<span className="text-magenta">WET</span>
            </span>
            <p className="mt-3 max-w-prose-a11y text-sm text-ink-700">
              Absorbentes de humedad hechos en Perú. Perchas, cajitas y saquitos que secan closets, cajones y
              ambientes en Lima.
            </p>
            <p className="mt-4 text-sm text-ink-500">
              WhatsApp: {numeroLegible}
              <br />
              <span className="text-ink-500">[PENDIENTE CONFIRMAR CON CLIENTE]</span>
            </p>
          </div>

          {COLUMNAS.map((columna) => (
            <div key={columna.titulo}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink-500">{columna.titulo}</h3>
              <ul className="mt-3 space-y-2">
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.href}>
                    <Link href={enlace.href} className="text-base text-ink-700 hover:text-turquesa-900">
                      {enlace.etiqueta}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nowet Absorbente. Producto peruano. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/nowet_absorbente" target="_blank" rel="noreferrer" className="hover:text-turquesa-900">
              Instagram
            </a>
            <a href="https://facebook.com/nowetperu" target="_blank" rel="noreferrer" className="hover:text-turquesa-900">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
