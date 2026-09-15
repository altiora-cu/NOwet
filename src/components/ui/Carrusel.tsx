import { ReactNode } from 'react';

export function Carrusel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 ${className}`}
    >
      {children}
    </div>
  );
}

export function CarruselItem({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`snap-start shrink-0 ${className}`}>
      {children}
    </div>
  );
}
