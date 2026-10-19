'use client';

import { ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CALENDLY_URL = 'https://calendly.com/fernando-outa-adaptaedu/30min';
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&embed_type=Inline`;

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[92vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 text-left">
          <DialogTitle>Agendar demonstração gratuita</DialogTitle>
          <DialogDescription className="text-sm">
            Escolha o melhor horário para uma conversa de 30 minutos com a nossa equipe.
          </DialogDescription>
        </DialogHeader>

        {/* Só monta o iframe com o popup aberto, para não carregar o Calendly à toa */}
        {open && (
          <iframe
            src={CALENDLY_EMBED_URL}
            title="Agenda do AdaptaEDU no Calendly"
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
            A agenda não carregou? Abrir em nova aba
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
