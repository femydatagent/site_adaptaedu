'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Building2, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '../i18n/language-switcher';
import { APP_LOGIN_URL, APP_SIGNUP_URL } from '@/lib/facts';

const SCROLLED_THRESHOLD_PX = 10;
const SCROLL_TOP_THRESHOLD_PX = 400;

const NAV_ANCHORS = [
  { href: '#whatsapp', key: 'whatsapp' },
  { href: '#pipeline', key: 'pipeline' },
  { href: '#perfis', key: 'perfis' },
  { href: '#conteudo', key: 'conteudo' },
  { href: '#escolas', key: 'escolas' },
  { href: '#legal', key: 'legal' },
  { href: '#aee', key: 'aee' },
  { href: '#quem-somos', key: 'quemSomos' },
  { href: '#planos', key: 'planos' },
] as const;

/** Cabeçalho fixo da home: navegação por âncoras, idioma e CTAs. */
export default function SiteHeader() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > SCROLLED_THRESHOLD_PX);
      setShowScrollTop(window.scrollY > SCROLL_TOP_THRESHOLD_PX);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // O blog existe só em português; fora do pt, o link avisa isso.
  const isPt = locale === 'pt';
  const navLinks = [
    ...NAV_ANCHORS.map(link => ({ href: link.href, label: t(`nav.${link.key}`), hrefLang: undefined, title: undefined })),
    { href: '/blog', label: t('nav.blog'), hrefLang: isPt ? undefined : 'pt-BR', title: isPt ? undefined : `${t('nav.blog')} (${t('ptOnly')})` },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <a href="#conteudo-principal" className="sr-only skip-link">
        {t('skipLink')}
      </a>

      <header className={`fixed below-promo-bar left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group flex-shrink-0" aria-label={t('homeAria')}>
            <img src="/logo-mark.svg" alt="" aria-hidden="true" width={36} height={36} className="w-9 h-9" />
            <span className="text-xl font-bold tracking-tight">
              Adapta<span className="text-gradient-warm">EDU</span>
            </span>
          </a>
          <div className="hidden xl:flex items-center gap-4 2xl:gap-5 mx-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} hrefLang={link.hrefLang} title={link.title} className="whitespace-nowrap text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link
              href="/escolas"
              aria-label={t('forSchoolsAria')}
              className="inline-flex items-center justify-center text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 border border-teal-400 text-teal-700 hover:bg-teal-50"
            >
              <Building2 className="w-3.5 h-3.5" />
              {t('forSchools')}
            </Link>
            <a href={APP_LOGIN_URL} aria-label={t('loginAria')} className="inline-flex items-center justify-center text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 hover:bg-accent hover:text-accent-foreground">
              {t('login')}
            </a>
            <a href={APP_SIGNUP_URL} aria-label={t('startFreeAria')} className="inline-flex items-center justify-center text-sm font-medium transition-all shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0">
              {t('startFree')} <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          {/* Mobile: idioma sempre à vista + hambúrguer */}
          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent transition-colors"
              aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-lg border-b border-border px-6 pb-4">
            <div className="flex flex-col gap-3 pt-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  hrefLang={link.hrefLang}
                  title={link.title}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Link
                  href="/escolas"
                  onClick={closeMenu}
                  aria-label={t('forSchoolsAria')}
                  className="inline-flex items-center justify-center text-sm font-medium transition-all h-9 rounded-md gap-1.5 px-3 border border-teal-400 text-teal-700 hover:bg-teal-50"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  {t('forSchools')}
                </Link>
                <a href={APP_LOGIN_URL} aria-label={t('loginAria')} className="inline-flex items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 hover:bg-accent hover:text-accent-foreground">
                  {t('login')}
                </a>
                <a href={APP_SIGNUP_URL} aria-label={t('startFreeAria')} className="inline-flex items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  {t('startFree')} <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('scrollTop')}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all warm-glow"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
