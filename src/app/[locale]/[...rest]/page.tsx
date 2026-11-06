import { notFound } from 'next/navigation';

/** Qualquer caminho desconhecido dentro de um idioma cai no not-found localizado. */
export default function CatchAllPage() {
  notFound();
}
