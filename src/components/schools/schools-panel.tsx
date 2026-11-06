import { useFormatter, useTranslations } from 'next-intl';
import { BarChart3, BookOpen, FolderOpen, LayoutGrid, Plus, School, Search, Settings, Tags, Users } from 'lucide-react';
import FadeIn from '../fade-in';
import { highlightTag } from '../i18n/rich';
import { DASHBOARD_STATS, type RecentAdaptation } from './mock-data';

const SIDEBAR = [
  { id: 'dashboard', icon: LayoutGrid },
  { id: 'contents', icon: FolderOpen },
  { id: 'packages', icon: Tags },
  { id: 'subjects', icon: BookOpen },
  { id: 'teachers', icon: Users },
  { id: 'reports', icon: BarChart3 },
  { id: 'settings', icon: Settings },
] as const;
const ACTIVE_SIDEBAR_ITEM = 'dashboard';

/** Mockup do painel administrativo em largura total. */
export default function SchoolsPanel() {
  const t = useTranslations('schoolsPage');
  const format = useFormatter();
  const recent = t.raw('dashboard.recentItems') as RecentAdaptation[];

  return (
    <section id="painel" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.rich('panel.title', { hl: highlightTag('text-amber-600') })}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('panel.subtitle')}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <School className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="font-bold text-slate-900 truncate">{t('dashboard.school')}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-white rounded-lg border border-slate-200 px-3 py-1.5">
                  <Search className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">{t('dashboard.search')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="hidden sm:inline text-xs text-slate-500">{t('dashboard.plan')}</span>
                <span className="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 rounded-lg flex items-center gap-1 whitespace-nowrap">
                  <Plus className="w-3 h-3" />
                  {t('dashboard.newContent')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="hidden lg:block border-r border-slate-200 p-4">
                <div className="space-y-1">
                  {SIDEBAR.map(item => {
                    const isActive = item.id === ACTIVE_SIDEBAR_ITEM;
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-teal-50 text-teal-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        <item.icon className="w-4 h-4" />
                        {t(`dashboard.sidebar.${item.id}`)}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-span-1 lg:col-span-3 p-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {DASHBOARD_STATS.map(stat => (
                    <div key={stat.id} className={`${stat.bg} rounded-xl p-4`}>
                      <div className="flex items-center gap-2 mb-1">
                        <stat.icon className={`w-4 h-4 ${stat.color} flex-shrink-0`} />
                        <span className="text-xs text-slate-500">{t(`dashboard.stats.${stat.id}`)}</span>
                      </div>
                      <p className={`text-2xl font-bold ${stat.color}`}>{typeof stat.value === 'number' ? format.number(stat.value) : stat.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">{t('dashboard.recent')}</h3>
                    <span className="text-xs text-teal-600 font-medium">{t('dashboard.seeAll')}</span>
                  </div>
                  <div className="space-y-2">
                    {recent.map(a => (
                      <div key={`${a.subject}-${a.grade}`} className="flex items-center justify-between gap-2 py-3 px-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${a.inProgress ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-slate-900">{t(`subjects.${a.subject}`)} — {a.grade}</p>
                            <p className="text-xs text-slate-500">{t('dashboard.profileLabel', { profile: a.profile })}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${a.inProgress ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {a.inProgress ? t('dashboard.statusInProgress') : t('dashboard.statusDone')}
                          </span>
                          <span className="hidden sm:inline text-xs text-slate-400 whitespace-nowrap">{a.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
