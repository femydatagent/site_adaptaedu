'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Upload,
  Search,
  Merge,
  Wand2,
  FileText,
  Sparkles,
  Download,
  Brain,
  Eye,
  Lightbulb,
  Target,
  GraduationCap,
  Palette,
  Calculator,
  PenTool,
  Accessibility,
  Users,
  Building2,
  School,
  CheckCircle2,
  Star,
  ArrowRight,
  Shield,
  Scale,
  FileCheck,
  Heart,
  Zap,
  BookMarked,
  BarChart3,
  ChevronRight,
  Quote,
} from 'lucide-react';
import FadeIn from './fade-in';

const accessibilityProfiles = [
  { name: 'TEA', full: 'Transtorno do Espectro Autista', icon: Brain, color: 'bg-sky-100 text-sky-700 border-sky-200', accent: 'bg-sky-500' },
  { name: 'TDAH', full: 'Transtorno de Déficit de Atenção e Hiperatividade', icon: Zap, color: 'bg-orange-100 text-orange-700 border-orange-200', accent: 'bg-orange-500' },
  { name: 'TPAC', full: 'Transtorno de Processamento Auditivo Central', icon: Ear, color: 'bg-violet-100 text-violet-700 border-violet-200', accent: 'bg-violet-500' },

  { name: 'DI', full: 'Deficiência Intelectual', icon: Lightbulb, color: 'bg-amber-100 text-amber-700 border-amber-200', accent: 'bg-amber-500' },
  { name: 'Baixa Visão', full: 'Baixa Visão', icon: Eye, color: 'bg-teal-100 text-teal-700 border-teal-200', accent: 'bg-teal-500' },
  { name: 'Dislexia', full: 'Dislexia', icon: BookOpen, color: 'bg-pink-100 text-pink-700 border-pink-200', accent: 'bg-pink-500' },
  { name: 'Discalculia', full: 'Discalculia', icon: Calculator, color: 'bg-emerald-100 text-emerald-700 border-emerald-200', accent: 'bg-emerald-500' },
  { name: 'Disgrafia', full: 'Disgrafia', icon: PenTool, color: 'bg-indigo-100 text-indigo-700 border-indigo-200', accent: 'bg-indigo-500' },
];

function Ear(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-5 6-5 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </svg>
  );
}

const fluxoSteps = [
  { icon: Upload, label: 'Envio', desc: 'Envie PDFs, DOCX ou imagens com o conteúdo original' },
  { icon: Search, label: 'Análise', desc: 'A IA analisa e compreende a estrutura do conteúdo' },
  { icon: Merge, label: 'Fusão', desc: 'Os dados são consolidados e preparados para adaptação' },
  { icon: Wand2, label: 'Adaptação', desc: 'O conteúdo é transformado para o perfil de acessibilidade' },
  { icon: FileText, label: 'Formatação', desc: 'O material adaptado é formatado para melhor leitura' },
  { icon: Sparkles, label: 'Geração', desc: 'O documento final é gerado com qualidade profissional' },
  { icon: Download, label: 'Exportação', desc: 'Baixe o material adaptado no formato desejado' },
];

const contentTypes = [
  { icon: FileText, title: 'Texto', desc: 'Textos narrativos, informativos e expositivos adaptados com linguagem simplificada, destaque de informações-chave e estrutura visual otimizada para cada perfil de acessibilidade.' },
  { icon: BookMarked, title: 'Texto com Exercícios', desc: 'Materiais que combinam conteúdo teórico com atividades práticas, com exercícios adaptados em complexidade, formato e apresentação visual para garantir a compreensão e o engajamento.' },
  { icon: GraduationCap, title: 'Ciências, História e Geografia', desc: 'Conteúdo multidisciplinar adaptado com mapas visuais, linhas do tempo interativas, vocabulário controlado e recursos visuais complementares que facilitam a compreensão de conceitos abstratos.' },
  { icon: Calculator, title: 'Exercícios de Matemática', desc: 'Problemas matemáticos adaptados com suporte visual, passos detalhados, representações concretas e linguagem acessível que reduzem a carga cognitiva sem simplificar o conteúdo.' },
];

const adaptationStrategies = [
  { icon: Target, title: 'Destacar informações-chave', desc: 'Identifica e realça os conceitos mais importantes do texto com cores, caixas ou marcadores visuais.' },
  { icon: BarChart3, title: 'Dividir texto em blocos', desc: 'Segmenta conteúdos longos em parágrafos curtos e bem estruturados para reduzir a sobrecarga visual.' },
  { icon: ListIcon, title: 'Converter texto em listas', desc: 'Transforma parágrafos densos em listas com marcadores para facilitar a leitura e a memorização.' },
  { icon: BookOpen, title: 'Adicionar títulos', desc: 'Insere subtítulos e seções numeradas para criar uma hierarquia visual clara no documento.' },
  { icon: Lightbulb, title: 'Simplificar linguagem', desc: 'Reduz a complexidade do vocabulário e das estruturas sintáticas mantendo o significado original.' },
];

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

const plans = [
  {
    name: 'Educador',
    target: 'Professores autônomos',
    price: 'R$ 49',
    period: '/mês',
    features: ['Até 50 adaptações/mês', '3 perfis de acessibilidade', 'Exportação PDF', 'Suporte por e-mail', '1 usuário'],
    highlight: false,
  },
  {
    name: 'Escola',
    target: 'Escolas particulares e públicas',
    price: 'R$ 299',
    period: '/mês',
    features: ['Adaptações ilimitadas', '8 perfis de acessibilidade', 'Todas as exportações', 'Gestão de conteúdos', 'Até 30 usuários', 'Painel administrativo', 'Suporte prioritário'],
    highlight: true,
  },
  {
    name: 'Rede',
    target: 'Redes de ensino',
    price: 'Sob consulta',
    period: '',
    features: ['Tudo do plano Escola', 'Usuários ilimitados', 'API de integração', 'Multi-tenant', 'SLA dedicado', 'Gerente de sucesso', 'Treinamento presencial'],
    highlight: false,
  },
];

const testimonials = [
  { name: 'Ana Maria Silva', role: 'Professora de Educação Especial', school: 'EMEF Monteiro Lobato', text: 'O AdaptaIA transformou minha rotina. Antes eu passava horas adaptando materiais à mão, agora consigo personalizar para cada aluno em minutos. A qualidade das adaptações é impressionante.' },
  { name: 'Carlos Eduardo Mendes', role: 'Coordenador Pedagógico', school: 'Colégio Sapiens', text: 'Implementamos na escola inteira e os resultados foram imediatos. Professores mais confiantes, alunos mais engajados. A centralização dos conteúdos no painel facilitou tudo.' },
  { name: 'Fernanda Rocha', role: 'Diretora', school: 'CMEI Pequeno Mundo', text: 'Como gestora, poder acompanhar as adaptações de toda a equipe em um só lugar mudou nossa forma de trabalhar. A conformidade com a legislação de inclusão ficou garantida.' },
];

export default function Landing({ onNavigateEscolas }: { onNavigateEscolas: () => void }) {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Accessibility className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-teal-600 bg-clip-text text-transparent">
                AdaptaIA
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#fluxo" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Fluxo</a>
              <a href="#perfis" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Perfis</a>
              <a href="#conteudos" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Conteúdos</a>
              <a href="#planos" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Planos</a>
              <button
                onClick={onNavigateEscolas}
                className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1"
              >
                <Building2 className="w-4 h-4" />
                Para Escolas
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-amber-700 hover:bg-amber-50 rounded-lg transition-colors">
                Entrar
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg shadow-md shadow-amber-200 transition-all">
                Começar Grátis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-teal-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Educação para todos
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Adaptação inteligente de conteúdo escolar{' '}
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-teal-500 bg-clip-text text-transparent">
                  para todos
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Adapte automaticamente conteúdo escolar para estudantes com necessidades de acessibilidade.
                IA que transforma educação em inclusão, respeitando cada perfil e garantindo aprendizagem significativa.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl shadow-lg shadow-amber-200 transition-all hover:shadow-xl hover:shadow-amber-300 flex items-center justify-center gap-2">
                  Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={onNavigateEscolas}
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-200 transition-all flex items-center justify-center gap-2"
                >
                  <Building2 className="w-5 h-5" />
                  Sou Escola
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>8 perfis de acessibilidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Conforme LGPD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>ADE LBI/BNCC</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fluxo de Transformação */}
      <section id="fluxo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Fluxo de <span className="text-amber-600">Transformação</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Do envio do material original até a exportação adaptada, cada etapa é automatizada pela nossa IA para garantir a melhor adaptação possível.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-teal-200 to-amber-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
              {fluxoSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-amber-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200/50 mb-4">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-amber-600 z-20">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 mb-1">{step.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Profiles */}
      <section id="perfis" className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                8 Perfis de <span className="text-amber-600">Acessibilidade</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Cada perfil recebe uma adaptação personalizada que respeita suas necessidades específicas, garantindo que nenhum estudante fique para trás.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessibilityProfiles.map((profile, i) => (
              <FadeIn key={profile.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveProfile(i)}
                  onHoverEnd={() => setActiveProfile(null)}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${profile.color} ${
                    activeProfile === i ? 'shadow-lg' : 'shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${profile.accent} flex items-center justify-center flex-shrink-0`}>
                      <profile.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{profile.name}</h3>
                      <p className="text-sm opacity-80 mt-1">{profile.full}</p>
                    </div>
                  </div>
                  {activeProfile === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-current/10 text-sm"
                    >
                      Adaptação personalizada com estratégias específicas para este perfil.
                    </motion.div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section id="conteudos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Tipos de <span className="text-amber-600">Conteúdo</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Adapte qualquer tipo de material escolar com inteligência. Cada conteúdo recebe tratamento específico para manter a qualidade pedagógica.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentTypes.map((ct, i) => (
              <FadeIn key={ct.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-teal-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <ct.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{ct.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{ct.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptation Strategies */}
      <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Estratégias de <span className="text-teal-600">Adaptação</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Combine diferentes estratégias para criar o material ideal. Cada adaptação pode usar uma ou mais técnicas conforme a necessidade do estudante.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adaptationStrategies.map((strat, i) => (
              <FadeIn key={strat.title} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="w-11 h-11 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <strat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{strat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{strat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-tenant / For Schools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Multi-tenant
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Controle centralizado{' '}
                  <span className="text-teal-600">para escolas</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Cada escola tem seu ambiente próprio com gestão completa de usuários, conteúdos e adaptações.
                  Diretores e coordenadores acompanham tudo em tempo real por um painel administrativo unificado.
                </p>
                <div className="space-y-4">
                  {[
                    'Ambiente isolado por escola com dados protegidos',
                    'Painel administrativo com visão geral de todas as adaptações',
                    'Gestão de professores, turmas e matérias centralizada',
                    'Relatórios de uso e conformidade com a legislação',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onNavigateEscolas}
                  className="mt-8 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md shadow-teal-200 transition-all flex items-center gap-2"
                >
                  Conhecer solução para escolas
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6 border border-teal-100 shadow-xl">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <School className="w-5 h-5 text-teal-600" />
                        <span className="font-bold text-slate-900">Colégio Exemplo</span>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Ativo</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">24</div>
                        <div className="text-xs text-slate-500">Professores</div>
                      </div>
                      <div className="text-center p-3 bg-teal-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">156</div>
                        <div className="text-xs text-slate-500">Adaptações</div>
                      </div>
                      <div className="text-center p-3 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">9</div>
                        <div className="text-xs text-slate-500">Perfis</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['Matemática - 6º ano', 'Português - 3º ano', 'Ciências - 5º ano'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                          <span className="text-sm text-slate-700">{item}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-200/40 rounded-full blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Conforme a <span className="text-amber-600">Legislação</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                O AdaptaIA foi projetado para atender aos marcos legais da educação inclusiva brasileira, garantindo conformidade e segurança jurídica para escolas e redes de ensino.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'LBI - Lei Brasileira de Inclusão', desc: 'Lei 13.146/2015 que garante o direito à educação inclusiva e ao atendimento educacional especializado.' },
              { icon: Scale, title: 'Convenção sobre Direitos das Pessoas com Deficiência', desc: 'Convenção da ONU ratificada pelo Brasil, que assegura educação inclusiva em todos os níveis.' },
              { icon: FileCheck, title: 'BNCC e ADE', desc: 'Alinhamento com a Base Nacional Comum Curricular e as Adequações Curriculares para a Educação Especial.' },
              { icon: Users, title: 'AEE e SRMs', desc: 'Suporte ao Atendimento Educacional Especializado e Salas de Recursos Multifuncionais conforme regulamentação.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-xl border border-amber-100 hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Planos para cada <span className="text-amber-600">realidade</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Do professor autônomo à grande rede de ensino, temos o plano ideal para transformar a educação inclusiva na sua realidade.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.15}>
                <div className={`relative p-8 rounded-2xl border-2 h-full flex flex-col ${
                  plan.highlight
                    ? 'border-amber-400 bg-gradient-to-b from-amber-50 to-white shadow-xl shadow-amber-100/50'
                    : 'border-slate-200 bg-white hover:border-amber-200'
                } transition-all`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                      Mais Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{plan.target}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-200 hover:shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-700'
                  }`}>
                    {plan.price === 'Sob consulta' ? 'Falar com Vendas' : 'Começar Agora'}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Quem usa, <span className="text-teal-600">recomenda</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Educadores de todo o Brasil já transformaram suas aulas com o AdaptaIA.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-xl border border-teal-100 hover:shadow-md transition-all h-full flex flex-col">
                  <Quote className="w-8 h-8 text-teal-300 mb-4" />
                  <p className="text-slate-600 leading-relaxed flex-grow mb-4">{t.text}</p>
                  <div className="pt-4 border-t border-teal-50">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role} — {t.school}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-teal-500 rounded-3xl p-10 sm:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Transforme a educação na sua escola
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                  Comece gratuitamente e veja como a adaptação inteligente pode mudar a vida dos seus estudantes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-amber-600 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Começar Grátis
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 rounded-xl border border-white/30 transition-all">
                    Falar com Especialista
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Accessibility className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">AdaptaIA</span>
              </div>
              <p className="text-sm leading-relaxed">
                Adaptação inteligente de conteúdo escolar para uma educação verdadeiramente inclusiva.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#fluxo" className="hover:text-amber-400 transition-colors">Fluxo</a></li>
                <li><a href="#perfis" className="hover:text-amber-400 transition-colors">Perfis</a></li>
                <li><a href="#planos" className="hover:text-amber-400 transition-colors">Planos</a></li>
                <li><button onClick={onNavigateEscolas} className="hover:text-amber-400 transition-colors">Para Escolas</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">LGPD</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>contato@adaptaia.com.br</li>
                <li>(11) 99999-0000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center">
            2025 AdaptaIA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
