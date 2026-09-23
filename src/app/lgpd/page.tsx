import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import { EMPRESA, CONTATO, RESPONSAVEIS, FORNECEDORES } from '@/components/legal/empresa';
import { Section, SubTitle, P, List, Table, Callout, Fill } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'LGPD — Proteção de Dados na Educação',
  description:
    'Como o AdaptaEDU atende à Lei Geral de Proteção de Dados: papéis de controlador e operador, dados sensíveis de estudantes, dados de crianças e adolescentes e direitos dos titulares.',
  alternates: { canonical: 'https://adaptaedu.com/lgpd' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-09-14';

const toc = [
  { id: 'resumo', label: 'Resumo para gestores escolares' },
  { id: 'papeis', label: 'Quem é controlador e quem é operador' },
  { id: 'sensiveis', label: 'Perfis de acessibilidade são dados sensíveis' },
  { id: 'criancas', label: 'Dados de crianças e adolescentes' },
  { id: 'minimizacao', label: 'Minimização: o que não enviar' },
  { id: 'escola', label: 'Checklist de conformidade para a escola' },
  { id: 'medidas', label: 'Medidas técnicas e organizacionais da AdaptaEDU' },
  { id: 'direitos', label: 'Direitos dos titulares e como atendê-los' },
  { id: 'incidentes', label: 'Incidentes de segurança' },
  { id: 'subcontratados', label: 'Subcontratados e transferência internacional' },
  { id: 'documentos', label: 'Documentos que disponibilizamos' },
  { id: 'contato', label: 'Encarregado (DPO)' },
];

export default function LgpdPage() {
  return (
    <LegalPage
      title="LGPD na prática"
      subtitle="Uma plataforma que adapta material para estudantes com deficiência lida com dados especialmente protegidos. Esta página explica como dividimos responsabilidades com as escolas e o que cada parte precisa fazer."
      updatedAt={UPDATED_AT}
      toc={toc}
    >
      <Section id="resumo" title="1. Resumo para gestores escolares">
        <Callout tone="teal" title="Os quatro pontos essenciais">
          <p>
            <strong className="text-foreground">1.</strong> Sua escola é a{' '}
            <strong className="text-foreground">controladora</strong> dos dados dos alunos. A AdaptaEDU é{' '}
            <strong className="text-foreground">operadora</strong>: processamos o material seguindo as suas
            instruções.
          </p>
          <p>
            <strong className="text-foreground">2.</strong> Selecionar um perfil de acessibilidade para um
            aluno identificável trata <strong className="text-foreground">dado pessoal sensível</strong>,
            que exige base legal específica.
          </p>
          <p>
            <strong className="text-foreground">3.</strong> A forma mais segura de usar a plataforma é{' '}
            <strong className="text-foreground">não identificar o aluno</strong> no material enviado. A
            adaptação funciona igualmente bem sem nome, matrícula ou foto.
          </p>
          <p>
            <strong className="text-foreground">4.</strong> Pedidos de pais e responsáveis sobre dados de
            alunos devem ser dirigidos à escola. Nós auxiliamos a responder.
          </p>
        </Callout>
      </Section>

      <Section id="papeis" title="2. Quem é controlador e quem é operador">
        <P>
          A LGPD (Lei 13.709/2018) separa quem toma as decisões sobre o tratamento de quem executa o
          tratamento por conta de outro. Essa divisão define quem responde por quê.
        </P>
        <Table
          head={['Dado', 'Controlador', 'Operador']}
          rows={[
            ['Material pedagógico enviado para adaptação e perfil de acessibilidade selecionado', 'A escola (ou o professor, no plano individual)', 'AdaptaEDU'],
            ['Cadastro dos professores e administradores da escola', 'A escola', 'AdaptaEDU'],
            ['Dados de contato de quem solicita demonstração pelo site', 'AdaptaEDU', '—'],
            ['Conta, faturamento e cobrança do contratante', 'AdaptaEDU', '—'],
            ['Logs de acesso e registros de segurança da plataforma', 'AdaptaEDU', '—'],
          ]}
        />
        <P>
          Como operadora, a AdaptaEDU trata os dados apenas conforme as instruções da instituição
          controladora e o contrato firmado, nos termos dos arts. 39 e seguintes da LGPD. Não usamos o
          conteúdo escolar para finalidades próprias.
        </P>
      </Section>

      <Section id="sensiveis" title="3. Perfis de acessibilidade são dados sensíveis">
        <Callout tone="amber" title="Por que isso muda o nível de cuidado">
          <p>
            O art. 5º, II, da LGPD classifica como{' '}
            <strong className="text-foreground">dado pessoal sensível</strong> a informação referente à
            saúde de uma pessoa natural. Registrar que determinado aluno precisa de material adaptado para
            TEA, TDAH, Dislexia, Deficiência Intelectual ou qualquer outro perfil revela informação dessa
            natureza.
          </p>
          <p>
            Dados sensíveis só podem ser tratados nas hipóteses do art. 11 — que são mais restritas do que
            as bases legais comuns do art. 7º — e demandam medidas de segurança proporcionalmente mais
            rigorosas.
          </p>
        </Callout>
        <SubTitle>3.1 Quando o dado deixa de ser pessoal</SubTitle>
        <P>
          Se o material enviado não permite identificar o estudante — nem diretamente, nem por cruzamento
          razoável de informações — não há tratamento de dado pessoal, e o regime da LGPD não se aplica
          àquele conteúdo. É por isso que a minimização é a medida mais eficaz que sua escola pode adotar.
        </P>
        <SubTitle>3.2 Bases legais aplicáveis quando há identificação</SubTitle>
        <P>
          Quando a identificação for inevitável, cabe à escola definir e documentar a base legal. As
          hipóteses do art. 11 mais comumente invocadas em contexto educacional são:
        </P>
        <List
          items={[
            'Consentimento específico e destacado do titular ou de seu responsável legal, para finalidades determinadas (art. 11, I).',
            'Cumprimento de obrigação legal ou regulatória pelo controlador (art. 11, II, "a").',
            'Garantia da prevenção à fraude e à segurança do titular (art. 11, II, "g").',
          ]}
        />
        <P>
          A escolha da base legal é decisão da instituição controladora, preferencialmente com apoio do seu
          encarregado e da assessoria jurídica.
        </P>
      </Section>

      <Section id="criancas" title="4. Dados de crianças e adolescentes">
        <P>
          O art. 14 da LGPD estabelece que o tratamento de dados de crianças e adolescentes deve ser feito
          sempre <strong className="text-foreground">em seu melhor interesse</strong>.
        </P>
        <List
          items={[
            <>
              <strong className="text-foreground">Crianças (até 12 anos incompletos):</strong> o tratamento
              depende de consentimento específico e em destaque dado por ao menos um dos pais ou pelo
              responsável legal, ressalvadas as hipóteses legais de dispensa previstas no § 3º do art. 14.
            </>,
            <>
              <strong className="text-foreground">Adolescentes (12 a 18 anos):</strong> aplica-se o
              princípio do melhor interesse, com base legal definida conforme o caso pela instituição.
            </>,
            <>
              <strong className="text-foreground">Transparência reforçada:</strong> as informações sobre o
              tratamento devem ser fornecidas de forma simples, clara e acessível, adequada ao
              entendimento de pais e responsáveis.
            </>,
            <>
              <strong className="text-foreground">Vedação de condicionamento:</strong> não se pode
              condicionar a participação do aluno em atividade a fornecimento de dados além do necessário.
            </>,
          ]}
        />
        <P>
          A plataforma AdaptaEDU não é destinada ao uso direto por estudantes: as contas são criadas para
          professores, coordenadores e administradores escolares.
        </P>
      </Section>

      <Section id="minimizacao" title="5. Minimização: o que não enviar">
        <P>
          O princípio da necessidade (art. 6º, III) exige limitar o tratamento ao mínimo necessário. Antes
          de enviar um material para adaptação, remova:
        </P>
        <List
          items={[
            'Nome completo, apelido ou iniciais que identifiquem o aluno.',
            'Número de matrícula, RA, CPF ou qualquer código identificador individual.',
            'Fotografias, imagens do aluno ou de sua produção assinada.',
            'Endereço, telefone, e-mail ou dados de contato da família.',
            'Laudos, relatórios médicos, pareceres de avaliação e diagnósticos anexados ao material.',
            'Anotações que associem um aluno específico a uma condição de saúde.',
          ]}
        />
        <Callout tone="teal" title="Na prática">
          <p>
            A adaptação é feita sobre o <strong className="text-foreground">conteúdo pedagógico</strong> —
            o texto, os exercícios, as imagens do material. O perfil de acessibilidade é escolhido como
            parâmetro da adaptação, não como registro de um aluno. Enviar &ldquo;Lista de exercícios de
            matemática, 5º ano&rdquo; com o perfil TEA selecionado não identifica ninguém.
          </p>
        </Callout>
      </Section>

      <Section id="escola" title="6. Checklist de conformidade para a escola">
        <P>Itens que a instituição controladora deve providenciar:</P>
        <List
          items={[
            'Designar um encarregado (DPO) e divulgar seu contato aos titulares.',
            'Mapear o tratamento de dados de estudantes e registrar as operações realizadas (art. 37).',
            'Definir e documentar a base legal para o tratamento de dados sensíveis de alunos.',
            'Obter o consentimento dos pais ou responsáveis quando essa for a base legal aplicável, de forma específica e destacada.',
            'Informar pais e responsáveis sobre o uso de ferramentas de adaptação de material, em linguagem acessível.',
            'Orientar os professores sobre a política de minimização antes de liberar o acesso à plataforma.',
            'Revisar periodicamente quais professores mantêm acesso e remover contas de quem deixou a instituição.',
            'Manter procedimento para receber e responder pedidos de titulares dentro do prazo legal.',
            'Formalizar com a AdaptaEDU o acordo de tratamento de dados como operadora.',
          ]}
        />
      </Section>

      <Section id="medidas" title="7. Medidas técnicas e organizacionais da AdaptaEDU">
        <P>Como operadora, adotamos as seguintes medidas (arts. 46 a 49 da LGPD):</P>
        <List
          items={[
            'Criptografia em trânsito (HTTPS/TLS) em todo o site e na plataforma.',
            'Criptografia dos dados armazenados e senhas protegidas por algoritmo de hash.',
            'Isolamento lógico dos dados por instituição, de modo que uma escola não acesse o conteúdo de outra.',
            'Controle de acesso baseado em perfil, com o mínimo de privilégio necessário.',
            'Registro de acessos e de operações relevantes, para rastreabilidade.',
            'Obrigações contratuais de confidencialidade e segurança impostas aos nossos subcontratados.',
            'Revisão periódica de permissões internas e de fornecedores.',
            'Processo definido de comunicação de incidentes à instituição controladora.',
          ]}
        />
      </Section>

      <Section id="direitos" title="8. Direitos dos titulares e como atendê-los">
        <P>
          O art. 18 da LGPD assegura aos titulares — aqui, principalmente estudantes representados por
          seus responsáveis — o direito de confirmar o tratamento, acessar, corrigir, anonimizar, bloquear,
          eliminar e portar dados, além de obter informação sobre compartilhamentos e revogar
          consentimento.
        </P>
        <Table
          head={['Quem pede', 'A quem dirigir', 'Nosso papel']}
          rows={[
            ['Pais ou responsáveis por aluno', 'À escola, que é a controladora', 'Apoiamos a escola tecnicamente para localizar, corrigir ou eliminar os dados'],
            ['Professor sobre sua própria conta', 'À AdaptaEDU e à escola, conforme o dado', 'Atendemos diretamente os dados sob nossa controladoria'],
            ['Quem preencheu o formulário do site', 'À AdaptaEDU', 'Atendemos diretamente'],
          ]}
        />
        <P>
          Se recebermos diretamente um pedido relativo a dados sob controle de uma escola, encaminharemos a
          solicitação à instituição sem demora injustificada e informaremos o titular do encaminhamento.
        </P>
      </Section>

      <Section id="incidentes" title="9. Incidentes de segurança">
        <P>
          Na hipótese de incidente de segurança que possa acarretar risco ou dano relevante aos titulares,
          o art. 48 da LGPD determina a comunicação à ANPD e aos titulares afetados em prazo razoável.
        </P>
        <List
          items={[
            <>
              Comunicaremos a instituição controladora em até{' '}
              <strong className="text-foreground">48 horas</strong> a partir da ciência do incidente.
            </>,
            'A comunicação incluirá a natureza dos dados afetados, os titulares envolvidos, as medidas técnicas adotadas e os riscos identificados.',
            'Apoiaremos a escola na avaliação do risco e na eventual comunicação à ANPD e aos titulares.',
            'Como controladores dos nossos próprios dados, faremos a comunicação diretamente quando cabível.',
          ]}
        />
      </Section>

      <Section id="subcontratados" title="10. Subcontratados e transferência internacional">
        <P>
          Utilizamos fornecedores de infraestrutura, banco de dados e processamento por inteligência
          artificial para operar a plataforma. Todos estão sujeitos a obrigações contratuais de
          confidencialidade e segurança.
        </P>
        <Table
          head={['Subcontratado', 'Função', 'País de processamento']}
          rows={FORNECEDORES.map(f => [f.nome, f.finalidade, f.pais])}
        />
        <P>
          Todos processam nos Estados Unidos. A transferência se apoia no art. 33 da LGPD — execução de
          contrato e prestação do serviço solicitado — com as salvaguardas contratuais de proteção de
          dados oferecidas por cada fornecedor.
        </P>
        <Callout tone="teal" title="Conteúdo escolar e treinamento de modelos">
          <p>
            O material enviado pelas escolas é processado apenas para gerar a adaptação. Não é usado
            para treinar, ajustar ou avaliar modelos de IA, nossos ou dos provedores contratados.
          </p>
        </Callout>
        <P>
          Informaremos a instituição controladora antes de substituir ou incluir subcontratado que trate
          conteúdo escolar, permitindo manifestação prévia.
        </P>
      </Section>

      <Section id="documentos" title="11. Documentos que disponibilizamos">
        <P>
          Para processos de contratação, due diligence e licitação, podemos fornecer mediante solicitação:
        </P>
        <List
          items={[
            'Acordo de tratamento de dados pessoais (AdaptaEDU como operadora).',
            'Relação atualizada de subcontratados e respectivos países de processamento.',
            'Descrição das medidas técnicas e organizacionais de segurança.',
            'Informações para apoiar o Relatório de Impacto à Proteção de Dados (RIPD) elaborado pela instituição.',
            'Cláusulas de confidencialidade e de responsabilidade em caso de incidente.',
          ]}
        />
        <P>
          Solicite em <strong className="text-foreground">{CONTATO.privacidade}</strong>.
        </P>
      </Section>

      <Section id="contato" title="12. Encarregado (DPO)">
        <P>
          Encarregado pelo tratamento de dados pessoais da AdaptaEDU, nos termos do art. 41 da LGPD:{' '}
          <strong className="text-foreground">{RESPONSAVEIS.encarregado}</strong> — {CONTATO.privacidade}.
        </P>
        <P>
          Controlador: {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}, {EMPRESA.endereco}.
        </P>
        <P>
          Consulte também a{' '}
          <a href="/privacidade" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Política de Privacidade
          </a>{' '}
          e os{' '}
          <a href="/termos" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Termos de Uso
          </a>
          . Reclamações também podem ser dirigidas à Autoridade Nacional de Proteção de Dados (ANPD).
        </P>
      </Section>
    </LegalPage>
  );
}
