'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, Calculator, CheckCircle2, FileText, Layers, Search, Sparkles, Star, Target, Wand2 } from 'lucide-react';

/** Ícones na mesma ordem de `contentDemo.types` e `contentDemo.strategies`. */
const TYPE_ICONS = [FileText, BookOpen, Search, Calculator];
const STRATEGY_ICONS = [Star, Layers, CheckCircle2, Target, Wand2];

type ContentType = { title: string; desc: string };

/** Demonstração interativa: tipo de conteúdo + estratégias opcionais → prévia. */
export default function ContentDemo() {
  const t = useTranslations('contentDemo');
  const types = t.raw('types') as ContentType[];
  const strategies = t.raw('strategies') as string[];
  const previewItems = t.raw('previewItems') as string[];

  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedStrategies, setSelectedStrategies] = useState<number[]>([]);

  const toggleStrategy = (index: number) => {
    setSelectedStrategies(prev => (prev.includes(index) ? prev.filter(x => x !== index) : [...prev, index]));
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
      <div className="mb-8">
        <p className="block text-sm font-semibold text-foreground mb-3">{t('contentTypeLabel')}</p>
        <p className="text-xs text-muted-foreground mb-4">{t('contentTypeHelp')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {types.map((ct, i) => {
            const Icon = TYPE_ICONS[i];
            const isSelected = selectedType === i;
            return (
              <button
                key={ct.title}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedType(isSelected ? null : i)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected ? 'border-amber-400 bg-amber-50 shadow-sm' : 'border-border hover:border-amber-200 hover:bg-amber-50/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-amber-500' : 'bg-amber-100'}`}>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-amber-600'}`} />
                  </div>
                  <p className="font-medium text-sm text-foreground">{ct.title}</p>
                </div>
                <p className="text-xs text-muted-foreground pl-9">{ct.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="block text-sm font-semibold text-foreground mb-1">{t('adaptationLabel')}</p>
        <p className="text-xs text-muted-foreground mb-4">{t('adaptationHelp')}</p>
        <div className="space-y-2">
          {strategies.map((label, i) => {
            const Icon = STRATEGY_ICONS[i];
            const isSelected = selectedStrategies.includes(i);
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleStrategy(i)}
                aria-pressed={isSelected}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all text-sm ${
                  isSelected ? 'border-amber-400 bg-amber-50 text-foreground' : 'border-border hover:border-amber-200 text-muted-foreground'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-amber-500' : 'bg-muted'}`}>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-muted-foreground'}`} />
                </div>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {selectedType !== null && (
        <div className="mt-6 pt-6 border-t border-border" aria-live="polite">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-foreground">{t('previewTitle')}</span>
            <span className="ml-auto text-xs text-muted-foreground">{types[selectedType].title}</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-foreground leading-relaxed">
            <p className="font-semibold mb-2 text-amber-800">{t('previewExample')}</p>
            <ul className="space-y-1 text-muted-foreground">
              {previewItems.map(item => (
                <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> {item}</li>
              ))}
              {selectedStrategies.length > 0 && (
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> {t('extraStrategies', { count: selectedStrategies.length })}</li>
              )}
            </ul>
            <p className="mt-3 text-xs text-amber-700 font-medium">{t('ready')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
