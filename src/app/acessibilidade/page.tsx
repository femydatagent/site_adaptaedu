import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import { CONTATO } from '@/components/legal/empresa';
import { Section, SubTitle, P, List, Table, Callout, Fill } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'Declaração de Acessibilidade',
  description:
    'Compromisso de acessibilidade digital do AdaptaEDU: padrões seguidos (WCAG 2.2 e eMAG), recursos implementados, limitações conhecidas e canal para relatar barreiras.',
  alternates: { canonical: 'https://adaptaedu.com/acessibilidade' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-09-14';

const toc = [
  { id: 'compromisso', label: 'Nosso compromisso' },
  { id: 'padroes', label: 'Padrões que seguimos' },
  { id: 'recursos', label: 'Recursos de acessibilidade implementados' },
  { id: 'teclado', label: 'Navegação por teclado' },
  { id: 'movimento', label: 'Movimento e animações' },
  { id: 'limitacoes', label: 'Limitações conhecidas' },
  { id: 'avaliacao', label: 'Como avaliamos' },
  { id: 'plataforma', label: 'Acessibilidade do material gerado' },
  { id: 'relatar', label: 'Encontrou uma barreira? Fale conosco' },
  { id: 'legislacao', label: 'Base legal' },
];

export default function AcessibilidadePage() {
  return (
    <LegalPage
      title="Declaração de Acessibilidade"
      subtitle="Uma plataforma que existe para tornar material escolar acessível precisa ser acessível ela mesma. Esta página descreve o que já fizemos, o que ainda falta e como relatar uma barreira."
      updatedAt={UPDATED_AT}
      toc={toc}
    >
      <Section id="compromisso" title="1. Nosso compromisso">
        <P>
          A AdaptaEDU trabalha para que o site adaptaedu.com e a plataforma app.adaptaedu.com possam ser
          usados por todas as pessoas, incluindo quem navega com leitor de tela, apenas com teclado, com
          ampliação de tela ou com preferências de movimento reduzido.
        </P>
        <Callout tone="teal" title="Acessibilidade é processo, não certificado">
          <p>
            Preferimos descrever com honestidade o estado atual a afirmar conformidade total. Abaixo você
            encontra tanto o que já está implementado quanto as limitações que conhecemos e estamos
            tratando.
          </p>
        </Callout>
      </Section>

      <Section id="padroes" title="2. Padrões que seguimos">
        <List
          items={[
            <>
              <strong className="text-foreground">WCAG 2.2</strong> (Web Content Accessibility Guidelines),
              do W3C — buscamos o nível <strong className="text-foreground">AA</strong> como referência.
            </>,
            <>
              <strong className="text-foreground">eMAG</strong> — Modelo de Acessibilidade em Governo
              Eletrônico, referência para contratações com o setor público brasileiro.
            </>,
            <>
              <strong className="text-foreground">HTML semântico</strong> e atributos ARIA quando a
              semântica nativa não é suficiente.
            </>,
          ]}
        />
        <P>
          Estado atual declarado: <strong className="text-foreground">parcialmente conforme</strong> ao
          WCAG 2.2 nível AA. &ldquo;Parcialmente conforme&rdquo; significa que parte do conteúdo atende ao
          padrão, mas há itens pendentes — listados na seção de limitações.
        </P>
      </Section>

      <Section id="recursos" title="3. Recursos de acessibilidade implementados">
        <Table
          head={['Recurso', 'Critério WCAG', 'Situação']}
          rows={[
            ['Idioma da página declarado (pt-BR)', '3.1.1 Idioma da página', 'Implementado'],
            ['Estrutura semântica com header, nav, main e footer', '1.3.1 Informações e relações', 'Implementado'],
            ['Um único h1 por página e hierarquia de títulos sem saltos', '1.3.1 Informações e relações', 'Implementado'],
            ['Texto alternativo em imagens; imagens decorativas marcadas como tal', '1.1.1 Conteúdo não textual', 'Implementado'],
            ['Nome acessível em todos os botões e links, inclusive os que só têm ícone', '4.1.2 Nome, função, valor', 'Implementado'],
            ['Rótulos associados a todos os campos de formulário', '3.3.2 Rótulos ou instruções', 'Implementado'],
            ['Link "pular para o conteúdo principal"', '2.4.1 Ignorar blocos', 'Implementado'],
            ['Indicador de foco visível e consistente', '2.4.7 Foco visível', 'Implementado'],
            ['Respeito à preferência de movimento reduzido', '2.3.3 Animação a partir de interações', 'Implementado'],
            ['Layout responsivo, utilizável com ampliação até 200%', '1.4.4 Redimensionar texto', 'Implementado'],
          ]}
        />
      </Section>

      <Section id="teclado" title="4. Navegação por teclado">
        <P>Toda a navegação do site pode ser feita sem mouse:</P>
        <List
          items={[
            <>
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Tab</kbd>{' '}
              avança para o próximo elemento interativo;{' '}
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Shift + Tab</kbd>{' '}
              retorna ao anterior.
            </>,
            <>
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Enter</kbd>{' '}
              ativa links e botões;{' '}
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Espaço</kbd>{' '}
              aciona botões e marca caixas de seleção.
            </>,
            <>
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Esc</kbd>{' '}
              fecha janelas modais, como a de solicitação de demonstração.
            </>,
            <>
              O primeiro <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs font-mono">Tab</kbd>{' '}
              na página inicial revela o link <em>Pular para o conteúdo principal</em>, que salta o menu de
              navegação.
            </>,
          ]}
        />
      </Section>

      <Section id="movimento" title="5. Movimento e animações">
        <P>
          O site usa animações sutis de entrada ao rolar a página. Se o seu sistema operacional estiver
          configurado para reduzir movimento, essas animações são desativadas automaticamente — sem
          deslocamento de elementos e sem rolagem suave.
        </P>
        <SubTitle>Como ativar a preferência</SubTitle>
        <List
          items={[
            <><strong className="text-foreground">Windows:</strong> Configurações → Acessibilidade → Efeitos visuais → desativar &ldquo;Efeitos de animação&rdquo;.</>,
            <><strong className="text-foreground">macOS:</strong> Ajustes do Sistema → Acessibilidade → Tela → ativar &ldquo;Reduzir movimento&rdquo;.</>,
            <><strong className="text-foreground">iOS:</strong> Ajustes → Acessibilidade → Movimento → ativar &ldquo;Reduzir movimento&rdquo;.</>,
            <><strong className="text-foreground">Android:</strong> Configurações → Acessibilidade → ativar &ldquo;Remover animações&rdquo;.</>,
          ]}
        />
        <P>
          Nenhum conteúdo do site pisca mais de três vezes por segundo, em atendimento ao critério 2.3.1
          (Três flashes ou abaixo do limite).
        </P>
      </Section>

      <Section id="limitacoes" title="6. Limitações conhecidas">
        <P>
          Somos transparentes sobre o que ainda não verificamos ou não atende plenamente ao padrão:
        </P>
        <Table
          head={['Limitação', 'Impacto', 'Previsão']}
          rows={[
            [
              'Contraste de cores não auditado sistematicamente em todos os componentes',
              'Textos secundários sobre fundos claros podem ficar abaixo da razão 4.5:1 exigida pelo critério 1.4.3',
              'Em até 1 mês',
            ],
            [
              'Testes com leitores de tela reais (NVDA, JAWS, VoiceOver) ainda não realizados de forma sistemática',
              'Pode haver anúncios imprecisos ou ordem de leitura inesperada em componentes complexos',
              'Em até 1 mês',
            ],
            [
              'Auditoria por terceiro independente ainda não realizada',
              'A declaração apoia-se em avaliação da própria equipe, e não em verificação externa',
              'Sem previsão',
            ],
            [
              'Acessibilidade da plataforma app.adaptaedu.com avaliada separadamente',
              'Esta declaração cobre o site adaptaedu.com; a aplicação foi avaliada em 18/09/2026 e tem ciclo próprio',
              'Contínuo',
            ],
          ]}
        />
      </Section>

      <Section id="avaliacao" title="7. Como avaliamos">
        <P>A avaliação que sustenta esta declaração foi feita por:</P>
        <List
          items={[
            'Verificação automatizada da estrutura das páginas: idioma declarado, marcos de navegação, hierarquia de títulos, textos alternativos, nomes acessíveis de controles e rótulos de formulário.',
            'Testes manuais de navegação exclusivamente por teclado, incluindo a abertura e o fechamento de janelas modais.',
            'Verificação do comportamento sob preferência de movimento reduzido.',
            'Revisão pedagógica conduzida por especialista em educação inclusiva da própria equipe.',
          ]}
        />
        <P>
          Data da última avaliação: <time dateTime="2026-09-18">18 de setembro de 2026</time>. Método:
          autoavaliação — conduzida pela própria equipe, sem auditoria de terceiro independente.
        </P>

      </Section>

      <Section id="plataforma" title="8. Acessibilidade do material gerado">
        <P>
          Além da acessibilidade das nossas próprias telas, a finalidade do produto é gerar material
          pedagógico acessível. As adaptações aplicam, conforme o perfil selecionado, recursos como alto
          contraste, fontes ampliadas, espaçamento generoso, linguagem simplificada, estrutura visual
          previsível e descrição textual de imagens.
        </P>
        <Callout tone="amber" title="Revisão humana continua necessária">
          <p>
            O material é gerado por inteligência artificial e pode conter imprecisões. A adaptação
            automática não substitui a avaliação de um professor ou de um profissional de atendimento
            educacional especializado, nem garante, por si só, conformidade a normas técnicas específicas
            de acessibilidade de documentos.
          </p>
        </Callout>
      </Section>

      <Section id="relatar" title="9. Encontrou uma barreira? Fale conosco">
        <P>
          Se você encontrou dificuldade para usar qualquer parte do site ou da plataforma, queremos saber.
          Relatos de usuários são a forma mais eficaz de encontrarmos problemas que a avaliação interna não
          revela.
        </P>
        <P>Ao relatar, ajuda muito incluir:</P>
        <List
          items={[
            'O endereço da página onde ocorreu o problema.',
            'O que você tentava fazer e o que aconteceu.',
            'A tecnologia assistiva utilizada, se houver (leitor de tela, ampliador, navegação por teclado).',
            'Navegador e sistema operacional.',
          ]}
        />
        <Callout tone="teal" title="Canal de contato">
          <p>
            E-mail: <strong className="text-foreground">{CONTATO.acessibilidade}</strong>
          </p>
          <p>
            Prazo de resposta: <strong className="text-foreground">até 7 dias úteis</strong>
          </p>
          <p>
            Se a resposta não resolver sua demanda, você pode recorrer aos órgãos de defesa dos direitos da
            pessoa com deficiência.
          </p>
        </Callout>
      </Section>

      <Section id="legislacao" title="10. Base legal">
        <List
          items={[
            <>
              <strong className="text-foreground">Lei 13.146/2015</strong> — Lei Brasileira de Inclusão da
              Pessoa com Deficiência (Estatuto da Pessoa com Deficiência), cujo art. 63 determina a
              acessibilidade dos sítios da internet.
            </>,
            <>
              <strong className="text-foreground">Decreto 12.773/2025</strong> — dispõe sobre a educação
              inclusiva e o direito a materiais pedagógicos acessíveis e tecnologias assistivas.
            </>,
            <>
              <strong className="text-foreground">Decreto 5.296/2004</strong> — estabelece normas gerais
              para a acessibilidade de pessoas com deficiência ou mobilidade reduzida.
            </>,
            <>
              <strong className="text-foreground">WCAG 2.2</strong> — recomendação do W3C adotada como
              referência técnica internacional.
            </>,
          ]}
        />
      </Section>
    </LegalPage>
  );
}
