import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import {
  EMPRESA, CONTATO, RESPONSAVEIS, FORNECEDORES,
  FERRAMENTAS_ANALISE, PROVEDOR_PAGAMENTO,
} from '@/components/legal/empresa';
import { Section, SubTitle, P, List, Table, Callout } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Como o AdaptaEDU coleta, usa, compartilha e protege dados pessoais de professores, escolas e estudantes — no site, na plataforma e no WhatsApp — em conformidade com a LGPD (Lei 13.709/2018).',
  alternates: { canonical: 'https://adaptaedu.com/privacidade' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-10-22';

const toc = [
  { id: 'quem-somos', label: 'Quem somos e a quem esta política se aplica' },
  { id: 'papeis', label: 'Nossos papéis: quando somos controlador e quando somos operador' },
  { id: 'dados', label: 'Quais dados tratamos' },
  { id: 'sensiveis', label: 'Dados sensíveis e dados de crianças e adolescentes' },
  { id: 'finalidades', label: 'Para que usamos os dados e com que base legal' },
  { id: 'whatsapp', label: 'Uso pelo WhatsApp Business' },
  { id: 'ia', label: 'Como a inteligência artificial trata o material' },
  { id: 'compartilhamento', label: 'Com quem compartilhamos dados' },
  { id: 'transferencia', label: 'Transferência internacional' },
  { id: 'retencao', label: 'Por quanto tempo guardamos' },
  { id: 'seguranca', label: 'Segurança da informação' },
  { id: 'direitos', label: 'Seus direitos como titular' },
  { id: 'cookies', label: 'Cookies e tecnologias semelhantes' },
  { id: 'comunicacoes', label: 'Comunicações que enviamos' },
  { id: 'alteracoes', label: 'Alterações nesta política' },
  { id: 'contato', label: 'Encarregado e canais de contato' },
];

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Esta política explica como a AdaptaEDU trata dados pessoais no site adaptaedu.com, na plataforma app.adaptaedu.com e no canal de WhatsApp, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)."
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
              <strong className="text-foreground">Professores que usam o WhatsApp</strong> da própria
              escola conectado à plataforma, conforme a seção 6.
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
              'Dados de navegação no site, formulário de demonstração, cadastro e conta de usuário, canal de WhatsApp (número do professor e vínculo com a escola), faturamento e suporte',
              <strong key="c" className="text-foreground">Controlador</strong>,
              'AdaptaEDU',
            ],
            [
              'Conteúdo pedagógico enviado para adaptação e os campos do pedido (identificação do aluno, ano escolar, matéria, tipo de conteúdo e perfil de acessibilidade)',
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
              (armazenada de forma cifrada), WhatsApp para uso do canal de atendimento, cargo, instituição
              vinculada e perfil de acesso.
            </>,
            <>
              <strong className="text-foreground">Pedido de adaptação:</strong> identificação do aluno
              (que pode ser um apelido ou código — veja a seção 4), ano escolar, matéria, tipo de
              conteúdo, perfil de acessibilidade e instruções adicionais.
            </>,
            <>
              <strong className="text-foreground">Conteúdo enviado:</strong> arquivos PDF, DOC, DOCX e
              imagens de material pedagógico.
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

        <SubTitle>3.3 Dados gerados pelo processamento</SubTitle>
        <List
          items={[
            <>
              <strong className="text-foreground">Arquivos intermediários:</strong> imagens preparadas e
              miniaturas, transcrições do conteúdo, estrutura da adaptação e ilustrações geradas.
            </>,
            <>
              <strong className="text-foreground">Resultados:</strong> documento editável (DOCX) e PDF da
              adaptação.
            </>,
            <>
              <strong className="text-foreground">Telemetria de processamento:</strong> modelo utilizado,
              consumo, custo e duração de cada etapa — sem o conteúdo do material.
            </>,
            <>
              <strong className="text-foreground">Registros de aceite:</strong> versão e data de aceite
              dos termos de uso e desta política.
            </>,
          ]}
        />

        <SubTitle>3.4 Dados do canal de WhatsApp</SubTitle>
        <List
          items={[
            'Número de telefone de quem envia as mensagens e número de WhatsApp da escola conectado à plataforma.',
            'Identificadores técnicos das mensagens, usados para não processar duas vezes o mesmo envio e para entregar o resultado no pedido certo.',
            'As respostas dadas às perguntas do pedido e os arquivos enviados na conversa.',
          ]}
        />
        <P>
          Sobre o que <strong className="text-foreground">não</strong> guardamos desse canal, veja a
          seção 6.2.
        </P>

        <Callout tone="amber" title="O que não coletamos">
          <p>
            Não pedimos nem usamos dados de cartão de crédito diretamente — pagamentos, quando aplicável,
            são processados pelo {PROVEDOR_PAGAMENTO}. Não vendemos dados pessoais
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
              <strong className="text-foreground">Prefira identificar o pedido, não o aluno.</strong> O
              pedido pede uma identificação para você organizar o resultado e localizá-lo depois — um
              apelido, as iniciais ou um código cumprem essa função, e o campo aceita qualquer texto. Não é
              necessário o nome completo, nem matrícula, foto ou outros identificadores; oriente sua
              equipe a removê-los do arquivo antes do envio. A identificação informada não é enviada aos
              provedores de IA (seção 7), mas aparece no resumo de confirmação que o assistente devolve na
              conversa do WhatsApp.
            </>,
            <>
              <strong className="text-foreground">A base legal do conteúdo é definida pela instituição.</strong>{' '}
              Cabe à escola, como controladora, identificar a hipótese aplicável: para dados comuns, uma
              das hipóteses do art. 7º da LGPD; quando o pedido envolver dado sensível — por exemplo,
              condição de saúde associada a aluno identificado ou identificável —, uma das hipóteses do
              art. 11. O contrato com a AdaptaEDU não autoriza automaticamente todo tratamento sensível.
            </>,
            <>
              <strong className="text-foreground">Crianças e adolescentes.</strong> O tratamento deve
              ocorrer no melhor interesse da criança e do adolescente, avaliado no caso concreto (art. 14
              da LGPD e Enunciado CD/ANPD nº 1/2023). São admissíveis as hipóteses dos arts. 7º ou 11
              aplicáveis a cada situação; quando o consentimento for a base utilizada para o tratamento de
              dados de crianças, ele deve ser específico e destacado, prestado por ao menos um dos pais ou
              responsável legal, com verificação razoável de quem o prestou, salvo as hipóteses legais de
              dispensa.
            </>,
            <>
              <strong className="text-foreground">Não envie laudos nem diagnósticos.</strong> Diagnóstico
              médico, CID, prontuário, relatório clínico e medicação não são necessários para adaptar o
              material — e transformam um pedido simples em tratamento de dado sensível de saúde.
            </>,
            <>
              <strong className="text-foreground">A plataforma não é destinada ao uso direto por alunos.</strong>{' '}
              As contas são criadas para professores e equipes escolares.
            </>,
          ]}
        />

        <SubTitle>4.1 Na prática, ao pedir uma adaptação</SubTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-800 mb-2">Prefira</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Adaptar este conteúdo para baixa visão — pedido &lsquo;aluna M.&rsquo;.&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-rose-300 bg-rose-50 p-5">
            <p className="text-sm font-semibold text-rose-800 mb-2">Evite quando desnecessário</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;O aluno João da Silva tem diagnóstico X, CID Y, usa o medicamento Z…&rdquo;
            </p>
          </div>
        </div>
        <P>
          A informação funcional — o que o material precisa ter para o aluno acompanhar — é suficiente
          para a adaptação. O histórico clínico não é.
        </P>
      </Section>

      <Section id="finalidades" title="5. Para que usamos os dados e com que base legal">
        <Table
          head={['Finalidade', 'Base legal (LGPD)']}
          rows={[
            ['Responder a solicitações de demonstração e contato comercial', 'Diligências preliminares a contrato, a pedido do titular (art. 7º, V)'],
            ['Criar e manter contas e permitir o uso da plataforma', 'Execução de contrato (art. 7º, V)'],
            ['Identificar o remetente no WhatsApp e validar o vínculo com a escola', 'Execução de contrato e legítimo interesse — segurança (art. 7º, V e IX)'],
            ['Processar e adaptar o conteúdo pedagógico enviado, em nome da instituição contratante', 'Hipótese definida pela instituição controladora (art. 7º ou art. 11 da LGPD)'],
            ['Enviar mensagens operacionais, no WhatsApp e por e-mail, em resposta aos seus pedidos', 'Execução de contrato (art. 7º, V)'],
            ['Faturamento, cobrança e obrigações fiscais', 'Cumprimento de obrigação legal (art. 7º, II)'],
            ['Segurança, prevenção a fraude e manutenção de logs de acesso', 'Cumprimento de obrigação legal e legítimo interesse (art. 7º, II e IX)'],
            ['Melhorar funcionalidades e medir uso agregado do produto', 'Legítimo interesse (art. 7º, IX)'],
            ['Registrar o aceite dos termos de uso e desta política', 'Execução de contrato e exercício regular de direitos (art. 7º, V e VI)'],
            ['Envio de comunicações de marketing', 'Consentimento (art. 7º, I), revogável a qualquer momento'],
          ]}
        />
      </Section>

      <Section id="whatsapp" title="6. Uso pelo WhatsApp Business">
        <P>
          A plataforma pode ser usada pelo computador, em app.adaptaedu.com, ou pelo WhatsApp. No uso
          institucional pelo WhatsApp, cada escola conecta à plataforma o seu próprio número de WhatsApp
          Business; nos planos em que o número da AdaptaEDU está disponível, ele também pode ser
          utilizado. Esta seção explica como o canal funciona e quais dados ele envolve.
        </P>

        <SubTitle>6.1 Como funciona o atendimento</SubTitle>
        <List
          items={[
            'A escola conecta o seu número de WhatsApp Business pela área administrativa da plataforma e cadastra os professores que podem usá-lo.',
            'O professor inicia a conversa com esse número. Nenhuma adaptação começa por mensagem nossa: o atendimento é sempre iniciado por você.',
            'Para liberar o pedido, comparamos o número de quem escreveu com o número cadastrado no perfil do professor e verificamos se há vínculo ativo com a escola dona daquele número.',
            'Números desconhecidos recebem uma orientação neutra de cadastro — e nada mais: nenhum arquivo é processado e nenhuma conta é criada automaticamente.',
            'Em seguida, o assistente faz as perguntas do pedido — identificação do aluno, ano escolar, matéria, tipo de conteúdo e perfil de adaptação — e recebe o material em imagem, PDF, DOC ou DOCX.',
            'Antes de processar, o assistente mostra um resumo para você confirmar. O uso do canal consome os mesmos créditos do plano e segue as mesmas regras da plataforma.',
          ]}
        />

        <SubTitle>6.2 Quais dados o canal envolve</SubTitle>
        <P>
          Tratamos os dados listados na seção 3.4: números de telefone, identificadores técnicos das
          mensagens, respostas aos campos do pedido e arquivos enviados.
        </P>
        <Callout tone="teal" title="O que não guardamos do canal">
          <p>
            O histórico da conversa não fica armazenado em banco de dados: a sessão do pedido é mantida
            de forma temporária, por até 1 hora após a sua última mensagem. Textos digitados que não
            correspondem a campos do pedido não são gravados. Nossos registros técnicos mostram o número
            de telefone com máscara e a estrutura das mensagens, sem o conteúdo delas.
          </p>
        </Callout>

        <SubTitle>6.3 Entrega do resultado</SubTitle>
        <List
          items={[
            <>
              Quando a adaptação termina, enviamos no WhatsApp um{' '}
              <strong className="text-foreground">link de download válido por 1 hora</strong>. Quem
              tiver o link consegue baixar o arquivo dentro desse prazo — não o encaminhe para quem não
              deve ver o material.
            </>,
            'O link e o nome do arquivo não contêm dados do aluno: o material é identificado por códigos internos.',
            <>
              Depois desse prazo, o documento editável e o PDF continuam disponíveis em
              app.adaptaedu.com, acessíveis com o login da sua conta.
            </>,
          ]}
        />

        <SubTitle>6.4 Regras de mensageria</SubTitle>
        <List
          items={[
            'Enviamos mensagens no WhatsApp apenas em resposta a um pedido iniciado por você: perguntas para completar o pedido, confirmações e o link do resultado. Não enviamos publicidade pelo WhatsApp.',
            'Seguimos a Política de Mensagens Comerciais do WhatsApp. Quando o número da escola opera pela API oficial da Meta (WhatsApp Business Platform), as mensagens enviadas fora da janela de atendimento de 24 horas utilizam somente modelos de mensagem aprovados pela Meta — ou aguardamos a sua próxima mensagem.',
            'A permissão exigida pelas regras do WhatsApp para receber mensagens de uma empresa é independente da base legal da LGPD: uma não substitui a outra.',
          ]}
        />

        <SubTitle>6.5 Interromper o atendimento</SubTitle>
        <List
          items={[
            <>
              Enviar <strong className="text-foreground">&ldquo;cancelar&rdquo;</strong>,{' '}
              <strong className="text-foreground">&ldquo;parar&rdquo;</strong> ou{' '}
              <strong className="text-foreground">&ldquo;sair&rdquo;</strong> na conversa encerra o
              pedido em andamento.
            </>,
            <>
              Para deixar de receber mensagens no seu número: remova o WhatsApp do seu perfil na
              plataforma, peça ao administrador da escola que remova o seu vínculo ou escreva para{' '}
              {CONTATO.suporte}.
            </>,
            'A escola pode desconectar o número dela da plataforma a qualquer momento, na área administrativa.',
          ]}
        />

        <SubTitle>6.6 O WhatsApp e a Meta</SubTitle>
        <P>
          As mensagens e os arquivos trocados no canal trafegam pela infraestrutura do WhatsApp, operada
          pela Meta Platforms, e seguem a Política de Privacidade do WhatsApp. Cópias das mensagens
          permanecem nos aparelhos dos participantes e nos sistemas do WhatsApp, que não estão sob nosso
          controle — por isso a exclusão de dados na AdaptaEDU não remove automaticamente o histórico da
          conversa no seu aparelho ou no da escola. A escola é responsável pelo número conectado e pela
          respectiva conta WhatsApp Business.
        </P>
      </Section>

      <Section id="ia" title="7. Como a inteligência artificial trata o material">
        <P>O material enviado passa por estas etapas, para gerar a adaptação solicitada:</P>
        <List
          items={[
            <>
              <strong className="text-foreground">Preparo das imagens:</strong> fotos e digitalizações são
              endireitadas, cortadas e redimensionadas nos nossos servidores.
            </>,
            <>
              <strong className="text-foreground">Extração do texto:</strong> o arquivo é convertido em
              texto estruturado nos nossos servidores. Quando a extração automática não é suficiente
              — fotos de baixa qualidade, diagramas —, as páginas são enviadas a um modelo de leitura
              visual para transcrevê-las.
            </>,
            <>
              <strong className="text-foreground">Adaptação do conteúdo:</strong> um modelo de linguagem
              reescreve e reorganiza o texto, orientado pelas regras do perfil de acessibilidade
              escolhido e pelos campos do pedido.
            </>,
            <>
              <strong className="text-foreground">Ilustrações:</strong> quando o perfil pede apoio visual,
              geramos ilustrações por IA a partir de descrições do conteúdo adaptado, ou buscamos
              pictogramas ARASAAC por palavra-chave.
            </>,
            <>
              <strong className="text-foreground">Montagem:</strong> o resultado é convertido em documento
              editável (DOCX) e PDF.
            </>,
          ]}
        />

        <SubTitle>7.1 O que enviamos aos provedores de IA</SubTitle>
        <List
          items={[
            'O conteúdo do material: o texto extraído e, quando necessário para a leitura, as imagens das páginas.',
            'O contexto do pedido: ano escolar, matéria, perfil de acessibilidade e as instruções que você escreveu.',
          ]}
        />
        <Callout tone="amber" title="O que nunca enviamos">
          <p>
            A identificação do aluno digitada no pedido fica registrada apenas com o pedido, para você
            organizá-lo e localizar o resultado. Ela não é enviada a nenhum provedor de IA, não entra nos
            comandos de geração de imagem e não aparece em nomes de arquivo.
          </p>
          <p>
            Também não enviamos número de telefone, senha ou dados da sua conta de usuário.
          </p>
        </Callout>

        <SubTitle>7.2 Arquivos intermediários e registros</SubTitle>
        <List
          items={[
            'Cada etapa gera arquivos intermediários — imagens preparadas, transcrições, estrutura da adaptação, ilustrações — que ficam armazenados junto com o pedido, isolados por escola, e seguem a mesma retenção da seção 10.',
            'Registramos por etapa o modelo utilizado, o consumo, o custo e a duração, para operar e melhorar o serviço. Esses registros não contêm o conteúdo do material.',
            'O professor deve revisar a fidelidade do texto, a adequação das ilustrações e a acessibilidade do resultado antes de usá-lo com os alunos. O serviço não substitui avaliação pedagógica nem diagnóstico profissional.',
          ]}
        />
        <Callout tone="teal" title="Treinamento de modelos">
          <p>
            Não usamos o material enviado — original, transcrições, ilustrações ou adaptações — para
            treinar, ajustar ou avaliar modelos de inteligência artificial próprios. Cada provedor de IA é
            contratado por meio de API, sob termos que não autorizam o uso do conteúdo enviado para
            treinar os modelos deles.
          </p>
        </Callout>
      </Section>

      <Section id="compartilhamento" title="8. Com quem compartilhamos dados">
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

      <Section id="transferencia" title="9. Transferência internacional">
        <P>
          <strong className="text-foreground">Sim, há transferência internacional.</strong> Os
          fornecedores processam dados nos países indicados na seção 8 — em sua maioria nos Estados
          Unidos e, para os provedores de contingência de IA, também em Singapura e na China:
        </P>
        <Table
          head={['Fornecedor', 'O que processa', 'País']}
          rows={FORNECEDORES.map(f => [f.nome, f.finalidade, f.pais])}
        />
        <P>
          A transferência ocorre para viabilizar a execução do contrato firmado com você ou com a sua
          instituição e a prestação do serviço que você solicitou — hipóteses previstas no art. 33 da
          LGPD — contando, quando aplicável, com cláusulas contratuais específicas de proteção de dados
          (art. 33, II). Quando o pedido envolver dado sensível de aluno identificável, a instituição
          controladora deve avaliar a hipótese de transferência aplicável e as salvaguardas cabíveis —
          uma razão adicional para não identificar o aluno no pedido.
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

      <Section id="retencao" title="10. Por quanto tempo guardamos">
        <Table
          head={['Dado', 'Prazo de retenção']}
          rows={[
            ['Solicitações de demonstração não convertidas', '24 meses'],
            ['Dados de conta ativa', 'Enquanto a conta existir'],
            ['Dados após encerramento da conta', 'Excluídos em até 6 meses'],
            [
              'Material enviado, imagens e textos intermediários, ilustrações e adaptações geradas',
              '12 meses — a escola pode solicitar a exclusão antes disso, a qualquer momento',
            ],
            [
              'Campos do pedido (identificação do aluno, ano escolar, matéria, tipo de conteúdo, perfil)',
              'Pelo mesmo prazo do material a que se referem',
            ],
            ['Sessão da conversa de WhatsApp', 'Até 1 hora após a última mensagem'],
            ['Identificadores técnicos de mensagens (deduplicação e entrega)', 'Até 7 dias'],
            ['Links de download', '1 hora (WhatsApp) e 15 minutos (plataforma)'],
            ['Número de WhatsApp cadastrado no perfil', 'Enquanto a conta existir'],
            ['Telemetria de processamento (modelo, consumo, custo, duração)', 'Pelo mesmo prazo do pedido'],
            ['Registros de acesso à aplicação', 'No mínimo 6 meses (art. 15 do Marco Civil da Internet)'],
            ['Documentos fiscais e contratuais', 'Conforme prazos legais aplicáveis'],
            [
              'Cópias de segurança',
              'Ciclo de renovação de cada serviço; após a exclusão, os dados deixam de estar disponíveis quando as cópias são renovadas',
            ],
          ]}
        />
        <P>
          Encerrado o prazo, os dados são excluídos ou anonimizados, salvo quando sua conservação for
          autorizada pelo art. 16 da LGPD.
        </P>
        <P>
          A exclusão de dados na AdaptaEDU não remove automaticamente cópias que já existam nos aparelhos
          dos participantes, nas conversas do WhatsApp ou em sistemas fora do nosso controle. Informaremos
          o alcance e os limites de cada pedido.
        </P>
      </Section>

      <Section id="seguranca" title="11. Segurança da informação">
        <P>
          Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não
          autorizados e situações acidentais ou ilícitas de destruição, perda, alteração ou difusão:
        </P>
        <List
          items={[
            'Criptografia em trânsito (HTTPS/TLS) em todo o site e na plataforma.',
            'Criptografia dos dados armazenados e senhas protegidas por hash.',
            'Isolamento de dados por instituição, com controle de acesso por perfil de usuário.',
            'Arquivos armazenados por escola, sob códigos internos, em repositórios de acesso privado com links temporários de download.',
            'Cada número de WhatsApp conectado tem o seu próprio segredo de webhook, guardado de forma cifrada (hash).',
            'Registros técnicos exibem números de telefone mascarados, sem o conteúdo das mensagens.',
            'A identificação do aluno não é enviada aos provedores de IA nem incluída em nomes de arquivo.',
            'Pseudonimização dos dados sempre que tecnicamente aplicável à finalidade.',
            'Limitação do prazo de armazenamento ao necessário para cada finalidade.',
            'Registro de acessos e operações relevantes na plataforma.',
            'Aplicação do princípio do menor privilégio na concessão de acessos.',
            'Revisão periódica de permissões e de fornecedores.',
          ]}
        />

        <SubTitle>11.1 Quem enxerga o quê, dentro da escola</SubTitle>
        <P>
          Quando a plataforma é usada de forma institucional, os dados são organizados por escola, turma
          e professor. Um professor não tem acesso a materiais e dados de alunos de outra escola ou de
          turmas que não sejam suas, quando esse acesso não for necessário à sua função. O acesso aos
          dados de alunos fica restrito a quem efetivamente precisa deles para trabalhar.
        </P>
        <P>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares,
          comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados em prazo
          razoável, conforme o art. 48 da LGPD. Quando o incidente envolver dados sob controle de uma
          escola, comunicaremos a instituição sem demora injustificada.
        </P>
      </Section>

      <Section id="direitos" title="12. Seus direitos como titular">
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
            Um pedido de exclusão percorre o material original, os arquivos intermediários, as ilustrações
            e os resultados gerados. Se o seu pedido se referir a material enviado por uma escola,
            encaminharemos a solicitação à instituição controladora e auxiliaremos na resposta.
          </p>
        </Callout>

        <SubTitle>12.1 Pais e responsáveis legais</SubTitle>
        <P>
          Solicitações relativas a dados de crianças e adolescentes podem ser feitas pelos pais ou pelo
          responsável legal. Antes de fornecer informações ou executar a solicitação, podemos pedir dados
          razoáveis para verificar a identidade de quem pede e a sua legitimidade para representar o
          titular — uma precaução que existe para proteger o próprio aluno.
        </P>
      </Section>

      <Section id="cookies" title="13. Cookies e tecnologias semelhantes">
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
              forma agregada, por meio de {FERRAMENTAS_ANALISE.join(', ')}. Só são instalados com o seu
              aceite no banner.
            </>,
          ]}
        />
        <P>
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. A desativação de
          cookies necessários pode impedir o funcionamento de partes da plataforma.
        </P>
      </Section>

      <Section id="comunicacoes" title="14. Comunicações que enviamos">
        <P>Usamos o e-mail cadastrado para:</P>
        <List
          items={[
            'Confirmar operações da conta e recuperar o acesso.',
            'Enviar alertas de segurança e avisos de cobrança e de período de teste.',
            'Responder ao suporte e dar andamento a solicitações.',
            'Comunicar mudanças no serviço, nos planos ou nestes documentos.',
          ]}
        />
        <P>
          No WhatsApp, enviamos mensagens apenas em resposta a pedidos iniciados por você, conforme a
          seção 6 — sem publicidade.
        </P>
        <P>
          Essas comunicações fazem parte da prestação do serviço e, para a LGPD, apoiam-se na execução do
          contrato — sem elas não é possível operar a conta com segurança. A base legal, porém, não
          dispensa as regras da plataforma de mensagens: seguimos também os requisitos de permissão e a
          janela de atendimento do WhatsApp Business, e você pode interromper o atendimento a qualquer
          momento (seção 6.5).
        </P>
        <Callout tone="teal" title="Comunicações promocionais">
          <p>
            Mensagens de divulgação, quando enviadas, dependem do seu consentimento e trazem sempre uma
            forma simples de descadastramento. Cancelar o recebimento de promoções não afeta as
            comunicações operacionais acima.
          </p>
        </Callout>
      </Section>

      <Section id="alteracoes" title="15. Alterações nesta política">
        <P>
          Podemos atualizar esta política para refletir mudanças legais, técnicas ou de produto. A data da
          última atualização aparece no topo desta página. Alterações relevantes serão comunicadas por
          e-mail ou por aviso na plataforma antes de entrarem em vigor.
        </P>
      </Section>

      <Section id="contato" title="16. Encarregado e canais de contato">
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
