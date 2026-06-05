'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  BookOpen,
  Package,
  Settings,
  BarChart3,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  FileText,
  Layers,
  GraduationCap,
  Palette,
  Calculator,
  Search,
  Plus,
  Download,
  Eye,
  Clock,
  Star,
  Zap,
  Globe,
  Lock,
  ArrowLeft,
  Sparkles,
  School,
  Library,
  LayoutGrid,
  FolderOpen,
  Tags,
} from 'lucide-react';
import FadeIn from './fade-in';

const subjects = [
  { name: 'Matemática', icon: Calculator, color: 'bg-emerald-100 text-emerald-700', count: 48, adaptations: 156 },
  { name: 'Português', icon: BookOpen, color: 'bg-amber-100 text-amber-700', count: 62, adaptations: 201 },
  { name: 'Ciências', icon: Globe, color: 'bg-sky-100 text-sky-700', count: 35, adaptations: 98 },
  { name: 'História', icon: Clock, color: 'bg-violet-100 text-violet-700', count: 29, adaptations: 87 },
  { name: 'Geografia', icon: Layers, color: 'bg-teal-100 text-teal-700', count: 31, adaptations: 72 },
  { name: 'Artes', icon: Palette, color: 'bg-pink-100 text-pink-700', count: 18, adaptations: 45 },
];

const packages = [
  {
    name: 'Fundamental I',
    grades: '1º ao 5º ano',
    subjects: ['Português', 'Matemática', 'Ciências', 'História', 'Geografia'],
    adaptations: 412,
    status: 'Ativo',
    color: 'from-amber-400 to-orange-400',
  },
  {
    name: 'Fundamental II',
    grades: '6º ao 9º ano',
    subjects: ['Português', 'Matemática', 'Ciências', 'História', 'Geografia', 'Artes'],
    adaptations: 287,
    status: 'Ativo',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    name: 'Ensino Médio',
    grades: '1ª a 3ª série',
    subjects: ['Português', 'Matemática', 'Ciências', 'História', 'Geografia'],
    adaptations: 156,
    status: 'Ativo',
    color: 'from-violet-400 to-indigo-400',
  },
];

const dashboardStats = [
  { label: 'Conteúdos Cadastrados', value: '1.247', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Adaptações Geradas', value: '855', icon: Sparkles, color: 'text-teal-600', bg: 'bg-teal-50' },
  { label: 'Professores Ativos', value: '24', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Perfis Atendidos', value: '8/8', icon: Eye, color: 'text-violet-600', bg: 'bg-violet-50' },
];

const recentAdaptations = [
  { subject: 'Matemática', grade: '6º ano', profile: 'TEA', status: 'Concluída', time: '2 min atrás' },
  { subject: 'Português', grade: '3º ano', profile: 'Dislexia', status: 'Concluída', time: '15 min atrás' },
  { subject: 'Ciências', grade: '5º ano', profile: 'TDAH', status: 'Concluída', time: '32 min atrás' },
  { subject: 'História', grade: '7º ano', profile: 'Baixa Visão', status: 'Em progresso', time: 'Agora' },
  { subject: 'Geografia', grade: '4º ano', profile: 'DI', status: 'Concluída', time: '1h atrás' },
];

const controlFeatures = [
  {
    icon: LayoutGrid,
    title: 'Painel Centralizado',
    desc: 'Acesse todas as funcionalidades da escola em um único painel. Visualize adaptações, conteúdos, professores e métricas de uso em tempo real, sem precisar alternar entre sistemas diferentes.',
  },
  {
    icon: FolderOpen,
    title: 'Gestão de Conteúdos',
    desc: 'Organize todo o material didático da escola por matéria, ano e segmento. Faça upload em lote, categorize automaticamente e mantenha um repositório centralizado acessível para toda a equipe pedagógica.',
  },
  {
    icon: Tags,
    title: 'Gestão de Pacotes',
    desc: 'Crie e gerencie pacotes de conteúdos por segmento de ensino (Fundamental I, Fundamental II, Ensino Médio). Ative ou desative pacotes conforme a necessidade da escola com um clique.',
  },
  {
    icon: GraduationCap,
    title: 'Gestão de Matérias',
    desc: 'Cadastre e organize todas as matérias da grade curricular. Defina professores responsáveis, vincule conteúdos e acompanhe as adaptações geradas por disciplina em tempo real.',
  },
  {
    icon: Users,
    title: 'Gestão de Usuários',
    desc: 'Adicione professores, coordenadores e administradores com perfis de acesso personalizados. Controle quem pode criar, editar ou visualizar cada tipo de conteúdo e adaptação.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios e Métricas',
    desc: 'Acompanhe o uso da plataforma com dashboards detalhados. Veja quais perfis de acessibilidade são mais atendidos, quais matérias têm mais adaptações e identifique oportunidades de melhoria.',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Cadastro da Escola',
    desc: 'Registre sua escola, configure os segmentos de ensino e convide professores para a plataforma.',
    icon: Building2,
  },
  {
    step: 2,
    title: 'Organização dos Conteúdos',
    desc: 'Faça upload dos materiais e organize por matéria, ano e pacote. A IA reconhece automaticamente a estrutura.',
    icon: Library,
  },
  {
    step: 3,
    title: 'Geração de Adaptações',
    desc: 'Selecione o perfil de acessibilidade e gere adaptações com um clique. Combine estratégias conforme necessário.',
    icon: Sparkles,
  },
  {
    step: 4,
    title: 'Distribuição e Acompanhamento',
    desc: 'Compartilhe os materiais adaptados com professores e alunos, e acompanhe o uso em tempo real pelo painel.',
    icon: Eye,
  },
];

export default function Escolas({ onNavigateHome }: { onNavigateHome: () => void }) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onNavigateHome}
                className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Voltar</span>
              </button>
              <div className="w-px h-6 bg-slate-200" />
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                  AdaptaIA Escolas
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50 rounded-lg transition-colors">
                Agendar Demo
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-lg shadow-md shadow-teal-200 transition-all">
                Começar Grátis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-amber-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/3 w-64 h-64 bg-emerald-200/20 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Solução para Escolas
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Gestão centralizada de{' '}
                  <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
                    adaptações escolares
                  </span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Um único sistema para gerenciar conteúdos, gerar adaptações de acessibilidade,
                  organizar pacotes por segmento e controlar todas as matérias da sua escola.
                  Simples, rápido e conforme a legislação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow-lg shadow-teal-200 transition-all hover:shadow-xl hover:shadow-teal-300 flex items-center justify-center gap-2">
                    Agendar Demonstração
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Ver Painel em Ação
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                {/* Dashboard Preview Card */}
                <div className="bg-white rounded-2xl shadow-2xl shadow-teal-200/40 border border-teal-100 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <School className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Colégio Sapiens</p>
                          <p className="text-teal-200 text-xs">Painel Administrativo</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-emerald-400/20 text-emerald-300 text-xs rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {dashboardStats.map((stat) => (
                      <div key={stat.label} className={`${stat.bg} rounded-xl p-3`}>
                        <stat.icon className={`w-5 h-5 ${stat.color} mb-1`} />
                        <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="px-4 pb-4">
                    <p className="text-xs font-semibold text-slate-500 mb-2">Adaptações Recentes</p>
                    <div className="space-y-2">
                      {recentAdaptations.slice(0, 3).map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${a.status === 'Em progresso' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                            <span className="text-xs text-slate-700">{a.subject} — {a.grade}</span>
                          </div>
                          <span className="text-xs text-slate-400">{a.profile}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-amber-100"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">+855</p>
                      <p className="text-xs text-slate-500">Adaptações</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-emerald-100"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">8/8</p>
                      <p className="text-xs text-slate-500">Perfis Ativos</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Control Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Tudo centralizado em{' '}
                <span className="text-teal-600">um único sistema</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Elimine a fragmentação. Conteúdos, adaptações, pacotes e matérias — tudo gerenciado a partir de uma plataforma unificada projetada para escolas.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {controlFeatures.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-teal-50/30 border border-teal-100 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Management */}
      <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Gestão de <span className="text-amber-600">Matérias</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Organize todas as disciplinas da grade curricular em um só lugar. Cadastre matérias, vincule conteúdos e acompanhe as adaptações geradas por disciplina.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subj, i) => (
              <FadeIn key={subj.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl border border-amber-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${subj.color} flex items-center justify-center flex-shrink-0`}>
                      <subj.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-slate-900 text-lg">{subj.name}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div>
                          <p className="text-2xl font-bold text-amber-600">{subj.count}</p>
                          <p className="text-xs text-slate-500">conteúdos</p>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div>
                          <p className="text-2xl font-bold text-teal-600">{subj.adaptations}</p>
                          <p className="text-xs text-slate-500">adaptações</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Clique para gerenciar</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Gestão de <span className="text-teal-600">Pacotes</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Crie pacotes de conteúdos por segmento de ensino. Ative, desative e personalize pacotes conforme a estrutura da sua escola, com controle total sobre o que cada segmento recebe.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.15}>
                <div className="relative bg-white rounded-2xl border-2 border-slate-100 hover:border-teal-300 overflow-hidden transition-all hover:shadow-lg">
                  <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        {pkg.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">{pkg.grades}</p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-500 mb-2">Matérias incluídas</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.subjects.map((s) => (
                          <span key={s} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-2xl font-bold text-teal-600">{pkg.adaptations}</p>
                        <p className="text-xs text-slate-500">adaptações geradas</p>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors flex items-center gap-1">
                        <Plus className="w-4 h-4" />
                        Conteúdo
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Como <span className="text-teal-600">funciona</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Em poucos passos, sua escola está pronta para gerar adaptações de acessibilidade de forma automatizada e centralizada.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200/50">
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-teal-600 shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  {i < howItWorks.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-10 -right-4 w-8 h-8 text-teal-300" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Mockup - Full Width */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Seu painel, <span className="text-amber-600">seu controle</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Visualize e gerencie tudo em um painel intuitivo projetado para diretores e coordenadores pedagógicos.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
              {/* Toolbar */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-teal-600" />
                    <span className="font-bold text-slate-900">Colégio Sapiens</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-white rounded-lg border border-slate-200 px-3 py-1.5">
                    <Search className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Buscar conteúdo...</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs text-slate-500">Plano Escola</span>
                  <button className="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 rounded-lg flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Novo Conteúdo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4">
                {/* Sidebar */}
                <div className="hidden lg:block border-r border-slate-200 p-4">
                  <div className="space-y-1">
                    {[
                      { icon: LayoutGrid, label: 'Dashboard', active: true },
                      { icon: FolderOpen, label: 'Conteúdos', active: false },
                      { icon: Tags, label: 'Pacotes', active: false },
                      { icon: BookOpen, label: 'Matérias', active: false },
                      { icon: Users, label: 'Professores', active: false },
                      { icon: BarChart3, label: 'Relatórios', active: false },
                      { icon: Settings, label: 'Configurações', active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                          item.active
                            ? 'bg-teal-50 text-teal-700 font-medium'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 lg:col-span-3 p-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {dashboardStats.map((stat) => (
                      <div key={stat.label} className={`${stat.bg} rounded-xl p-4`}>
                        <div className="flex items-center gap-2 mb-1">
                          <stat.icon className={`w-4 h-4 ${stat.color}`} />
                          <span className="text-xs text-slate-500">{stat.label}</span>
                        </div>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent adaptations table */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-slate-900">Adaptações Recentes</h4>
                      <button className="text-xs text-teal-600 font-medium hover:text-teal-700">Ver todas</button>
                    </div>
                    <div className="space-y-2">
                      {recentAdaptations.map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${a.status === 'Em progresso' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                            <div>
                              <p className="text-sm font-medium text-slate-900">{a.subject} — {a.grade}</p>
                              <p className="text-xs text-slate-500">Perfil: {a.profile}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              a.status === 'Em progresso'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              {a.status}
                            </span>
                            <span className="text-xs text-slate-400">{a.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Por que escolas <span className="text-amber-600">escolhem o AdaptaIA</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: 'Economia de tempo', desc: 'Professores economizam em média 4 horas por semana com adaptações automatizadas. O tempo que antes era gasto com adaptações manuais agora pode ser investido no ensino.' },
              { icon: Shield, title: 'Conformidade legal', desc: 'Atendimento automático à LBI, BNCC/ADE e regulamentações de AEE e SRMs. Sua escola sempre está em conformidade com a legislação de educação inclusiva.' },
              { icon: Lock, title: 'Segurança dos dados', desc: 'Dados isolados por escola com criptografia de ponta. Conformidade total com a LGPD e controle granular de acesso por perfil de usuário.' },
              { icon: BarChart3, title: 'Métricas em tempo real', desc: 'Dashboards que mostram o uso da plataforma, perfis mais atendidos, matérias com mais adaptações e oportunidades de melhoria na inclusão escolar.' },
            ].map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 bg-white rounded-xl border border-amber-100 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-emerald-500 to-amber-500 rounded-3xl p-10 sm:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Pronto para centralizar as adaptações da sua escola?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                  Agende uma demonstração gratuita e veja como o AdaptaIA pode transformar a gestão de conteúdo inclusivo na sua escola.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-teal-600 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Agendar Demonstração
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 rounded-xl border border-white/30 transition-all">
                    Começar Grátis
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">AdaptaIA Escolas</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button onClick={onNavigateHome} className="hover:text-amber-400 transition-colors">Página Inicial</button>
              <a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-amber-400 transition-colors">LGPD</a>
            </div>
            <p className="text-sm">2026 AdaptaIA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
