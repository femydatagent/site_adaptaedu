import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold text-amber-600 mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('text')}</p>
      <Link href="/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium">
        {t('back')}
      </Link>
    </main>
  );
}
