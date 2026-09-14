'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  readConsent,
  OPEN_PREFERENCES_EVENT,
  CONSENT_STORAGE_KEY,
  type ConsentChoices,
} from './use-cookie-consent';

/**
 * Carrega as tags de marketing SOMENTE depois do consentimento.
 *
 * Como usar: defina os IDs em variáveis de ambiente. Sem elas, nada carrega —
 * é seguro manter este componente montado antes de existir campanha.
 *
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID=000000000000000
 *
 * Os IDs são públicos por natureza (ficam visíveis no HTML). Ainda assim ficam
 * em variáveis de ambiente para não misturar configuração com código.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Lê o consentimento e reage a mudanças, inclusive em outra aba. */
function useConsentChoices(): ConsentChoices | null {
  const [choices, setChoices] = useState<ConsentChoices | null>(null);

  useEffect(() => {
    const sync = () => setChoices(readConsent()?.choices ?? null);
    sync();

    // A decisão pode mudar nesta aba (banner reaberto) ou em outra.
    window.addEventListener(OPEN_PREFERENCES_EVENT, sync);
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_STORAGE_KEY) sync();
    };
    window.addEventListener('storage', onStorage);

    // O banner grava de forma síncrona; um tick cobre o repasse na mesma aba.
    const interval = window.setInterval(sync, 1000);

    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, sync);
      window.removeEventListener('storage', onStorage);
      window.clearInterval(interval);
    };
  }, []);

  return choices;
}

export default function MarketingTags() {
  const choices = useConsentChoices();

  const canLoadAnalytics = choices?.analiticos === true && Boolean(GA_ID);
  const canLoadAds = choices?.publicidade === true && Boolean(META_PIXEL_ID);

  return (
    <>
      {canLoadAnalytics && (
        <>
          <Script
            id="ga-lib"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
              });
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: ${choices?.publicidade ? "'granted'" : "'denied'"},
                ad_user_data: ${choices?.publicidade ? "'granted'" : "'denied'"},
                ad_personalization: ${choices?.publicidade ? "'granted'" : "'denied'"}
              });
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {canLoadAds && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
