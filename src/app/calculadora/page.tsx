import type { Metadata } from 'next';
import { Calculadora } from '@/components/calculadora/Calculadora';

export const metadata: Metadata = {
  title: '¿Cuánto necesito?',
  description: 'Responda tres preguntas y le decimos exactamente qué producto Nowet le conviene.',
};

export default function CalculadoraPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-center text-3xl font-extrabold text-ink-900">¿Cuántos necesita para su casa?</h1>
      <p className="mt-2 text-center text-lg text-ink-700">Respóndanos tres preguntas y le decimos exactamente qué llevar.</p>
      <div className="mt-8">
        <Calculadora />
      </div>
    </div>
  );
}
