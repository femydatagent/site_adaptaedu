'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Heart,
  Layers,
  Lightbulb,
  Merge,
  PenTool,
  Play,
  Search,
  Shield,
  Sparkles,
  Star,
  Upload,
  Users,
  Wand2,
  School,
  Building2,
  Zap,
  Quote,
  Scale,
  FileCheck,
  BarChart3,
  Target,
} from 'lucide-react';
import FadeIn from './fade-in';

function EarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-5 6-5 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </svg>
  );
}

const profiles = [
  { name: 'TEA', full: 'Transtorno do Espectro Autista', icon: Brain, desc: 'Estrutura visual previsível, redução de estímulos excessivos, instruções claras e literais, apoios visuais consistentes.' },
  { name: 'TDAH', full: 'Transtorno de Déficit de Atenção e Hiperatividade', icon: Zap, desc: 'Conteúdo segmentado em blocos curtos, destaque de informações-chave, pausas visuais e estímulos direcionados.' },
  { name: 'TPAC', full: 'Transtorno de Processamento Auditivo Central', icon: EarIcon, desc: 'Priorização de conteúdo visual, legendas descritivas, redução de dependência de áudio, instruções escritas detalhadas.' },
  { name: 'DI', full: 'Deficiência Intelectual', icon: Lightbulb, desc: 'Linguagem simplificada, exemplos concretos, repetição de conceitos-chave, apoio visual abundante e passo a passo.' },
  { name: 'Baixa Visão', full: 'Baixa Visão', icon: Eye, desc: 'Alto contraste, fontes ampliadas, descrições de imagens em texto, layout limpo sem poluição visual.' },
  { name: 'Dislexia', full: 'Dislexia', icon: BookOpen, desc: 'Fontes amigáveis para dislexia, espaçamento generoso, divisão silábica opcional, cores para orientação visual.' },
  { name: 'Discalculia', full: 'Discalculia', icon: Calculator, desc: 'Representações visuais de números, material concreto, passo a passo detalhado, eliminação de ambiguidades numéricas.' },
  { name: 'Disgrafia', full: 'Disgrafia', icon: PenTool, desc: 'Espaços ampliados para escrita, linhas-guia, atividades com menor demanda motora, alternativas de resposta digital.' },
];

const fluxoSteps = [
  { icon: Upload, label: 'Envio', desc: 'Envie PDFs, DOCX ou imagens' },
  { icon: Search, label: 'Análise', desc: 'Extraia texto e estrutura' },
  { icon: Merge, label: 'Fusão', desc: 'Una conteúdo e contexto' },
  { icon: Wand2, label: 'Adaptação', desc: 'Aplique regras de acessibilidade' },
  { icon: FileText, label: 'Formatação', desc: 'Gere layout adaptado' },
  { icon: Sparkles, label: 'Geração', desc: 'Produza material final' },
  { icon: Download, label: 'Exportação', desc: 'Baixe em PDF ou DOCX' },
];

const contentTypes = [
  { title: 'Texto', desc: 'Textos narrativos e informativos' },
  { title: 'Texto com Exercícios', desc: 'Conteúdo misto com atividades' },
  { title: 'Ciências / História / Geografia', desc: 'Matérias com conteúdo discursivo' },
  { title: 'Exercícios de Matemática', desc: 'Problemas numéricos e lógicos' },
];

const adaptationStrategies = [
  'Destacar informações-chave',
  'Dividir texto em blocos',
  'Converter texto em listas com marcadores',
  'Adicionar títulos e subtítulos claros',
  'Simplificar linguagem',
];

const schoolTypes = [
  {
    title: 'Escolas Particulares',
    desc: 'Adapte materiais para atender à demanda de famílias que buscam inclusão. Diferencial competitivo com responsabilidade social. Conta administrativa com gestão de professores e controle de uso.',
  },
  {
    title: 'Escolas Públicas',
    desc: 'Cumpra a legislação de educação inclusiva com ferramentas práticas. Adapte conteúdos para salas de recursos multifuncionais e atendimento educacional especializado. Acessível para orçamentos públicos.',
  },
  {
    title: 'Professores Autônomos',
    desc: 'Crie materiais adaptados em minutos, não horas. Planeje aulas inclusivas sem precisar de formação especializada em cada perfil. Fácil, rápido e adaptável para qualquer tipo de deficiência.',
  },
];

const schoolFeatures = [
  'Contas separadas por escola',
  'Controle de acesso por professor',
  'Geração de pacotes em lote',
  'Dashboard de uso e métricas',
];

const plans = [
  {
    name: 'Professor',
    desc: 'Para educadores que querem começar a adaptar conteúdos.',
    price: 'Grátis',
    features: ['3 adaptações/mês', '1 perfil de acessibilidade por vez', 'Upload de PDF e DOCX', 'Exportação em PDF', 'Suporte por email'],
    highlight: false,
    cta: 'Começar Grátis',
  },
  {
    name: 'Escola',
    desc: 'Para escolas que precisam de inclusão em escala.',
    price: 'R$ 297',
    period: '/mês',
    features: ['Adaptações ilimitadas', 'Todos os 8 perfis de acessibilidade', 'Upload de PDF, DOCX e imagens', 'Multi-tenant com gestão de professores', 'Geração de pacotes em lote', 'Dashboard de métricas', 'Suporte prioritário', 'Todos os tipos de adaptação'],
    highlight: true,
    cta: 'Teste Grátis por 14 Dias',
  },
  {
    name: 'Rede de Ensino',
    desc: 'Para redes municipais, estaduais e grupos escolares.',
    price: 'Sob consulta',
    features: ['Tudo do plano Escola', 'Múltiplas unidades', 'API de integração', 'SLA garantido', 'Gerente de sucesso dedicado', 'Onboarding personalizado', 'Relatórios para gestão', 'Conformidade avançada'],
    highlight: false,
    cta: 'Falar com Especialista',
  },
];

const testimonials = [
  {
    text: 'Antes, eu levava horas para adaptar uma única atividade para meus alunos com TEA. Com o AdaptaIA, faço o upload e em minutos tenho o material pronto. Meus alunos estão mais engajados e eu tenho tempo para o que realmente importa: estar presente com eles.',
    name: 'Carla Mendes',
    initials: 'CM',
    role: 'Professora de Educação Especial',
    school: 'EMEF Monteiro Lobato — São Paulo',
  },
  {
    text: 'Implementamos o AdaptaIA na escola inteira. Os professores do ensino regular agora adaptam sozinhos os materiais para alunos com TDAH e dislexia. A inclusão deixou de ser uma tarefa da educação especial e passou a ser responsabilidade de todos — como deveria ser.',
    name: 'Ricardo Almeida',
    initials: 'RA',
    role: 'Coordenador Pedagógico',
    school: 'Colégio Sapiens — Curitiba',
  },
  {
    text: 'Na educação infantil, a adaptação precisa ser visual e muito concreta. O AdaptaIA entende isso e gera materiais que realmente funcionam para crianças com baixa visão e deficiência intelectual. Os pais perceberam a diferença nas atividades que mandamos para casa.',
    name: 'Ana Paula Ferreira',
    initials: 'AF',
    role: 'Diretora',
    school: 'CMEI Cantinho do Saber — Belo Horizonte',
  },
];

export default function Landing({ onNavigateEscolas }: { onNavigateEscolas: () => void }) {
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [selectedAdaptations, setSelectedAdaptations] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleAdaptation = (a: string) => {
    setSelectedAdaptations(prev =>
      prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]
    );
  };

  const navLinks = [
    { href: '#pipeline', label: 'Fluxo' },
    { href: '#perfis', label: 'Perfis' },
    { href: '#conteudo', label: 'Conteúdo' },
    { href: '#escolas', label: 'Escolas' },
    { href: '#legal', label: 'Legal' },
    { href: '#planos', label: 'Planos' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group" aria-label="AdaptaIA - Página inicial">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Accessibility className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Adapta<span className="text-gradient-warm">IA</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Entrar na plataforma" className="inline-flex items-center justify-center text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 hover:bg-accent hover:text-accent-foreground">
              Entrar
            </button>
            <button aria-label="Começar a usar o AdaptaIA gratuitamente" className="inline-flex items-center justify-center text-sm font-medium transition-all shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0">
              Começar Grátis <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
        {/* Mobile nav drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border px-6 pb-4">
            <div className="flex flex-col gap-3 pt-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <button aria-label="Entrar na plataforma" className="inline-flex items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 hover:bg-accent hover:text-accent-foreground">
                  Entrar
                </button>
                <button aria-label="Começar a usar o AdaptaIA gratuitamente" className="inline-flex items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  Começar Grátis <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo da página"
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all warm-glow"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      <main className="flex-1">
        {/* Hero - Full viewport height */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-pattern-dots" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/8 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
            <FadeIn>
              <span className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 gap-1.5 mb-6 border-amber-500/30 bg-amber-500/10 text-amber-700 px-4 py-1.5 text-sm">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Educação para todos
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Transforme conteúdo<br />educacional com{' '}
                <span className="text-gradient-warm">Adaptação inteligente</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                Faça upload de PDFs, DOCX e imagens. Nossa IA adapta automaticamente o conteúdo para{' '}
                <strong className="text-foreground">8 perfis de acessibilidade</strong>. De professor para professor — rápido, fácil e inclusivo.
              </p>
            </FadeIn>

            {/* Profile badges */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {profiles.map(p => (
                  <span key={p.name} className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
                    {p.name}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button className="inline-flex items-center justify-center gap-2 font-medium shadow-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-8 py-6 text-lg rounded-xl warm-glow">
                  Adaptar Conteúdo Grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 font-medium border bg-background shadow-xs hover:text-accent-foreground px-8 py-6 text-lg rounded-xl border-border hover:bg-secondary">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Como Funciona
                </button>
              </div>
            </FadeIn>

            {/* Hero UI Mockup */}
            <FadeIn delay={0.5}>
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
                      app.adaptaia.com.br
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  {/* App content */}
                  <div className="grid grid-cols-3 min-h-[280px]">
                    {/* Sidebar */}
                    <div className="col-span-1 border-r border-slate-100 p-4 bg-slate-50/50">
                      <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">Material</p>
                      <div className="space-y-2">
                        {['Texto Narrativo', 'Exercícios de Matemática', 'Ciências — 5º ano'].map((item, i) => (
                          <div key={item} className={`text-xs px-3 py-2 rounded-lg flex items-center gap-2 ${i === 1 ? 'bg-amber-100 text-amber-800 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}>
                            <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-3 mt-5 uppercase tracking-wide">Perfil</p>
                      <div className="space-y-1.5">
                        {[{ name: 'TEA', active: true }, { name: 'TDAH', active: false }, { name: 'Dislexia', active: false }].map(p => (
                          <div key={p.name} className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 ${p.active ? 'bg-teal-100 text-teal-800 font-medium' : 'text-slate-500'}`}>
                            <div className={`w-2 h-2 rounded-full ${p.active ? 'bg-teal-500' : 'bg-slate-300'}`} />
                            {p.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="col-span-2 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm font-bold text-slate-900">Exercícios de Matemática — TEA</p>
                          <p className="text-xs text-slate-500">Adaptado em 2 segundos</p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Pronto
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="bg-amber-50 border-l-4 border-amber-400 px-3 py-2 rounded-r-lg">
                          <p className="font-bold text-slate-800 text-xs mb-1">📌 Objetivo da atividade</p>
                          <p className="text-slate-600 text-xs">Resolver problemas de adição com números até 100.</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg px-3 py-2">
                          <p className="font-semibold text-slate-700 text-xs mb-1.5">Passo 1 — Leia o problema</p>
                          <p className="text-slate-600 text-xs leading-relaxed">João tem <strong>35 figurinhas</strong>. Ganhou mais <strong>24</strong>. Quantas ele tem agora?</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg px-3 py-2">
                          <p className="font-semibold text-slate-700 text-xs mb-1.5">Passo 2 — Calcule</p>
                          <p className="text-slate-600 text-xs font-mono">35 + 24 = ___</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-lg font-medium">
                          <Download className="w-3.5 h-3.5" /> Baixar PDF
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">
                          <FileText className="w-3.5 h-3.5" /> DOCX
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Social proof */}
            <FadeIn delay={0.6}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-teal-600" />
                  LGPD Compliant
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <School className="w-4 h-4 text-amber-600" />
                  +500 Escolas
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-orange-600" />
                  +12.000 Alunos Impactados
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-amber-500" />
                  4.9/5 Professores
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Fluxo de Transformação */}
        <section id="pipeline" className="relative py-24 md:py-32 bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Fluxo de Transformação
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona a adaptação</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Em 7 etapas automatizadas, seu conteúdo original é transformado em material acessível e adaptado ao perfil do aluno.
                </p>
              </div>
            </FadeIn>

            {/* Desktop: horizontal steps */}
            <div className="hidden md:grid grid-cols-7 gap-4">
              {fluxoSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-amber-600 z-20">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-sm mb-1">{step.label}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden space-y-4">
              {fluxoSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 0.05}>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{step.label}</h3>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Perfis de Acessibilidade */}
        <section id="perfis" className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Perfis de Acessibilidade
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">8 perfis. Cada aluno no centro.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cada perfil possui regras de adaptação específicas, baseadas em evidências científicas e desenvolvidas com especialistas em educação especial.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profiles.map((profile, i) => (
                <FadeIn key={profile.name} delay={i * 0.06}>
                  <div className="group p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:border-amber-300 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <profile.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{profile.name}</h3>
                        <p className="text-xs text-muted-foreground">{profile.full}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{profile.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Conteúdo e Adaptação */}
        <section id="conteudo" className="py-24 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Tipos de Conteúdo e Adaptação
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Adapte qualquer material</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Escolha o tipo de conteúdo e, opcionalmente, estratégias de adaptação para orientar a IA — ou deixe as regras do perfil trabalharem sozinhas.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                  {/* Tipo de Conteúdo */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-foreground mb-3">Tipo de Conteúdo</label>
                    <p className="text-xs text-muted-foreground mb-4">Selecione o formato do material que deseja adaptar.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {contentTypes.map(ct => (
                        <button
                          key={ct.title}
                          onClick={() => setSelectedContentType(ct.title === selectedContentType ? null : ct.title)}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            selectedContentType === ct.title
                              ? 'border-amber-400 bg-amber-50 shadow-sm'
                              : 'border-border hover:border-amber-200 hover:bg-amber-50/50'
                          }`}
                        >
                          <p className="font-medium text-sm text-foreground">{ct.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{ct.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tipo de Adaptação */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Tipo de Adaptação</label>
                    <p className="text-xs text-muted-foreground mb-4">Opcional. Estratégias extras para orientar a adaptação. Deixe em branco para usar só as regras do perfil.</p>
                    <div className="space-y-2">
                      {adaptationStrategies.map(a => (
                        <button
                          key={a}
                          onClick={() => toggleAdaptation(a)}
                          aria-pressed={selectedAdaptations.includes(a)}
                          className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all text-sm ${
                            selectedAdaptations.includes(a)
                              ? 'border-amber-400 bg-amber-50 text-foreground'
                              : 'border-border hover:border-amber-200 text-muted-foreground'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                            selectedAdaptations.includes(a)
                              ? 'bg-amber-500 border-amber-500'
                              : 'border-border'
                          }`}>
                            {selectedAdaptations.includes(a) && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            )}
                          </div>
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview output — shown when content type is selected */}
                  {selectedContentType && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-foreground">Prévia da Adaptação</span>
                        <span className="ml-auto text-xs text-muted-foreground">{selectedContentType}</span>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-foreground leading-relaxed">
                        <p className="font-semibold mb-2 text-amber-800">Exemplo adaptado para TEA / TDAH:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Texto dividido em blocos curtos e objetivos</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Palavras-chave destacadas em negrito</li>
                          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Instruções numeradas passo a passo</li>
                          {selectedAdaptations.length > 0 && (
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> + {selectedAdaptations.length} estratégia{selectedAdaptations.length > 1 ? 's' : ''} extra aplicada{selectedAdaptations.length > 1 ? 's' : ''}</li>
                          )}
                        </ul>
                        <p className="mt-3 text-xs text-amber-700 font-medium">✓ Material pronto para download em PDF ou DOCX</p>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Multi-tenant para Escolas */}
        <section id="escolas" className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700 px-3 py-1 text-xs">
                  Multi-tenant para Escolas
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Cada escola. Sua conta. Seus pacotes.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Escolas particulares, públicas e redes de ensino podem criar contas separadas, gerenciar professores e gerar pacotes de adaptação de conteúdo sob demanda.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {schoolTypes.map((st, i) => (
                <FadeIn key={st.title} delay={i * 0.1}>
                  <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all h-full">
                    <h3 className="font-bold text-lg text-foreground mb-3">{st.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col items-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-md">
                  {schoolFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onNavigateEscolas}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-xs hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  Ver Gestão Completa para Escolas
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Marco Legal */}
        <section id="legal" className="py-24 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Marco Legal & Inclusão
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Acessibilidade é um direito</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A legislação brasileira garante que serviços e recursos de apoio estudantil são direitos — e o AdaptaIA ajuda escolas a cumprirem esse compromisso.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Scale className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">Educação Inclusiva é Lei</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Baseado na legislação brasileira e orientações de especialistas</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Os serviços e recursos de apoio aos estudantes com deficiência são direitos garantidos pela legislação brasileira em todas as etapas, níveis e modalidades da Educação Básica. Esses dispositivos não substituem o ensino na sala comum; ao contrário, complementam e qualificam o processo educativo, auxiliando a eliminar barreiras — atitudinais, arquitetônicas, de comunicação, informacionais, tecnológicas, pedagógicas — e a promover a plena participação no ambiente escolar.
                </p>
                <blockquote className="border-l-4 border-amber-400 pl-4 py-2 mb-6">
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                    &ldquo;Os serviços e recursos da Educação Especial são muito importantes para lidar com o que é específico de cada estudante na sua realidade. Quais são suas características, modos de interagir, agir, perceber e conhecer o mundo? Quais são os materiais, modos de apresentação, expressão, representação que podem ser mais efetivos? Mas é fundamental lembrar que para que eles cumpram a finalidade prevista, precisa de muito diálogo, estudo sobre e com os estudantes, profissionais que atuam junto com ele na comunidade escolar e família.&rdquo;
                  </p>
                  <cite className="text-xs font-semibold text-foreground not-italic">— Deigles Amaro</cite>
                  <span className="text-xs text-muted-foreground">, especialista em gestão escolar no Instituto Rodrigo Mendes (IRM)</span>
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Entre os serviços que devem ser ofertados estão o atendimento educacional especializado (AEE), o profissional de apoio escolar, as salas de recursos multifuncionais (SRMs). A diversificação de estratégias pedagógicas, materiais pedagógicos acessíveis e tecnologias assistivas também são fundamentais. O AdaptaIA se posiciona exatamente aí: como uma tecnologia assistiva que transforma materiais pedagógicos em recursos acessíveis de forma automática e escalável.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                {[
                  { icon: Shield, label: 'Conformidade LGPD', sub: 'Dados protegidos' },
                  { icon: FileCheck, label: 'Baseado em evidências', sub: '' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-4 h-4 text-teal-600" />
                    <span className="font-medium">{item.label}</span>
                    {item.sub && <span className="text-muted-foreground">— {item.sub}</span>}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: '8', label: 'Perfis de Acessibilidade cobertos pela plataforma' },
                { value: '500+', label: 'Escolas Atendidas particulares e públicas' },
                { value: '80%', label: 'Menos Tempo para adaptar um material' },
                { value: '12K+', label: 'Alunos Impactados com conteúdo adaptado' },
              ].map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <div>
                    <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Depoimentos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professores aprovam</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Educadores de escolas públicas e particulares já transformam seus materiais com o AdaptaIA.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <div className="p-6 rounded-xl border border-border bg-card h-full flex flex-col">
                    <Quote className="w-8 h-8 text-amber-300 mb-4 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">{t.text}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role} — {t.school}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="py-24 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-amber-500/30 bg-amber-500/10 text-amber-700 px-3 py-1 text-xs">
                  Planos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fácil, rápido e adaptável</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comece gratuitamente. Escale quando sua escola precisar. Sem surpresas, sem taxas ocultas.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <FadeIn key={plan.name} delay={i * 0.15}>
                  <div className={`relative p-8 rounded-2xl border-2 h-full flex flex-col ${
                    plan.highlight
                      ? 'border-amber-400 bg-card shadow-xl'
                      : 'border-border bg-card'
                  }`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                        Mais Popular
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                    </div>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md warm-glow'
                        : 'bg-secondary text-foreground hover:bg-amber-50'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo aluno merece conteúdo adaptado</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Faça upload de qualquer material e receba versões acessíveis para 8 perfis. Gratuito para começar, sem cartão de crédito.
              </p>
              <p className="text-sm text-muted-foreground mb-6">Inclusão começa com um clique.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center justify-center gap-2 font-medium shadow-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-8 py-6 text-lg rounded-xl warm-glow">
                  Adaptar Meu Primeiro Material
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 font-medium border bg-background shadow-xs hover:text-accent-foreground px-8 py-6 text-lg rounded-xl border-border hover:bg-secondary">
                  Falar com Especialista
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Accessibility className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Adapta<span className="text-gradient-warm">IA</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Transforme conteúdo educacional com acessibilidade. IA que adapta materiais para alunos com diferentes perfis de necessidade, de professor para professor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#perfis" className="hover:text-amber-400 transition-colors">Perfis</a></li>
                <li><a href="#pipeline" className="hover:text-amber-400 transition-colors">Pipeline</a></li>
                <li><a href="#conteudo" className="hover:text-amber-400 transition-colors">Tipos de Conteúdo</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Para Escolas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Particulares</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Públicas</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Redes de Ensino</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Pacotes</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Onboarding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Tutoriais</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">LGPD</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Acessibilidade</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; 2026 AdaptaIA. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="AdaptaIA no LinkedIn" className="hover:text-amber-400 transition-colors">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="AdaptaIA no Instagram" className="hover:text-amber-400 transition-colors">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="AdaptaIA no YouTube" className="hover:text-amber-400 transition-colors">YouTube</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Fale Conosco</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
