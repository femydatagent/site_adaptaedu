'use client';

import { openCookiePreferences } from './use-cookie-consent';

/** Reabre o banner para o usuário rever a decisão (LGPD, art. 8º, § 5º). */
export default function ManagePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
    >
      Gerenciar minhas preferências de cookies
    </button>
  );
}
