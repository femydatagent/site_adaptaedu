'use client';

import { useState } from 'react';
import Landing from '@/components/landing';
import Escolas from '@/components/escolas';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'escolas'>('home');

  if (currentPage === 'escolas') {
    return <Escolas onNavigateHome={() => setCurrentPage('home')} />;
  }

  return <Landing onNavigateEscolas={() => setCurrentPage('escolas')} />;
}
