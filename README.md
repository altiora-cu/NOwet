# Nowet — sitio de demo

Armador de pedidos por WhatsApp para Nowet Absorbente (Lima, Perú), construido a partir de:

- `nowet_paquete-direccion-creativa_v1` — auditoría, dirección de arte, arquitectura, tokens.
- `nowet_paquete-produccion_v2` — assets, copy final, lógica de calculadora/Nora, sistema de recompra.
- `nowet_correccion-marca_v3` — paleta corregida (turquesa/magenta, no azul marino), producto nuevo de 300 g.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Sin CMS, sin base de datos, sin
checkout: el catálogo vive en `src/data/productos.ts` y todo pedido se arma en el cliente y termina en
un solo mensaje de WhatsApp.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # confirmar NEXT_PUBLIC_WHATSAPP con el cliente
npm run dev
```

## Estructura

- `src/data/` — catálogo, packs, FAQ y tabla de recomendación (calculadora + Nora).
- `src/lib/` — construcción del mensaje de WhatsApp, analítica y el contexto de pedido (`localStorage`).
- `src/components/` — layout, producto, pedido, calculadora, Nora y UI base.
- `src/app/` — páginas del App Router.

## Pendientes del cliente antes de producción

Buscar `[PENDIENTE CONFIRMAR CON CLIENTE]` y `TODO:` en el código. En resumen:

1. Número de WhatsApp de ventas (hoy hay dos distintos en el sitio original).
2. Precio de los dos absorbentes de olores y del pack PK-4 (hoy incoherente).
3. Cobertura de envíos, costos, tiempos y métodos de pago.
4. Logo vectorial + manual de marca (Pantone/CMYK) — los HEX actuales están medidos de fotografía.
5. Testimonios reales (nombre, distrito, foto) — hoy hay 3 espacios reservados.
6. Fotos de los dos absorbentes de olores (closet y tachos) — hoy muestran un placeholder.
7. Razón social y RUC, para el libro de reclamaciones.

Mientras tanto, `robots.ts` bloquea la indexación (`noindex`) porque el sitio es una demo.

## Checklist de entrega

Ver la sección C.6 de `nowet_paquete-produccion_v2.md`. Verificado en este build: `npm run build`
sin errores ni warnings, cero errores de consola en las rutas principales, sin scroll horizontal en
375/390/768/1024/1440px, pedido de 3 productos enviable por WhatsApp en pocos toques, calculadora y
Nora funcionando, `Fraunces` usado una sola vez (la palabra "Nowet" del hero).
