'use client';

import { Boton } from '@/components/ui/Boton';
import { enlaceWhatsApp } from '@/lib/whatsapp';

interface BotonWhatsAppProps {
  mensaje: string;
  children: React.ReactNode;
  className?: string;
  onClickExtra?: () => void;
}

export function BotonWhatsApp({ mensaje, children, className, onClickExtra }: BotonWhatsAppProps) {
  return (
    <Boton
      variante="whatsapp"
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => {
        onClickExtra?.();
      }}
    >
      <WhatsAppIcono />
      {children}
    </Boton>
  );
}

export function WhatsAppIcono() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.892.526 3.66 1.437 5.168L2 22l4.963-1.397A9.953 9.953 0 0 0 12.001 22c5.523 0 10-4.478 10-10s-4.477-10-10-10zm0 18.2a8.16 8.16 0 0 1-4.168-1.14l-.299-.177-2.945.829.79-2.868-.194-.295A8.176 8.176 0 0 1 3.8 12c0-4.529 3.671-8.2 8.2-8.2 4.53 0 8.2 3.671 8.2 8.2 0 4.529-3.67 8.2-8.199 8.2z" />
    </svg>
  );
}
