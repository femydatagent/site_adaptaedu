import { useTranslations } from 'next-intl';
import { BookOpen, Brain, Calculator, Eye, Lightbulb, PenTool, Sparkles, Zap, type LucideIcon } from 'lucide-react';
import FadeIn from '../fade-in';
import SectionHeading from './section-heading';
import EarIcon from './ear-icon';
import { richTags } from '../i18n/rich';
import { PROFILE_IDS, type ProfileId } from '@/lib/facts';

type ProfileStyle = {
  icon: LucideIcon | typeof EarIcon;
  iconBg: string;
  iconColor: string;
  border: string;
};

const PROFILE_STYLE: Record<ProfileId, ProfileStyle> = {
  tea: { icon: Brain, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', border: 'hover:border-blue-300' },
  tdah: { icon: Zap, iconBg: 'bg-orange-100', iconColor: 'text-orange-500', border: 'hover:border-orange-300' },
  tpac: { icon: EarIcon, iconBg: 'bg-purple-100', iconColor: 'text-purple-500', border: 'hover:border-purple-300' },
  di: { icon: Lightbulb, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-500', border: 'hover:border-yellow-300' },
  baixaVisao: { icon: Eye, iconBg: 'bg-teal-100', iconColor: 'text-teal-600', border: 'hover:border-teal-300' },
  dislexia: { icon: BookOpen, iconBg: 'bg-rose-100', iconColor: 'text-rose-500', border: 'hover:border-rose-300' },
  discalculia: { icon: Calculator, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', border: 'hover:border-emerald-300' },
  disgrafia: { icon: PenTool, iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500', border: 'hover:border-indigo-300' },
  ahsd: { icon: Sparkles, iconBg: 'bg-fuchsia-100', iconColor: 'text-fuchsia-600', border: 'hover:border-fuchsia-300' },
};

export default function Profiles() {
  const t = useTranslations('profiles');

  return (
    <section id="perfis" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_IDS.map((id, i) => {
            const style = PROFILE_STYLE[id];
            return (
              <FadeIn key={id} delay={i * 0.06}>
                <div className={`group p-5 rounded-xl border border-border bg-card hover:shadow-lg ${style.border} transition-all`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <style.icon className={`w-5 h-5 ${style.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{t(`items.${id}.name`)}</h3>
                      <p className="text-xs text-muted-foreground">{t(`items.${id}.full`)}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`items.${id}.desc`)}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
