'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function PalabraNowet() {
  const [activo, setActivo] = useState(false);
  const prefiereMenosMovimiento = useReducedMotion();

  return (
    <motion.span
      className="relative inline-block cursor-pointer font-display italic"
      tabIndex={0}
      onHoverStart={() => setActivo(true)}
      onHoverEnd={() => setActivo(false)}
      onFocus={() => setActivo(true)}
      onBlur={() => setActivo(false)}
      onTap={() => setActivo(true)}
      animate={{
        color: activo ? '#0494F7' : '#005F67',
        scale: prefiereMenosMovimiento ? 1 : activo ? 1.06 : 1,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      Nowet
      {!prefiereMenosMovimiento && (
        <motion.span
          aria-hidden
          className="absolute -top-3 left-1/2 text-base not-italic"
          initial={false}
          animate={activo ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ translateX: '-50%' }}
        >
          💧
        </motion.span>
      )}
    </motion.span>
  );
}
