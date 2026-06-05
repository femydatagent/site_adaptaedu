'use client';

import { useState } from 'react';
import Landing from '@/components/landing';
import Escolas from '@/components/escolas';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'escolas'>('home');

  const goToEscolas = () => {
    setCurrentPage('escolas');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (currentPage === 'escolas') {
    return <Escolas onNavigateHome={goToHome} />;
  }

  return <Landing onNavigateEscolas={goToEscolas} />;
}
