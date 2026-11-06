import { useTranslations } from 'next-intl';
import {
  BarChart3,
  Building2,
  ChevronRight,
  Eye,
  FolderOpen,
  GraduationCap,
  LayoutGrid,
  Library,
  Plus,
  Sparkles,
  Tags,
  Users,
} from 'lucide-react';
import FadeIn from '../fade-in';
import { highlightTag } from '../i18n/rich';
import { PACKAGES, SUBJECTS } from './mock-data';

const teal = highlightTag('text-teal-600');
const amber = highlightTag('text-amber-600');

function Heading({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) {
  return (
    <FadeIn>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </FadeIn>
  );
}

const CONTROL_ITEMS = [
  { id: 'painel', icon: LayoutGrid },
  { id: 'conteudos', icon: FolderOpen },
  { id: 'pacotes', icon: Tags },
  { id: 'materias', icon: GraduationCap },
  { id: 'usuarios', icon: Users },
  { id: 'relatorios', icon: BarChart3 },
] as const;

export function ControlFeatures() {
  const t = useTranslations('schoolsPage.control');
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title={t.rich('title', { hl: teal })} subtitle={t('subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTROL_ITEMS.map((feat, i) => (
            <FadeIn key={feat.id} delay={i * 0.08}>
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-teal-50/30 border border-teal-100 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`items.${feat.id}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(`items.${feat.id}.desc`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SubjectsManagement() {
  const t = useTranslations('schoolsPage');
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title={t.rich('subjectsSection.title', { hl: amber })} subtitle={t('subjectsSection.subtitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subj, i) => (
            <FadeIn key={subj.id} delay={i * 0.08}>
              <div className="p-6 bg-white rounded-xl border border-amber-100 hover:shadow-md hover:scale-[1.02] transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${subj.color} flex items-center justify-center flex-shrink-0`}>
                    <subj.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-900 text-lg">{t(`subjects.${subj.id}`)}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div>
                        <p className="text-2xl font-bold text-amber-600">{subj.count}</p>
                        <p className="text-xs text-slate-500">{t('subjectsSection.contents')}</p>
                      </div>
                      <div className="w-px h-8 bg-slate-200" />
                      <div>
                        <p className="text-2xl font-bold text-teal-600">{subj.adaptations}</p>
                        <p className="text-xs text-slate-500">{t('subjectsSection.adaptations')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{t('subjectsSection.manage')}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesManagement() {
  const t = useTranslations('schoolsPage');
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title={t.rich('packages.title', { hl: teal })} subtitle={t('packages.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl border-2 border-slate-100 hover:border-teal-300 overflow-hidden transition-all hover:shadow-lg">
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{t(`packages.items.${pkg.id}.name`)}</h3>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">{t('packages.active')}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{t(`packages.items.${pkg.id}.grades`)}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 mb-2">{t('packages.included')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.subjects.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">{t(`subjects.${s}`)}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-2xl font-bold text-teal-600">{pkg.adaptations}</p>
                      <p className="text-xs text-slate-500">{t('packages.generated')}</p>
                    </div>
                    <span className="px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 rounded-lg flex items-center gap-1">
                      <Plus className="w-4 h-4" />
                      {t('packages.addContent')}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOW_ICONS = [Building2, Library, Sparkles, Eye];

type HowStep = { title: string; desc: string };

export function HowItWorks() {
  const t = useTranslations('schoolsPage.howItWorks');
  const steps = t.raw('steps') as HowStep[];
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title={t.rich('title', { hl: teal })} subtitle={t('subtitle')} />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = HOW_ICONS[i];
            return (
              <li key={step.title}>
                <FadeIn delay={i * 0.15}>
                  <div className="relative text-center">
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6">
                      <div className="w-full h-full bg-gradient-to-br from-teal-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200/50">
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-teal-600 shadow-sm">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    {i < steps.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute top-10 -right-4 w-8 h-8 text-teal-300" aria-hidden="true" />
                    )}
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
