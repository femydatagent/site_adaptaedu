import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import { Section, SubTitle, P, List, Table, Callout, Fill } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Condições de uso da plataforma AdaptaEDU: planos, cotas de adaptação, responsabilidades do usuário, propriedade intelectual, cancelamento e limitações.',
  alternates: { canonical: 'https://adaptaedu.com/termos' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-09-14';

const toc = [
  { id: 'aceite', label: 'Aceite dos termos' },
  { id: 'servico', label: 'O que a AdaptaEDU oferece' },
  { id: 'conta', label: 'Conta, acesso e uso institucional' },
  { id: 'planos', label: 'Planos, cotas e pagamento' },
  { id: 'responsabilidades', label: 'Responsabilidades de quem usa' },
  { id: 'conteudo', label: 'Conteúdo enviado e propriedade intelectual' },
  { id: 'ia', label: 'Natureza da adaptação por inteligência artificial' },
  { id: 'proibicoes', label: 'Uso proibido' },
  { id: 'disponibilidade', label: 'Disponibilidade e suporte' },
  { id: 'limitacao', label: 'Limitação de responsabilidade' },
  { id: 'cancelamento', label: 'Vigência, cancelamento e rescisão' },
  { id: 'privacidade', label: 'Proteção de dados' },
  { id: 'gerais', label: 'Disposições gerais e foro' },
];

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      subtitle="Estes termos regem o uso do site adaptaedu.com e da plataforma app.adaptaedu.com. Ao criar uma conta ou utilizar os serviços, você concorda com as condições abaixo."
      updatedAt={UPDATED_AT}
      toc={toc}
    >
      <Section id="aceite" title="1. Aceite dos termos">
        <P>
          Estes Termos de Uso constituem um contrato entre você — ou a instituição de ensino que você
          representa — e <Fill>razão social completa</Fill>, CNPJ <Fill>CNPJ</Fill> (&ldquo;AdaptaEDU&rdquo;).
        </P>
        <P>
          Ao criar uma conta, solicitar uma demonstração ou utilizar qualquer funcionalidade da
          plataforma, você declara que leu, entendeu e aceita estes termos e a{' '}
          <a href="/privacidade" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Política de Privacidade
          </a>
          . Se você não concorda, não utilize os serviços.
        </P>
        <P>
          Se você aceita estes termos em nome de uma escola ou rede de ensino, declara ter poderes para
          vincular essa instituição.
        </P>
      </Section>

      <Section id="servico" title="2. O que a AdaptaEDU oferece">
        <P>
          A AdaptaEDU é uma plataforma que utiliza inteligência artificial para adaptar materiais
          pedagógicos a perfis de acessibilidade. O usuário envia um arquivo (PDF, DOCX ou imagem),
          seleciona um perfil e recebe uma versão adaptada, exportável em PDF ou DOCX.
        </P>
        <P>Os perfis de acessibilidade atualmente suportados são:</P>
        <List
          items={[
            'TEA — Transtorno do Espectro Autista',
            'TDAH — Transtorno de Déficit de Atenção e Hiperatividade',
            'TPAC — Transtorno de Processamento Auditivo Central',
            'DI — Deficiência Intelectual',
            'Baixa Visão',
            'Dislexia',
            'Discalculia',
            'Disgrafia',
            'AH/SD — Altas Habilidades / Superdotação',
          ]}
        />
        <P>
          Podemos adicionar, alterar ou descontinuar funcionalidades e perfis. Mudanças que reduzam
          significativamente o serviço contratado serão comunicadas com antecedência razoável.
        </P>
      </Section>

      <Section id="conta" title="3. Conta, acesso e uso institucional">
        <List
          items={[
            'Você é responsável pela veracidade das informações do cadastro e por mantê-las atualizadas.',
            'As credenciais são pessoais e intransferíveis. Você responde por todas as atividades realizadas com a sua conta.',
            'Comunique-nos imediatamente qualquer uso não autorizado ou suspeita de comprometimento das credenciais.',
            'Nos planos institucionais, a escola administra os acessos de sua equipe e responde pelo uso feito por seus usuários, incluindo a inclusão e a remoção de professores.',
            'Podemos suspender contas que violem estes termos, com aviso prévio sempre que possível.',
          ]}
        />
      </Section>

      <Section id="planos" title="4. Planos, cotas e pagamento">
        <Table
          head={['Plano', 'Preço', 'Cota mensal de adaptações']}
          rows={[
            ['Professor', 'R$ 100/mês', '30 adaptações/mês, com 3 adaptações teste incluídas'],
            ['Escola', 'R$ 1.250/mês', '250 adaptações/mês, com 5 adaptações teste incluídas'],
            ['Rede de Ensino', 'Sob consulta', 'Definida em contrato'],
          ]}
        />
        <SubTitle>4.1 Como as cotas funcionam</SubTitle>
        <List
          items={[
            'A cota é contada por ciclo mensal de cobrança e não é cumulativa: adaptações não utilizadas não são transferidas para o mês seguinte.',
            'As adaptações teste incluídas destinam-se à avaliação inicial da plataforma e são concedidas uma única vez por conta.',
            <>
              Excedentes à cota <Fill>definir: são bloqueados, cobrados à parte (valor por adaptação) ou negociados</Fill>.
            </>,
          ]}
        />

        <SubTitle>4.2 Cobrança, reajuste e cancelamento</SubTitle>
        <List
          items={[
            'Os valores são expressos em reais e cobrados de forma recorrente, conforme o plano escolhido.',
            <>
              Formas de pagamento aceitas e a data de vencimento constam na contratação.{' '}
              <Fill>listar meios de pagamento</Fill>
            </>,
            <>
              Em caso de inadimplência, o acesso poderá ser suspenso após{' '}
              <Fill>prazo, ex.: 10 dias</Fill> de atraso, mediante aviso.
            </>,
            <>
              Os preços podem ser reajustados anualmente, com comunicação prévia de no mínimo{' '}
              <Fill>prazo, ex.: 30 dias</Fill>.
            </>,
            'Alterações de preço não se aplicam a ciclos já pagos.',
          ]}
        />

        <Callout tone="teal" title="Direito de arrependimento">
          <p>
            Nas contratações feitas fora do estabelecimento comercial por pessoa física consumidora,
            aplica-se o prazo de 7 dias previsto no art. 49 do Código de Defesa do Consumidor, contado da
            contratação, para desistência com devolução dos valores pagos.
          </p>
        </Callout>
      </Section>

      <Section id="responsabilidades" title="5. Responsabilidades de quem usa">
        <P>Ao enviar material para adaptação, você declara e se responsabiliza por:</P>
        <List
          items={[
            <>
              <strong className="text-foreground">Ter direito sobre o conteúdo enviado</strong> — seja por
              autoria própria, licença, autorização do titular ou por se enquadrar em limitação legal ao
              direito autoral.
            </>,
            <>
              <strong className="text-foreground">Não incluir dados pessoais desnecessários de alunos.</strong>{' '}
              Recomendamos remover nome, matrícula, foto e qualquer identificador do estudante antes do
              envio — a adaptação funciona sem esses dados.
            </>,
            <>
              <strong className="text-foreground">Ter base legal adequada</strong> para o tratamento de
              dados pessoais de estudantes, incluindo dados sensíveis e dados de crianças e adolescentes,
              conforme detalhado na{' '}
              <a href="/lgpd" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
                página sobre LGPD
              </a>
              .
            </>,
            <>
              <strong className="text-foreground">Revisar pedagogicamente o material gerado</strong> antes
              de entregá-lo aos alunos.
            </>,
          ]}
        />
      </Section>

      <Section id="conteudo" title="6. Conteúdo enviado e propriedade intelectual">
        <SubTitle>6.1 Seu conteúdo continua seu</SubTitle>
        <P>
          Você mantém a titularidade do material que envia e das adaptações geradas a partir dele. Você
          nos concede apenas a licença limitada, não exclusiva e temporária necessária para hospedar,
          processar e gerar a adaptação solicitada, bem como para prestar suporte.
        </P>
        <P>
          <Fill>
            Confirmar: o conteúdo enviado é usado para treinar modelos de IA? Recomendamos declarar
            expressamente que não é
          </Fill>
        </P>

        <SubTitle>6.2 Nossa propriedade</SubTitle>
        <P>
          A plataforma, sua interface, marca, logotipos, código, regras de adaptação e documentação são de
          titularidade da AdaptaEDU e protegidos pela legislação de propriedade intelectual. Estes termos
          não transferem qualquer direito sobre eles.
        </P>
      </Section>

      <Section id="ia" title="7. Natureza da adaptação por inteligência artificial">
        <Callout tone="amber" title="A adaptação é um apoio ao professor, não um substituto">
          <p>
            O material adaptado é gerado automaticamente por modelos de inteligência artificial. Como
            qualquer sistema dessa natureza, o resultado pode conter imprecisões, omissões ou escolhas
            pedagógicas inadequadas ao contexto específico de um aluno.
          </p>
          <p>
            <strong className="text-foreground">
              O professor ou a equipe pedagógica deve revisar todo material antes do uso com estudantes.
            </strong>{' '}
            A AdaptaEDU não substitui avaliação pedagógica, atendimento educacional especializado, laudo,
            diagnóstico ou orientação de profissional de saúde ou de educação especial.
          </p>
        </Callout>
        <P>
          Não garantimos que a adaptação atenda integralmente a requisitos específicos de acessibilidade,
          normas técnicas ou exigências de determinada rede de ensino sem revisão humana.
        </P>
      </Section>

      <Section id="proibicoes" title="8. Uso proibido">
        <P>É vedado utilizar a plataforma para:</P>
        <List
          items={[
            'Enviar conteúdo ilícito, discriminatório, violento ou que viole direitos de terceiros.',
            'Enviar material protegido por direito autoral sem autorização ou amparo legal.',
            'Tentar acessar contas, dados ou áreas da plataforma sem autorização.',
            'Realizar engenharia reversa, copiar ou tentar extrair o funcionamento interno do sistema.',
            'Automatizar acessos de forma que comprometa a estabilidade do serviço, ou burlar cotas e limites do plano contratado.',
            'Revender, sublicenciar ou disponibilizar o serviço a terceiros fora do escopo contratado.',
            'Utilizar a plataforma para finalidade diversa da adaptação de material pedagógico.',
          ]}
        />
      </Section>

      <Section id="disponibilidade" title="9. Disponibilidade e suporte">
        <P>
          Empenhamo-nos para manter a plataforma disponível de forma contínua, mas o serviço pode ser
          interrompido para manutenção programada, atualizações ou por eventos fora do nosso controle.
        </P>
        <List
          items={[
            <>
              Manutenções programadas serão comunicadas com antecedência quando previsíveis.{' '}
              <Fill>definir janela de manutenção, se houver</Fill>
            </>,
            <>
              Canais e prazos de atendimento por plano: <Fill>e-mail, prazo de resposta por plano</Fill>
            </>,
            <>
              Compromissos de disponibilidade (SLA) aplicam-se apenas ao plano Rede de Ensino, nos termos
              do contrato específico. <Fill>SLA, se houver</Fill>
            </>,
          ]}
        />
      </Section>

      <Section id="limitacao" title="10. Limitação de responsabilidade">
        <P>
          Na máxima extensão permitida pela lei aplicável, e sem prejuízo dos direitos assegurados ao
          consumidor pelo Código de Defesa do Consumidor:
        </P>
        <List
          items={[
            'A AdaptaEDU não responde por decisões pedagógicas tomadas com base no material adaptado sem revisão humana.',
            'Não respondemos por conteúdo enviado pelos usuários nem por eventual violação de direitos de terceiros decorrente desse envio.',
            'Não respondemos por indisponibilidade causada por falha de conexão do usuário, de terceiros ou por caso fortuito e força maior.',
            <>
              Salvo em caso de dolo, nossa responsabilidade total fica limitada ao valor efetivamente pago
              pelo contratante nos <Fill>ex.: 12</Fill> meses anteriores ao evento que originou a
              reclamação.
            </>,
          ]}
        />
      </Section>

      <Section id="cancelamento" title="11. Vigência, cancelamento e rescisão">
        <List
          items={[
            'Os planos vigoram por prazo indeterminado, renovando-se automaticamente a cada ciclo até o cancelamento.',
            <>
              Você pode cancelar a qualquer momento por <Fill>canal de cancelamento</Fill>. O acesso
              permanece até o fim do ciclo já pago, sem reembolso proporcional, salvo disposição legal em
              contrário.
            </>,
            'Podemos rescindir o contrato em caso de violação destes termos, inadimplência não sanada ou uso que comprometa a segurança da plataforma.',
            <>
              Após o encerramento, o conteúdo e as adaptações ficam disponíveis para exportação por{' '}
              <Fill>prazo, ex.: 30 dias</Fill>, e depois são excluídos ou anonimizados conforme a Política
              de Privacidade.
            </>,
          ]}
        />
      </Section>

      <Section id="privacidade" title="12. Proteção de dados">
        <P>
          O tratamento de dados pessoais está descrito na{' '}
          <a href="/privacidade" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Política de Privacidade
          </a>
          , e as responsabilidades específicas de escolas e professores quanto a dados de estudantes estão
          detalhadas na{' '}
          <a href="/lgpd" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            página sobre LGPD
          </a>
          . Ambas integram estes termos.
        </P>
      </Section>

      <Section id="gerais" title="13. Disposições gerais e foro">
        <List
          items={[
            'Podemos alterar estes termos. Mudanças relevantes serão comunicadas com antecedência razoável, e o uso continuado após a vigência caracteriza aceite.',
            'A invalidade de uma cláusula não afeta as demais.',
            'A tolerância quanto ao descumprimento de qualquer obrigação não constitui novação nem renúncia de direito.',
            'Estes termos são regidos pelas leis da República Federativa do Brasil.',
            <>
              Fica eleito o foro da comarca de <Fill>cidade/UF</Fill> para dirimir controvérsias,
              ressalvado ao consumidor o direito de acionar o foro de seu domicílio.
            </>,
          ]}
        />
        <P>
          Dúvidas sobre estes termos: <Fill>e-mail de contato</Fill>.
        </P>
      </Section>
    </LegalPage>
  );
}
