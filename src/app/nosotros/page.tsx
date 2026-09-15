import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Quiénes somos, nuestra misión, visión y valores en Nowet Absorbente.',
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-ink-900">Nosotros</h1>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src="/fotos/hero-closet-lima.webp"
          alt="Interior de un dormitorio limeño con closet abierto y ropa colgada"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Quiénes somos</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          Somos una empresa con experiencia en productos absorbentes, diseñados y comercializados directamente por
          nosotros. Nuestro objetivo es ser un aliado en el día a día de las familias peruanas, ayudándolas a
          combatir la humedad y transformar sus espacios en los mejores lugares para crear recuerdos.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Misión</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          Ofrecer soluciones innovadoras y sostenibles mediante materiales absorbentes de alta calidad. Nuestro
          compromiso es mejorar la limpieza, la protección y el bienestar de nuestros clientes con productos
          confiables y eficientes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Visión</h2>
        <p className="mt-2 max-w-prose-a11y text-lg text-ink-700">
          Ser una empresa líder en el desarrollo de soluciones absorbentes, reconocida por su innovación, calidad
          excepcional y responsabilidad con el medio ambiente.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink-900">Valores</h2>
        <ul className="mt-2 space-y-2 text-lg text-ink-700">
          <li>
            <strong>Responsabilidad:</strong> productos biodegradables.
          </li>
          <li>
            <strong>Puntualidad:</strong> entregas en el tiempo pactado.
          </li>
          <li>
            <strong>Compromiso:</strong> mejora continua.
          </li>
        </ul>
      </section>

      <p className="mt-10 rounded-md bg-turquesa-50 p-4 text-base font-semibold text-turquesa-900">
        🇵🇪 Producto peruano, diseñado y fabricado en Perú.
      </p>
    </div>
  );
}
