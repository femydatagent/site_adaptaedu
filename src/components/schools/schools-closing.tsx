import { useLocale, useTranslations } from 'next-intl';
import { BarChart3, Lock, Shield, Zap } from 'lucide-react';
import FadeIn from '../fade-in';
import DemoButton from '../actions/demo-button';
import { highlightTag } from '../i18n/rich';
import { Link } from '@/i18n/navigation';
import { APP_SIGNUP_URL } from '@/lib/facts';

const BENEFITS = [
  { id: 'tempo', icon: Zap },
  { id: 'legal', icon: Shield },
  { id: 'dados', icon: Lock },
  { id: 'metricas', icon: BarChart3 },
] as const;

export function Benefits() {
  const t = useTranslations('schoolsPage.benefits');
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.rich('title', { hl: highlightTag('text-amber-600') })}</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <FadeIn key={benefit.id} delay={i * 0.1}>
              <div className="flex gap-5 p-6 bg-white rounded-xl border border-amber-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`items.${benefit.id}.title`)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(`items.${benefit.id}.desc`)}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchoolsCta() {
  const t = useTranslations('schoolsPage.cta');
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-emerald-500 to-amber-500 rounded-3xl p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('title')}</h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">{t('subtitle')}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <DemoButton className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-teal-600 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {t('demo')}
                </DemoButton>
                <a href={APP_SIGNUP_URL} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 rounded-xl border border-white/30 transition-all">
                  {t('start')}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function SchoolsFooter() {
  const t = useTranslations('schoolsPage');
  const isPt = useLocale() === 'pt';
  const ptLang = isPt ? undefined : 'pt-BR';
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo-mark.svg" alt="" aria-hidden="true" width={32} height={32} className="w-8 h-8 bg-white rounded-lg p-0.5" />
            <span className="text-lg font-bold text-white">{t('nav.brand')}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">{t('footer.home')}</Link>
            <a href="/privacidade" hrefLang={ptLang} className="hover:text-amber-400 transition-colors">{t('footer.privacy')}</a>
            <a href="/termos" hrefLang={ptLang} className="hover:text-amber-400 transition-colors">{t('footer.terms')}</a>
            <a href="/lgpd" hrefLang={ptLang} className="hover:text-amber-400 transition-colors">{t('footer.lgpd')}</a>
          </div>
          <p className="text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
