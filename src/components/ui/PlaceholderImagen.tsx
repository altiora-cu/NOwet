// Placeholder sólido para assets que el cliente todavía no ha entregado.
// Nunca usar stock genérico como sustituto — ver instrucciones del paquete de dirección creativa §10.
export function PlaceholderImagen({ nombreArchivo, className = '' }: { nombreArchivo: string; className?: string }) {
  return (
    <div
      className={`flex aspect-[6/5] w-full items-center justify-center rounded-md bg-turquesa-50 border border-dashed border-turquesa-100 p-4 text-center ${className}`}
      role="img"
      aria-label={`Imagen pendiente: ${nombreArchivo}`}
    >
      <span className="text-xs text-ink-500">
        Foto pendiente
        <br />
        <code className="text-[0.8em]">{nombreArchivo}</code>
      </span>
    </div>
  );
}
