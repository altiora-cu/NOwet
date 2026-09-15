import type { Metadata } from 'next';
import { FAQ } from '@/data/faq';
import { Acordeon } from '@/components/ui/Acordeon';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: 'Respuestas sobre los absorbentes de humedad Nowet: duración, funcionamiento, envíos y pagos.',
};

export default function PreguntasFrecuentesPage() {
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <h1 className="text-3xl font-extrabold text-ink-900">Preguntas frecuentes</h1>
      <div className="mt-8">
        <Acordeon items={FAQ.map((f) => ({ pregunta: f.pregunta, respuesta: f.respuesta }))} />
      </div>
    </div>
  );
}
