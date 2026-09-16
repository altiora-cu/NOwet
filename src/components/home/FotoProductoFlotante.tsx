'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export function FotoProductoFlotante() {
  const prefiereMenosMovimiento = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-4 left-4 z-10 w-32 rounded-md bg-surface p-2 shadow-md sm:w-40 sm:p-3"
      initial={{ opacity: 0, y: 16 }}
      animate={
        prefiereMenosMovimiento
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -8, 0] }
      }
      transition={
        prefiereMenosMovimiento
          ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          : { opacity: { duration: 0.6 }, y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 } }
      }
    >
      <div className="relative aspect-[6/5] w-full">
        <Image
          src="/productos/percha-desechable-500g-oficial.webp"
          alt="Percha antihumedad Nowet de 500 gramos en uso, con el líquido absorbido recogido en la base"
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
      <p className="mt-1 text-center text-[11px] font-semibold text-ink-700 sm:text-xs">Producto real Nowet</p>
    </motion.div>
  );
}
