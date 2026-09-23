import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import { EMPRESA, CONTATO, RESPONSAVEIS, FORNECEDORES } from '@/components/legal/empresa';
import { Section, SubTitle, P, List, Table, Callout, Fill } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Como o AdaptaEDU coleta, usa, compartilha e protege dados pessoais de professores, escolas e estudantes, em conformidade com a LGPD (Lei 13.709/2018).',
  alternates: { canonical: 'https://adaptaedu.com/privacidade' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-09-14';

const toc = [
  { id: 'quem-somos', label: 'Quem somos e a quem esta política se aplica' },
  { id: 'papeis', label: 'Nossos papéis: quando somos controlador e quando somos operador' },
  { id: 'dados', label: 'Quais dados tratamos' },
  { id: 'sensiveis', label: 'Dados sensíveis e dados de crianças e adolescentes' },
  { id: 'finalidades', label: 'Para que usamos os dados e com que base legal' },
  { id: 'compartilhamento', label: 'Com quem compartilhamos dados' },
  { id: 'transferencia', label: 'Transferência internacional' },
  { id: 'retencao', label: 'Por quanto tempo guardamos' },
  { id: 'seguranca', label: 'Segurança da informação' },
  { id: 'direitos', label: 'Seus direitos como titular' },
  { id: 'cookies', label: 'Cookies e tecnologias semelhantes' },
  { id: 'alteracoes', label: 'Alterações nesta política' },
  { id: 'contato', label: 'Encarregado e canais de contato' },
];

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Esta política explica como a AdaptaEDU trata dados pessoais no site adaptaedu.com e na plataforma app.adaptaedu.com, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)."
      updatedAt={UPDATED_AT}
      toc={toc}
    >
      <Section id="quem-somos" title="1. Quem somos e a quem esta política se aplica">
        <P>
          A AdaptaEDU é uma plataforma de inteligência artificial que adapta materiais educacionais para
          perfis de acessibilidade, permitindo que professores e escolas produzam versões acessíveis de
          conteúdo pedagógico.
        </P>
        <P>
          Responsável pelo tratamento: <strong className="text-foreground">{EMPRESA.razaoSocial}</strong>,
          que opera sob o nome fantasia {EMPRESA.nomeFantasia}, inscrita no CNPJ sob o
          nº {EMPRESA.cnpj}, com sede em {EMPRESA.endereco}.
        </P>
        <P>Esta política se aplica a:</P>
        <List
          items={[
            <>
              <strong className="text-foreground">Visitantes do site</strong> adaptaedu.com, incluindo quem
              preenche o formulário de solicitação de demonstração.
            </>,
            <>
              <strong className="text-foreground">Usuários da plataforma</strong> app.adaptaedu.com —
              professores, coordenadores e administradores escolares.
            </>,
            <>
              <strong className="text-foreground">Escolas e redes de ensino</strong> contratantes dos planos
              institucionais.
            </>,
            <>
              <strong className="text-foreground">Estudantes</strong> cujos materiais pedagógicos são
              adaptados na plataforma, de forma indireta e sob responsabilidade da instituição de ensino.
            </>,
          ]}
        />
      </Section>

      <Section id="papeis" title="2. Nossos papéis: quando somos controlador e quando somos operador">
        <P>
          A LGPD distingue quem decide sobre o tratamento (<strong className="text-foreground">controlador</strong>)
          de quem trata dados em nome de outro (<strong className="text-foreground">operador</strong>). A
          AdaptaEDU atua nos dois papéis, dependendo do dado:
        </P>
        <Table
          head={['Situação', 'Nosso papel', 'Quem é o controlador']}
          rows={[
            [
              'Dados de navegação no site, formulário de demonstração, cadastro e conta de usuário, faturamento e suporte',
              <strong key="c" className="text-foreground">Controlador</strong>,
              'AdaptaEDU',
            ],
            [
              'Conteúdo pedagógico enviado por uma escola ou professor para adaptação, incluindo o perfil de acessibilidade selecionado',
              <strong key="o" className="text-foreground">Operador</strong>,
              'A instituição de ensino contratante (ou o professor, no plano individual)',
            ],
          ]}
        />
        <Callout tone="teal" title="O que isso significa na prática">
          <p>
            Quando uma escola envia material para adaptação, ela decide quais dados trata, com que
            finalidade e sob qual base legal. Nós processamos esse conteúdo seguindo as instruções da
            escola e o contrato firmado. Pedidos de titulares relacionados a esses dados devem ser
            dirigidos primeiro à instituição de ensino — nós auxiliamos a escola a respondê-los.
          </p>
        </Callout>
      </Section>

      <Section id="dados" title="3. Quais dados tratamos">
        <SubTitle>3.1 Dados que você nos fornece</SubTitle>
        <List
          items={[
            <>
              <strong className="text-foreground">Solicitação de demonstração:</strong> nome, e-mail,
              WhatsApp, nome da escola, ano/segmento de atuação e o registro do aceite dos termos.
            </>,
            <>
              <strong className="text-foreground">Cadastro e conta:</strong> nome, e-mail, senha
              (armazenada de forma cifrada), instituição vinculada e perfil de acesso.
            </>,
            <>
              <strong className="text-foreground">Conteúdo enviado:</strong> arquivos PDF, DOCX e imagens
              de material pedagógico, junto com o perfil de acessibilidade escolhido para a adaptação.
            </>,
            <>
              <strong className="text-foreground">Comunicações:</strong> mensagens enviadas ao suporte e
              respostas a pesquisas.
            </>,
            <>
              <strong className="text-foreground">Dados de contratação:</strong> informações de faturamento
              e cobrança dos planos pagos.
            </>,
          ]}
        />

        <SubTitle>3.2 Dados coletados automaticamente</SubTitle>
        <List
          items={[
            'Endereço IP, tipo e versão do navegador, sistema operacional e idioma.',
            'Páginas visitadas, origem do acesso, data e hora e tempo de permanência.',
            'Identificadores de sessão e preferências armazenadas em cookies.',
            'Registros de acesso à aplicação (logs), conforme exigido pelo Marco Civil da Internet.',
          ]}
        />

        <Callout tone="amber" title="O que não coletamos">
          <p>
            Não pedimos nem usamos dados de cartão de crédito diretamente — pagamentos, quando aplicável,
            são processados por <Fill>nome do provedor de pagamento</Fill>. Não vendemos dados pessoais
            e não os cedemos para publicidade de terceiros.
          </p>
        </Callout>
      </Section>

      <Section id="sensiveis" title="4. Dados sensíveis e dados de crianças e adolescentes">
        <Callout tone="amber" title="Ponto de atenção para escolas">
          <p>
            A escolha de um perfil de acessibilidade (TEA, TDAH, TPAC, Deficiência Intelectual, Baixa
            Visão, Dislexia, Discalculia, Disgrafia ou Altas Habilidades/Superdotação) pode revelar
            informação sobre a saúde ou condição de um estudante. Quando essa informação estiver associada
            a um aluno identificado ou identificável, ela é{' '}
            <strong className="text-foreground">dado pessoal sensível</strong> (art. 5º, II, da LGPD) e
            exige cuidado reforçado.
          </p>
        </Callout>
        <P>Por isso:</P>
        <List
          items={[
            <>
              <strong className="text-foreground">Recomendamos não identificar o aluno.</strong> A adaptação
              funciona plenamente sem nome, matrícula, foto ou qualquer identificador do estudante no
              material enviado. Oriente sua equipe a remover esses dados antes do envio.
            </>,
            <>
              <strong className="text-foreground">A responsabilidade pela base legal é da instituição.</strong>{' '}
              Cabe à escola, como controladora, garantir base legal adequada para tratar dados sensíveis de
              estudantes — incluindo, quando exigido, o consentimento específico e destacado dos pais ou
              responsáveis.
            </>,
            <>
              <strong className="text-foreground">Crianças e adolescentes.</strong> Nos termos do art. 14 da
              LGPD, o tratamento de dados de crianças e adolescentes deve ocorrer em seu melhor interesse.
              O tratamento de dados de crianças menores de 12 anos depende de consentimento específico
              dado por ao menos um dos pais ou responsável legal, salvo nas hipóteses legais de dispensa.
            </>,
            <>
              <strong className="text-foreground">A plataforma não é destinada ao uso direto por alunos.</strong>{' '}
              As contas são criadas para professores e equipes escolares.
            </>,
          ]}
        />
      </Section>

      <Section id="finalidades" title="5. Para que usamos os dados e com que base legal">
        <Table
          head={['Finalidade', 'Base legal (LGPD)']}
          rows={[
            ['Responder a solicitações de demonstração e contato comercial', 'Diligências preliminares a contrato, a pedido do titular (art. 7º, V)'],
            ['Criar e manter contas e permitir o uso da plataforma', 'Execução de contrato (art. 7º, V)'],
            ['Processar e adaptar o conteúdo pedagógico enviado', 'Execução de contrato com a instituição contratante (art. 7º, V)'],
            ['Faturamento, cobrança e obrigações fiscais', 'Cumprimento de obrigação legal (art. 7º, II)'],
            ['Segurança, prevenção a fraude e manutenção de logs de acesso', 'Cumprimento de obrigação legal e legítimo interesse (art. 7º, II e IX)'],
            ['Melhorar funcionalidades e medir uso agregado do produto', 'Legítimo interesse (art. 7º, IX)'],
            ['Envio de comunicações de marketing', 'Consentimento (art. 7º, I), revogável a qualquer momento'],
          ]}
        />
        <Callout tone="teal" title="Treinamento de modelos de IA">
          <p>
            O material enviado é processado{' '}
            <strong className="text-foreground">apenas para gerar a adaptação solicitada</strong>. Não
            utilizamos conteúdo pedagógico das escolas para treinar, ajustar ou avaliar modelos de
            inteligência artificial, próprios ou de terceiros.
          </p>
          <p>
            Os provedores de IA que utilizamos são contratados sob termos de API corporativa, em que o
            conteúdo enviado não alimenta o treinamento dos modelos deles.
          </p>
        </Callout>
      </Section>

      <Section id="compartilhamento" title="6. Com quem compartilhamos dados">
        <P>
          Não vendemos dados pessoais. Compartilhamos apenas o necessário, com as seguintes categorias de
          destinatários:
        </P>
        <Table
          head={['Categoria', 'Finalidade', 'Fornecedor', 'País de processamento']}
          rows={[
            ...FORNECEDORES.map(f => [f.categoria, f.finalidade, f.nome, f.pais]),
            ['Autoridades públicas', 'Cumprir ordem judicial ou obrigação legal', '—', 'Brasil'],
          ]}
        />
        <P>
          Todos os operadores contratados estão sujeitos a obrigações contratuais de confidencialidade e
          segurança compatíveis com esta política e com a LGPD.
        </P>
      </Section>

      <Section id="transferencia" title="7. Transferência internacional">
        <P>
          <strong className="text-foreground">Sim, há transferência internacional.</strong> Os
          fornecedores que sustentam a plataforma processam dados nos Estados Unidos:
        </P>
        <Table
          head={['Fornecedor', 'O que processa', 'País']}
          rows={FORNECEDORES.map(f => [f.nome, f.finalidade, f.pais])}
        />
        <P>
          A transferência ocorre para viabilizar a execução do contrato firmado com você ou com a sua
          instituição, e para a prestação do serviço que você solicitou — hipóteses previstas no art. 33
          da LGPD. Com cada fornecedor são adotadas as salvaguardas contratuais oferecidas para
          tratamento de dados pessoais, incluindo cláusulas de proteção de dados e compromissos de
          confidencialidade.
        </P>
        <Callout tone="teal" title="Para escolas públicas e processos de contratação">
          <p>
            Esta é a informação mais pedida em due diligence e licitação. A relação acima está sempre
            atualizada nesta página, e fornecemos sob solicitação a documentação contratual de cada
            operador — veja a{' '}
            <a href="/lgpd#documentos" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
              lista de documentos
            </a>
            .
          </p>
        </Callout>
      </Section>

      <Section id="retencao" title="8. Por quanto tempo guardamos">
        <Table
          head={['Dado', 'Prazo de retenção']}
          rows={[
            ['Solicitações de demonstração não convertidas', <Fill key="a">ex.: 24 meses</Fill>],
            ['Dados de conta ativa', 'Enquanto a conta existir'],
            ['Dados após encerramento da conta', <Fill key="b">prazo de exclusão ou anonimização</Fill>],
            ['Conteúdo enviado e adaptações geradas', <Fill key="c">prazo — e se a escola pode excluir a qualquer momento</Fill>],
            ['Registros de acesso à aplicação', 'No mínimo 6 meses (art. 15 do Marco Civil da Internet)'],
            ['Documentos fiscais e contratuais', 'Conforme prazos legais aplicáveis'],
          ]}
        />
        <P>
          Encerrado o prazo, os dados são excluídos ou anonimizados, salvo quando sua conservação for
          autorizada pelo art. 16 da LGPD.
        </P>
      </Section>

      <Section id="seguranca" title="9. Segurança da informação">
        <P>
          Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não
          autorizados e situações acidentais ou ilícitas de destruição, perda, alteração ou difusão:
        </P>
        <List
          items={[
            'Criptografia em trânsito (HTTPS/TLS) em todo o site e na plataforma.',
            'Criptografia dos dados armazenados e senhas protegidas por hash.',
            'Isolamento de dados por instituição, com controle de acesso por perfil de usuário.',
            'Registro de acessos e operações relevantes na plataforma.',
            'Revisão periódica de permissões e de fornecedores.',
          ]}
        />
        <P>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares,
          comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados em prazo
          razoável, conforme o art. 48 da LGPD. Quando o incidente envolver dados sob controle de uma
          escola, comunicaremos a instituição sem demora injustificada.
        </P>
      </Section>

      <Section id="direitos" title="10. Seus direitos como titular">
        <P>O art. 18 da LGPD garante a você, a qualquer momento e mediante requisição:</P>
        <List
          items={[
            'Confirmação da existência de tratamento e acesso aos seus dados.',
            'Correção de dados incompletos, inexatos ou desatualizados.',
            'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.',
            'Portabilidade a outro fornecedor, observados os segredos comercial e industrial.',
            'Eliminação dos dados tratados com base no seu consentimento.',
            'Informação sobre as entidades com as quais compartilhamos seus dados.',
            'Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.',
            'Revogação do consentimento e oposição a tratamento feito com base em legítimo interesse.',
          ]}
        />
        <Callout tone="teal" title="Como exercer">
          <p>
            Escreva para <strong className="text-foreground">{CONTATO.privacidade}</strong>. Responderemos no prazo legal. Podemos pedir
            informações adicionais para confirmar sua identidade antes de atender ao pedido.
          </p>
          <p>
            Se o seu pedido se referir a material enviado por uma escola, encaminharemos a solicitação à
            instituição controladora e auxiliaremos na resposta.
          </p>
        </Callout>
      </Section>

      <Section id="cookies" title="11. Cookies e tecnologias semelhantes">
        <P>Utilizamos cookies para:</P>
        <List
          items={[
            <>
              <strong className="text-foreground">Cookies necessários:</strong> manter sua sessão
              autenticada e garantir a segurança da navegação. Não podem ser desativados.
            </>,
            <>
              <strong className="text-foreground">Cookies de preferência:</strong> lembrar escolhas como
              idioma e configurações de exibição.
            </>,
            <>
              <strong className="text-foreground">Cookies analíticos:</strong> entender o uso do site de
              forma agregada. <Fill>confirmar quais ferramentas de análise são usadas</Fill>
            </>,
          ]}
        />
        <P>
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. A desativação de
          cookies necessários pode impedir o funcionamento de partes da plataforma.
        </P>
      </Section>

      <Section id="alteracoes" title="12. Alterações nesta política">
        <P>
          Podemos atualizar esta política para refletir mudanças legais, técnicas ou de produto. A data da
          última atualização aparece no topo desta página. Alterações relevantes serão comunicadas por
          e-mail ou por aviso na plataforma antes de entrarem em vigor.
        </P>
      </Section>

      <Section id="contato" title="13. Encarregado e canais de contato">
        <P>
          Nosso encarregado pelo tratamento de dados pessoais (DPO), conforme o art. 41 da LGPD, é{' '}
          <strong className="text-foreground">{RESPONSAVEIS.encarregado}</strong>, que pode ser contatado
          em {CONTATO.privacidade}.
        </P>
        <P>
          Para dúvidas gerais sobre privacidade: {CONTATO.geral}. Endereço para
          correspondência: {EMPRESA.endereco}.
        </P>
        <P>
          Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) pelos
          canais oficiais do órgão.
        </P>
      </Section>
    </LegalPage>
  );
}
