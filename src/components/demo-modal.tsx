'use client';

import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { CALENDLY_URL } from '@/lib/facts';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&embed_type=Inline`;

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const t = useTranslations('demoModal');
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[92vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 text-left">
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription className="text-sm">
            {t('description')}
          </DialogDescription>
        </DialogHeader>

        {/* Só monta o iframe com o popup aberto, para não carregar o Calendly à toa */}
        {open && (
          <iframe
            src={CALENDLY_EMBED_URL}
            title={t('iframeTitle')}
            className="w-full h-[70vh] min-h-[480px] border-0"
          />
        )}

        <div className="border-t px-6 py-3 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline underline-offset-4 hover:text-amber-600"
          >
            {t('fallback')}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
