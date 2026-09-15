import { Hero } from '@/components/home/Hero';
import { BarraConfianza } from '@/components/home/BarraConfianza';
import { Calculadora } from '@/components/calculadora/Calculadora';
import { BloqueCaja300g } from '@/components/home/BloqueCaja300g';
import { ProductosDestacados } from '@/components/home/ProductosDestacados';
import { PacksSeccion } from '@/components/home/PacksSeccion';
import { ComoFunciona } from '@/components/home/ComoFunciona';
import { ProblemaLima } from '@/components/home/ProblemaLima';
import { Testimonios } from '@/components/home/Testimonios';
import { FaqSeccion } from '@/components/home/FaqSeccion';
import { CtaFinal } from '@/components/home/CtaFinal';
import { Reveal } from '@/components/ui/Reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <BarraConfianza />

      <section className="border-b border-line py-14" id="calculadora">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-extrabold text-ink-900">¿Cuántos necesita para su casa?</h2>
            <p className="mt-2 text-lg text-ink-700">Respóndanos tres preguntas y le decimos exactamente qué llevar.</p>
          </Reveal>
          <div className="mt-8">
            <Calculadora />
          </div>
        </div>
      </section>

      <BloqueCaja300g />
      <ProductosDestacados />
      <PacksSeccion />
      <ComoFunciona />
      <ProblemaLima />
      <Testimonios />
      <FaqSeccion />
      <CtaFinal />
    </>
  );
}
