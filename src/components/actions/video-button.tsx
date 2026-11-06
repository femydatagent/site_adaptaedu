'use client';

import { useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import VideoModal from '../video-modal';
import { DEMO_VIDEO_ID } from '@/lib/facts';

type VideoButtonProps = {
  children: ReactNode;
  className?: string;
};

/** Botão "Ver como funciona": abre o vídeo de demonstração num modal. */
export default function VideoButton({ children, className }: VideoButtonProps) {
  const t = useTranslations('videoModal');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>
      <VideoModal open={isOpen} onOpenChange={setIsOpen} videoId={DEMO_VIDEO_ID} title={t('title')} />
    </>
  );
}
