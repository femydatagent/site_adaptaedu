import { useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle2, Download, FileText, Play, School, Shield, Star, Users } from 'lucide-react';
import FadeIn from '../fade-in';
import VideoButton from '../actions/video-button';
import { richTags } from '../i18n/rich';
import { APP_SIGNUP_URL, PROFILE_IDS } from '@/lib/facts';

const MOCKUP_ACTIVE_MATERIAL = 1;
const MOCKUP_PROFILES = [
  { id: 'tea', active: true },
  { id: 'tdah', active: false },
  { id: 'dislexia', active: false },
] as const;

function HeroMockup() {
  const t = useTranslations('hero.mockup');
  const tp = useTranslations('profiles.items');
  const materials = t.raw('items') as string[];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-teal-500/10 rounded-2xl blur-xl" />
      <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-white">
        {/* App chrome bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 text-center">
            app.adaptaedu.com
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="grid grid-cols-3 min-h-[280px]">
          <div className="col-span-1 border-r border-slate-100 p-4 bg-slate-50/50">
            <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">{t('material')}</p>
            <div className="space-y-2">
              {materials.map((item, i) => (
                <div key={item} className={`text-xs px-3 py-2 rounded-lg flex items-center gap-2 ${i === MOCKUP_ACTIVE_MATERIAL ? 'bg-amber-100 text-amber-800 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}>
                  <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-500 mb-3 mt-5 uppercase tracking-wide">{t('profile')}</p>
            <div className="space-y-1.5">
              {MOCKUP_PROFILES.map(p => (
                <div key={p.id} className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 ${p.active ? 'bg-teal-100 text-teal-800 font-medium' : 'text-slate-500'}`}>
                  <div className={`w-2 h-2 rounded-full ${p.active ? 'bg-teal-500' : 'bg-slate-300'}`} />
                  {tp(`${p.id}.name`)}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-bold text-slate-900">{t('docTitle')}</p>
                <p className="text-xs text-slate-500">{t('docMeta')}</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t('ready')}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-amber-50 border-l-4 border-amber-400 px-3 py-2 rounded-r-lg">
                <p className="font-bold text-slate-800 text-xs mb-1">{t('goal')}</p>
                <p className="text-slate-600 text-xs">{t('goalText')}</p>
              </div>
              <div className="bg-slate-50 rounded-lg px-3 py-2">
                <p className="font-semibold text-slate-700 text-xs mb-1.5">{t('step1')}</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t.rich('step1Text', { strong: chunks => <strong>{chunks}</strong> })}
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg px-3 py-2">
                <p className="font-semibold text-slate-700 text-xs mb-1.5">{t('step2')}</p>
                <p className="text-slate-600 text-xs font-mono">35 + 24 = ___</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-lg font-medium">
                <Download className="w-3.5 h-3.5" /> {t('download')}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">
                <FileText className="w-3.5 h-3.5" /> DOCX
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const tp = useTranslations('profiles.items');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-pattern-dots" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {t.rich('title', richTags)}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            {t.rich('subtitle', richTags)}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {PROFILE_IDS.map(id => (
              <span key={id} className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
                {tp(`${id}.name`)}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={APP_SIGNUP_URL} className="inline-flex items-center justify-center gap-2 font-medium shadow-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-8 py-6 text-lg rounded-xl warm-glow">
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <VideoButton className="inline-flex items-center justify-center gap-2 font-medium border bg-background shadow-xs hover:text-accent-foreground px-8 py-6 text-lg rounded-xl border-border hover:bg-secondary">
              <Play className="w-5 h-5 mr-2" />
              {t('ctaVideo')}
            </VideoButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <HeroMockup />
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-teal-600" />
              {t('proof.lgpd')}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <School className="w-4 h-4 text-amber-600" />
              {t('proof.schools')}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-orange-600" />
              {t('proof.students')}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-amber-500" />
              {t('proof.rating')}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
