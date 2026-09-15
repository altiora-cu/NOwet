import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BarraPedidoMovil } from '@/components/layout/BarraPedidoMovil';
import { NoraCargador } from '@/components/nora/NoraCargador';
import { ResumenPedido } from '@/components/pedido/ResumenPedido';
import { PedidoProvider } from '@/lib/pedido-context';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const SITE_URL = 'https://nowet-demo.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Absorbentes de humedad en Lima | Nowet — Perchas antihumedad y sílica gel',
    template: '%s | Nowet',
  },
  description:
    'Perchas, cajitas y saquitos antihumedad hechos en Perú. Combaten el moho y el olor a guardado en closets, cajones y ambientes de Lima. Pedido por WhatsApp, entrega en Lima.',
  robots: { index: false, follow: false }, // Demo — quitar al pasar a producción
  openGraph: {
    title: 'Nowet — Absorbentes de humedad en Lima',
    description: 'Perchas, cajitas y saquitos que secan closets, cajones y ambientes. Entrega en Lima.',
    url: SITE_URL,
    siteName: 'Nowet',
    locale: 'es_PE',
    type: 'website',
  },
};

const schemaOrganizacion = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nowet Absorbente',
  url: SITE_URL,
  logo: `${SITE_URL}/nora/nora-saludo.webp`,
  sameAs: ['https://instagram.com/nowet_absorbente', 'https://facebook.com/nowetperu'],
  areaServed: {
    '@type': 'City',
    name: 'Lima',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganizacion) }}
        />
        <PedidoProvider>
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-turquesa-900 focus:px-4 focus:py-2 focus:text-white"
          >
            Saltar al contenido
          </a>
          <Header />
          <main id="contenido" className="flex-1 pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
          <BarraPedidoMovil />
          <ResumenPedido />
          <NoraCargador />
        </PedidoProvider>
      </body>
    </html>
  );
}
