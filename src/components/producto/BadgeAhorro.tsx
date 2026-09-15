export function BadgeAhorro({ ahorro }: { ahorro: number }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-magenta px-3 py-1 text-sm font-bold text-white">
      Ahorra S/{ahorro}
    </span>
  );
}

export function BadgeProducto({ tipo }: { tipo: 'Nuevo' | 'Más vendido' }) {
  const clases = tipo === 'Nuevo' ? 'bg-magenta text-white' : 'bg-turquesa-900 text-white';
  return (
    <span className={`absolute left-3 top-3 z-10 rounded-pill px-3 py-1 text-xs font-bold uppercase tracking-wide ${clases}`}>
      {tipo}
    </span>
  );
}
