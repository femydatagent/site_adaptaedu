'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId: string;
  title: string;
}

export default function VideoModal({ open, onOpenChange, videoId, title }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-0 gap-0 [&>button]:text-white [&>button]:bg-black/60 [&>button]:rounded-full [&>button]:p-1.5 [&>button]:top-3 [&>button]:right-3 [&>button]:z-10">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">Vídeo de demonstração do AdaptaEDU</DialogDescription>
        <div className="relative w-full aspect-video">
          {/* Só monta o iframe aberto: ao fechar, o vídeo para de tocar */}
          {open && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
