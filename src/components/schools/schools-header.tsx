import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import DemoButton from '../actions/demo-button';
import LanguageSwitcher from '../i18n/language-switcher';
import { APP_SIGNUP_URL } from '@/lib/facts';

export default function SchoolsHeader() {
  const t = useTranslations('schoolsPage.nav');

  return (
    <nav className="fixed below-promo-bar left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors" aria-label={t('back')}>
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">{t('back')}</span>
            </Link>
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-2 min-w-0">
              <img src="/logo-mark.svg" alt={t('brand')} width={36} height={36} className="w-9 h-9 flex-shrink-0" />
              <span aria-hidden="true" className="hidden min-[440px]:inline text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent truncate">
                {t('brand')}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSwitcher tone="teal" />
            <DemoButton className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50 rounded-lg transition-colors">
              {t('demo')}
            </DemoButton>
            <a href={APP_SIGNUP_URL} className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-lg shadow-md shadow-teal-200 transition-all whitespace-nowrap">
              {t('startFree')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
