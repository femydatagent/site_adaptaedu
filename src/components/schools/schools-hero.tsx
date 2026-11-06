import { useFormatter, useTranslations } from 'next-intl';
import { ArrowRight, Building2, CheckCircle2, Eye, School, Sparkles } from 'lucide-react';
import FadeIn from '../fade-in';
import DemoButton from '../actions/demo-button';
import FloatingBadge from './floating-badge';
import { highlightTag } from '../i18n/rich';
import { DASHBOARD_STATS, type RecentAdaptation } from './mock-data';

const HERO_RECENT_COUNT = 3;

function DashboardPreview() {
  const t = useTranslations('schoolsPage');
  const format = useFormatter();
  const recent = (t.raw('dashboard.recentItems') as RecentAdaptation[]).slice(0, HERO_RECENT_COUNT);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl shadow-teal-200/40 border border-teal-100 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <School className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t('dashboard.school')}</p>
                <p className="text-teal-200 text-xs">{t('dashboard.adminPanel')}</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-emerald-400/20 text-emerald-300 text-xs rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              {t('dashboard.online')}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          {DASHBOARD_STATS.map(stat => (
            <div key={stat.id} className={`${stat.bg} rounded-xl p-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color} mb-1`} />
              <p className={`text-xl font-bold ${stat.color}`}>{typeof stat.value === 'number' ? format.number(stat.value) : stat.value}</p>
              <p className="text-xs text-slate-500">{t(`dashboard.stats.${stat.id}`)}</p>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4">
          <p className="text-xs font-semibold text-slate-500 mb-2">{t('dashboard.recent')}</p>
          <div className="space-y-2">
            {recent.map(a => (
              <div key={`${a.subject}-${a.grade}`} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${a.inProgress ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                  <span className="text-xs text-slate-700">{t(`subjects.${a.subject}`)} — {a.grade}</span>
                </div>
                <span className="text-xs text-slate-400">{a.profile}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingBadge offset={-8} duration={3} className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-amber-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <div>
            <p className="text-xs font-bold text-slate-900">+{format.number(855)}</p>
            <p className="text-xs text-slate-500">{t('dashboard.badgeAdaptations')}</p>
          </div>
        </div>
      </FloatingBadge>
      <FloatingBadge offset={8} duration={3.5} className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-emerald-100">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <div>
            <p className="text-xs font-bold text-slate-900">9/9</p>
            <p className="text-xs text-slate-500">{t('dashboard.badgeProfiles')}</p>
          </div>
        </div>
      </FloatingBadge>
    </div>
  );
}

export default function SchoolsHero() {
  const t = useTranslations('schoolsPage.hero');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-amber-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-1/3 w-64 h-64 bg-emerald-200/20 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                {t('badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {t.rich('title', { hl: highlightTag('bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent') })}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DemoButton className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow-lg shadow-teal-200 transition-all hover:shadow-xl hover:shadow-teal-300 flex items-center justify-center gap-2">
                  {t('demo')}
                  <ArrowRight className="w-5 h-5" />
                </DemoButton>
                <a href="#painel" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200 transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  {t('panel')}
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <DashboardPreview />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
