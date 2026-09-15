import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variante = 'primario' | 'whatsapp' | 'secundario' | 'texto';

const CLASES_BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold text-base transition-all duration-hover ease-out min-h-[56px] px-6 text-center select-none active:scale-[0.97]';

const CLASES_VARIANTE: Record<Variante, string> = {
  primario: 'bg-turquesa-aa text-white hover:bg-turquesa-900 shadow-sm hover:shadow-md',
  whatsapp: 'bg-wa-600 text-white hover:bg-[#0f6f63] shadow-sm hover:shadow-md',
  secundario: 'border-2 border-turquesa-aa text-turquesa-aa bg-transparent hover:bg-turquesa-50',
  texto: 'text-turquesa-aa underline underline-offset-4 min-h-0 px-0 hover:text-turquesa-900',
};

interface BotonPropsComunes {
  variante?: Variante;
  className?: string;
  children: ReactNode;
}

type BotonProps = BotonPropsComunes &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type EnlaceBotonProps = BotonPropsComunes &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Boton({ variante = 'primario', className = '', children, href, ...props }: BotonProps | EnlaceBotonProps) {
  const clases = `${CLASES_BASE} ${CLASES_VARIANTE[variante]} ${className}`;
  if (href) {
    return (
      <a href={href} className={clases} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={clases} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
