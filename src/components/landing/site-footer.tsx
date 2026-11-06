import { useLocale, useTranslations } from 'next-intl';
import SupportLink from '../actions/support-link';

const LINK_CLASS = 'hover:text-amber-400 transition-colors';

type FooterLink = { href: string; label: string; ptOnly?: boolean };

function FooterColumn({ title, links, isPt }: { title: string; links: FooterLink[]; isPt: boolean }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href} hrefLang={link.ptOnly && !isPt ? 'pt-BR' : undefined} className={LINK_CLASS}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Rodapé da home. Páginas legais e blog existem só em português. */
export default function SiteFooter() {
  const t = useTranslations('footer');
  const isPt = useLocale() === 'pt';

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-mark.svg" alt="" aria-hidden="true" width={32} height={32} className="w-8 h-8 bg-white rounded-lg p-0.5" />
              <span className="text-lg font-bold text-white">
                Adapta<span className="text-gradient-warm">EDU</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">{t('description')}</p>
          </div>
          <FooterColumn
            title={t('product')}
            isPt={isPt}
            links={[
              { href: '#perfis', label: t('productLinks.perfis') },
              { href: '#pipeline', label: t('productLinks.pipeline') },
              { href: '#conteudo', label: t('productLinks.conteudo') },
              { href: '#', label: t('productLinks.integracoes') },
              { href: '#', label: t('productLinks.api') },
            ]}
          />
          <FooterColumn
            title={t('schools')}
            isPt={isPt}
            links={[
              { href: '#', label: t('schoolLinks.particulares') },
              { href: '#', label: t('schoolLinks.publicas') },
              { href: '#', label: t('schoolLinks.redes') },
              { href: '#', label: t('schoolLinks.pacotes') },
              { href: '#', label: t('schoolLinks.onboarding') },
            ]}
          />
          <div>
            <h3 className="font-semibold text-white mb-3">{t('resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={LINK_CLASS}>{t('resourceLinks.docs')}</a></li>
              <li><a href="#" className={LINK_CLASS}>{t('resourceLinks.tutoriais')}</a></li>
              <li><a href="/blog" hrefLang={isPt ? undefined : 'pt-BR'} className={`${LINK_CLASS} font-medium text-amber-300`}>{t('resourceLinks.blog')}</a></li>
              <li><a href="#" className={LINK_CLASS}>{t('resourceLinks.webinars')}</a></li>
              <li><SupportLink className={LINK_CLASS}>{t('resourceLinks.suporte')}</SupportLink></li>
            </ul>
          </div>
          <FooterColumn
            title={t('legal')}
            isPt={isPt}
            links={[
              { href: '/privacidade', label: t('legalLinks.privacidade'), ptOnly: true },
              { href: '/termos', label: t('legalLinks.termos'), ptOnly: true },
              { href: '/lgpd', label: t('legalLinks.lgpd'), ptOnly: true },
              { href: '#quem-somos', label: t('legalLinks.quemSomos') },
              { href: '/acessibilidade', label: t('legalLinks.acessibilidade'), ptOnly: true },
              { href: '/cookies', label: t('legalLinks.cookies'), ptOnly: true },
            ]}
          />
        </div>
        {t.has('ptOnlyNote') && <p className="text-xs text-slate-500 mb-6">{t('ptOnlyNote')}</p>}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>{t('copyright')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['LinkedIn', 'Instagram', 'YouTube'].map(network => (
              <a key={network} href="#" target="_blank" rel="noopener noreferrer" aria-label={t('socialAria', { network })} className={LINK_CLASS}>
                {network}
              </a>
            ))}
            <SupportLink className={LINK_CLASS}>{t('contact')}</SupportLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
