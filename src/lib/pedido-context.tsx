'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { trackEvento } from './analytics';

export interface PedidoItem {
  sku: string;
  nombre: string;
  precio: number | null;
  cantidad: number;
  imagen: string;
  esPack: boolean;
}

interface PedidoGuardado {
  items: PedidoItem[];
  distrito: string;
  avisos: boolean;
  guardadoEn: number;
}

const CLAVE = 'nowet_pedido_v1';
const EXPIRA_MS = 7 * 24 * 60 * 60 * 1000;

interface PedidoContextValor {
  items: PedidoItem[];
  distrito: string;
  avisos: boolean;
  totalItems: number;
  totalSoles: number;
  hayPrecio: boolean;
  setDistrito: (d: string) => void;
  setAvisos: (a: boolean) => void;
  agregarItem: (item: Omit<PedidoItem, 'cantidad'>, cantidad?: number) => void;
  quitarItem: (sku: string) => void;
  actualizarCantidad: (sku: string, cantidad: number) => void;
  vaciarPedido: () => void;
  abrirResumen: boolean;
  setAbrirResumen: (v: boolean) => void;
}

const PedidoContext = createContext<PedidoContextValor | null>(null);

function leerPedidoGuardado(): PedidoGuardado | null {
  try {
    const crudo = window.localStorage.getItem(CLAVE);
    if (!crudo) return null;
    const datos = JSON.parse(crudo) as PedidoGuardado;
    if (Date.now() - datos.guardadoEn > EXPIRA_MS) {
      window.localStorage.removeItem(CLAVE);
      return null;
    }
    return datos;
  } catch {
    return null;
  }
}

export function PedidoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<PedidoItem[]>([]);
  const [distrito, setDistrito] = useState('');
  const [avisos, setAvisos] = useState(false);
  const [abrirResumen, setAbrirResumen] = useState(false);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const guardado = leerPedidoGuardado();
    if (guardado) {
      setItems(guardado.items);
      setDistrito(guardado.distrito);
      setAvisos(guardado.avisos);
    }
    setCargado(true);
  }, []);

  useEffect(() => {
    if (!cargado) return;
    try {
      const datos: PedidoGuardado = { items, distrito, avisos, guardadoEn: Date.now() };
      window.localStorage.setItem(CLAVE, JSON.stringify(datos));
    } catch {
      // localStorage puede fallar en modo privado; el pedido sigue funcionando en memoria.
    }
  }, [items, distrito, avisos, cargado]);

  const agregarItem = useCallback<PedidoContextValor['agregarItem']>((item, cantidad = 1) => {
    setItems((prev) => {
      const existente = prev.find((i) => i.sku === item.sku);
      if (existente) {
        return prev.map((i) => (i.sku === item.sku ? { ...i, cantidad: i.cantidad + cantidad } : i));
      }
      return [...prev, { ...item, cantidad }];
    });
    trackEvento(item.esPack ? 'pack_agregado' : 'producto_agregado', {
      sku: item.sku,
      nombre: item.nombre,
      precio: item.precio ?? undefined,
      cantidad,
    });
  }, []);

  const quitarItem = useCallback((sku: string) => {
    setItems((prev) => prev.filter((i) => i.sku !== sku));
  }, []);

  const actualizarCantidad = useCallback((sku: string, cantidad: number) => {
    setItems((prev) => {
      if (cantidad <= 0) return prev.filter((i) => i.sku !== sku);
      return prev.map((i) => (i.sku === sku ? { ...i, cantidad } : i));
    });
  }, []);

  const vaciarPedido = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(() => items.reduce((s, i) => s + i.cantidad, 0), [items]);
  const totalSoles = useMemo(() => items.reduce((s, i) => s + i.cantidad * (i.precio ?? 0), 0), [items]);
  const hayPrecio = useMemo(() => items.some((i) => i.precio != null), [items]);

  const valor: PedidoContextValor = {
    items,
    distrito,
    avisos,
    totalItems,
    totalSoles,
    hayPrecio,
    setDistrito,
    setAvisos,
    agregarItem,
    quitarItem,
    actualizarCantidad,
    vaciarPedido,
    abrirResumen,
    setAbrirResumen,
  };

  return <PedidoContext.Provider value={valor}>{children}</PedidoContext.Provider>;
}

export function usePedido(): PedidoContextValor {
  const ctx = useContext(PedidoContext);
  if (!ctx) throw new Error('usePedido debe usarse dentro de <PedidoProvider>');
  return ctx;
}
