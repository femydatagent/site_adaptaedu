import { BookOpen, Calculator, Clock, Eye, FileText, Globe, Layers, Palette, Sparkles, Users } from 'lucide-react';

/**
 * Números fictícios do mockup do painel ("Colégio Sapiens"). Ilustram a
 * interface; não são métricas reais.
 */
export const SUBJECTS = [
  { id: 'matematica', icon: Calculator, color: 'bg-emerald-100 text-emerald-700', count: 48, adaptations: 156 },
  { id: 'portugues', icon: BookOpen, color: 'bg-amber-100 text-amber-700', count: 62, adaptations: 201 },
  { id: 'ciencias', icon: Globe, color: 'bg-sky-100 text-sky-700', count: 35, adaptations: 98 },
  { id: 'historia', icon: Clock, color: 'bg-violet-100 text-violet-700', count: 29, adaptations: 87 },
  { id: 'geografia', icon: Layers, color: 'bg-teal-100 text-teal-700', count: 31, adaptations: 72 },
  { id: 'artes', icon: Palette, color: 'bg-pink-100 text-pink-700', count: 18, adaptations: 45 },
] as const;

const BASE_SUBJECTS = ['portugues', 'matematica', 'ciencias', 'historia', 'geografia'] as const;

export const PACKAGES = [
  { id: 'fund1', subjects: BASE_SUBJECTS, adaptations: 412, color: 'from-amber-400 to-orange-400' },
  { id: 'fund2', subjects: [...BASE_SUBJECTS, 'artes'], adaptations: 287, color: 'from-teal-400 to-emerald-400' },
  { id: 'medio', subjects: BASE_SUBJECTS, adaptations: 156, color: 'from-violet-400 to-indigo-400' },
] as const;

export const DASHBOARD_STATS = [
  { id: 'contents', value: 1247, icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 'adaptations', value: 855, icon: Sparkles, color: 'text-teal-600', bg: 'bg-teal-50' },
  { id: 'teachers', value: 24, icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'profiles', value: '9/9', icon: Eye, color: 'text-violet-600', bg: 'bg-violet-50' },
] as const;

export type RecentAdaptation = {
  subject: string;
  grade: string;
  profile: string;
  inProgress: boolean;
  time: string;
};
