'use client';

import NextError from 'next/error';

/** 404 fora de qualquer idioma (caminhos que o proxy não reescreve). */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
