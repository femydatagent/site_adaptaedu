import { ImageResponse } from 'next/og';
import { routing } from '@/i18n/routing';
import { staticTranslator } from '@/lib/static-messages';
import { OG_IMAGE_SIZE } from '@/lib/seo';

/**
 * Imagem de compartilhamento (Open Graph/Twitter) por idioma: /og/pt.png,
 * /og/en.png, /og/es.png. Fica fora de [locale] e com extensão no caminho para
 * não passar pelo proxy de idioma — a URL é estável, sem redirecionamento,
 * o que importa para as prévias de link do WhatsApp.
 */

export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ image: `${locale}.png` }));
}

type OgContext = { params: Promise<{ image: string }> };

export async function GET(_request: Request, { params }: OgContext) {
  const { image } = await params;
  const locale = image.replace(/\.png$/, '');
  if (!(routing.locales as readonly string[]).includes(locale)) {
    return new Response('Not found', { status: 404 });
  }
  const tAll = staticTranslator(locale);
  const t = (key: 'headline' | 'headlineHighlight' | 'subtitle' | `stats.${'schools' | 'profiles' | 'lessTime' | 'rating'}`) =>
    tAll(`meta.ogImage.${key}`);
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #fffbf5 0%, #fff7ed 50%, #fef3c7 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: 200,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(249, 115, 22, 0.06)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #f59e0b, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
            }}
          >
            ♿
          </div>
          <span style={{ fontSize: 32, fontWeight: 800, color: '#1c1917' }}>
            Adapta<span style={{ color: '#f97316' }}>EDU</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 64,
            fontWeight: 900,
            color: '#1c1917',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {/* O Satori não suporta texto com gradiente recortado: o destaque usa cor sólida. */}
          <span>{t('headline')}</span>
          <span style={{ color: '#f97316' }}>{t('headlineHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 26,
            color: '#78716c',
            margin: 0,
            marginBottom: 48,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          {t('subtitle')}
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { value: '500+', label: t('stats.schools') },
            { value: '9', label: t('stats.profiles') },
            { value: '80%', label: t('stats.lessTime') },
            { value: '4.9/5', label: t('stats.rating') },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: '#f97316' }}>{stat.value}</span>
              <span style={{ fontSize: 16, color: '#78716c' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 80,
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 8,
            padding: '8px 16px',
            fontSize: 18,
            color: '#92400e',
            fontWeight: 600,
          }}
        >
          adaptaedu.com
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
