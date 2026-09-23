import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
import { CONTATO, FERRAMENTAS_ANALISE, FERRAMENTAS_MARKETING } from '@/components/legal/empresa';
import ManagePreferencesButton from '@/components/cookie-consent/manage-preferences-button';
import { Section, SubTitle, P, List, Table, Callout, Fill } from '@/components/legal/legal-prose';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Quais cookies o AdaptaEDU utiliza no site e na plataforma, para que servem, por quanto tempo duram e como gerenciá-los no seu navegador.',
  alternates: { canonical: 'https://adaptaedu.com/cookies' },
  robots: { index: true, follow: true },
};

const UPDATED_AT = '2026-09-14';

const toc = [
  { id: 'resumo', label: 'Resumo' },
  { id: 'o-que-sao', label: 'O que são cookies' },
  { id: 'site', label: 'Cookies no site adaptaedu.com' },
  { id: 'plataforma', label: 'Cookies na plataforma app.adaptaedu.com' },
  { id: 'categorias', label: 'Categorias e base legal' },
  { id: 'preferencias', label: 'Suas preferências neste site' },
  { id: 'gerenciar', label: 'Como gerenciar cookies no navegador' },
  { id: 'nao-rastrear', label: 'Do Not Track e sinais de preferência' },
  { id: 'alteracoes', label: 'Alterações nesta política' },
  { id: 'contato', label: 'Contato' },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      subtitle="Esta página explica quais cookies e tecnologias semelhantes utilizamos, com que finalidade e como você pode controlá-los."
      updatedAt={UPDATED_AT}
      toc={toc}
    >
      <Section id="resumo" title="1. Resumo">
        <Callout tone="teal" title="O site institucional não usa cookies de rastreamento">
          <p>
            Em verificação feita em <time dateTime={UPDATED_AT}>14 de setembro de 2026</time>, o site
            adaptaedu.com <strong className="text-foreground">não define cookies próprios</strong> no
            navegador de quem apenas navega pelas páginas, e não carrega scripts de análise, publicidade ou
            redes sociais de terceiros.
          </p>
          <p>
            Cookies passam a existir quando você entra na plataforma app.adaptaedu.com, e são os
            estritamente necessários para manter sua sessão autenticada.
          </p>
        </Callout>
        <P>
          Cookies de análise e de publicidade — estes últimos usados para direcionar campanhas de
          marketing — só são instalados <strong className="text-foreground">após a sua autorização
          expressa</strong>, dada no banner exibido na primeira visita. Enquanto você não decidir, ou se
          recusar, nenhum script dessas categorias é carregado.
        </P>
      </Section>

      <Section id="o-que-sao" title="2. O que são cookies">
        <P>
          Cookies são pequenos arquivos de texto gravados no seu dispositivo quando você acessa um site.
          Eles permitem, por exemplo, que um serviço lembre que você já fez login, evitando pedir sua senha
          a cada página.
        </P>
        <P>
          Tecnologias semelhantes incluem o <em>localStorage</em> e o <em>sessionStorage</em>, que também
          guardam informação no navegador. Quando essa informação permite identificar uma pessoa, ela é
          tratada como dado pessoal e se sujeita à LGPD.
        </P>
        <P>
          Cookies podem ser classificados quanto à origem — <strong className="text-foreground">próprios</strong>,
          definidos por nós, ou <strong className="text-foreground">de terceiros</strong>, definidos por
          outros domínios — e quanto à duração:{' '}
          <strong className="text-foreground">de sessão</strong>, apagados ao fechar o navegador, ou{' '}
          <strong className="text-foreground">persistentes</strong>, que permanecem por um prazo definido.
        </P>
      </Section>

      <Section id="site" title="3. Cookies no site adaptaedu.com">
        <P>
          O site institucional — páginas de apresentação, blog e páginas legais como esta — é servido de
          forma predominantemente estática e não instala cookies próprios de rastreamento, análise ou
          publicidade.
        </P>
        <List
          items={[
            'Nenhum cookie é gravado enquanto você apenas navega, antes de qualquer decisão sua no banner.',
            <>
              As ferramentas de análise que utilizamos são{' '}
              {FERRAMENTAS_ANALISE.join(', ')}; as de campanha são {FERRAMENTAS_MARKETING.join(', ')}.
              Nenhuma delas é carregada sem o seu aceite na categoria correspondente — recusando, o
              script sequer é inserido na página.
            </>,
            'Não há botões de redes sociais que carreguem conteúdo de terceiros.',
            'O formulário de solicitação de demonstração envia os dados que você preenche, mas não grava cookies para isso.',
          ]}
        />
        <P>
          Nosso provedor de hospedagem pode registrar dados técnicos de acesso — como endereço IP e tipo de
          navegador — em logs de servidor, para segurança e funcionamento do serviço. Isso não depende de
          cookies e está descrito na{' '}
          <a href="/privacidade" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Política de Privacidade
          </a>
          .
        </P>
        <Callout tone="amber" title="A completar conforme as ferramentas entram no ar">
          <p>
            <Fill>
              Para cada ferramenta acima que for efetivamente ativada, listar aqui os cookies que ela
              instala: nome, fornecedor, finalidade e duração. A tabela de cookies por nome é o que a
              ANPD espera encontrar numa política de cookies
            </Fill>
          </p>
        </Callout>
      </Section>

      <Section id="plataforma" title="4. Cookies na plataforma app.adaptaedu.com">
        <P>
          Ao acessar sua conta, utilizamos os cookies estritamente necessários para autenticar e manter sua
          sessão com segurança:
        </P>
        <Table
          head={['Cookie', 'Finalidade', 'Duração', 'Tipo']}
          rows={[
            [
              <code key="n" className="text-xs">sb-&lt;projeto&gt;-auth-token</code>,
              'Guarda a sessão autenticada — o token de acesso e o de renovação — para manter você conectado entre páginas, sem novo login a cada navegação',
              'Enquanto a sessão durar, renovada automaticamente com o uso',
              'Próprio, necessário',
            ],
            [
              <code key="p" className="text-xs">sb-&lt;projeto&gt;-auth-token.0</code>,
              'Continuação do cookie acima quando o conteúdo excede o limite de tamanho do navegador e precisa ser dividido em partes',
              'A mesma do cookie principal',
              'Próprio, necessário',
            ],
          ]}
        />
        <P>
          A autenticação da plataforma usa o Supabase, e <code className="text-xs">&lt;projeto&gt;</code>{' '}
          no nome acima é a referência da nossa instância. Não usamos cookies de terceiros para
          autenticar.
        </P>
        <P>
          Cookies necessários não podem ser desativados sem inviabilizar o acesso à conta. Por serem
          indispensáveis à prestação do serviço que você solicitou, sua utilização não depende de
          consentimento prévio.
        </P>
      </Section>

      <Section id="categorias" title="5. Categorias e base legal">
        <Table
          head={['Categoria', 'O que faz', 'Base legal (LGPD)', 'Em uso hoje']}
          rows={[
            [
              'Necessários',
              'Autenticação, segurança e funcionamento básico',
              'Execução de contrato (art. 7º, V) e legítimo interesse em segurança (art. 7º, IX)',
              'Sim, apenas na plataforma',
            ],
            [
              'Preferências',
              'Lembrar escolhas de exibição e configurações de interface',
              'Legítimo interesse (art. 7º, IX)',
              'Somente com seu aceite no banner',
            ],
            [
              'Analíticos',
              'Medir uso e desempenho de forma agregada',
              'Consentimento (art. 7º, I)',
              'Somente com seu aceite no banner',
            ],
            [
              'Publicidade',
              'Personalizar anúncios e medir o resultado de campanhas de marketing',
              'Consentimento (art. 7º, I)',
              'Somente com seu aceite no banner',
            ],
          ]}
        />
        <P>
          Cookies analíticos e de publicidade só são instalados após consentimento livre, informado e
          inequívoco. Nenhuma categoria opcional vem pré-marcada, recusar é tão simples quanto aceitar, e
          a decisão pode ser revogada a qualquer momento sem prejuízo ao uso do site.
        </P>
      </Section>

      <Section id="preferencias" title="6. Suas preferências neste site">
        <P>
          Sua escolha fica registrada no seu próprio navegador e vale para este dispositivo. Você pode
          revê-la quando quiser — inclusive para retirar um consentimento já dado:
        </P>
        <div className="py-1">
          <ManagePreferencesButton />
        </div>
        <P>
          Guardamos a decisão no armazenamento local do navegador, e não em um cookie: registrar o aceite
          de cookies gravando um cookie seria contraditório. Isso significa que limpar os dados do site
          apaga a preferência, e o banner voltará a aparecer.
        </P>
      </Section>

      <Section id="gerenciar" title="7. Como gerenciar cookies no navegador">
        <P>
          Você pode bloquear, limitar ou apagar cookies a qualquer momento nas configurações do seu
          navegador:
        </P>
        <List
          items={[
            <><strong className="text-foreground">Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados do site.</>,
            <><strong className="text-foreground">Mozilla Firefox:</strong> Configurações → Privacidade e Segurança → Cookies e dados de sites.</>,
            <><strong className="text-foreground">Safari:</strong> Ajustes → Privacidade → Gerenciar Dados de Sites.</>,
            <><strong className="text-foreground">Microsoft Edge:</strong> Configurações → Cookies e permissões do site.</>,
          ]}
        />
        <Callout tone="amber" title="Atenção ao bloquear tudo">
          <p>
            Bloquear os cookies necessários impede a autenticação na plataforma: você não conseguirá
            permanecer conectado à sua conta. O site institucional continua funcionando normalmente mesmo
            com cookies bloqueados.
          </p>
        </Callout>
        <SubTitle>Navegação anônima</SubTitle>
        <P>
          O modo anônimo ou privativo apaga os cookies ao fim da sessão, mas não impede a gravação durante
          a navegação.
        </P>
      </Section>

      <Section id="nao-rastrear" title="8. Do Not Track e sinais de preferência">
        <P>
          Alguns navegadores enviam o sinal <em>Do Not Track</em> (DNT) ou{' '}
          <em>Global Privacy Control</em> (GPC). Como não realizamos rastreamento entre sites nem
          publicidade comportamental, não há atividade a ser interrompida por esses sinais em nosso site.
        </P>
        <P>
          Se adotarmos ferramentas que caracterizem rastreamento, passaremos a respeitar esses sinais e
          atualizaremos esta página.
        </P>
      </Section>

      <Section id="alteracoes" title="9. Alterações nesta política">
        <P>
          Esta política pode ser atualizada quando adicionarmos ou removermos tecnologias. A data da última
          atualização aparece no topo da página. Mudanças que impliquem novos cookies sujeitos a
          consentimento serão precedidas de solicitação explícita.
        </P>
      </Section>

      <Section id="contato" title="10. Contato">
        <P>
          Dúvidas sobre cookies ou sobre o tratamento dos seus dados:{' '}
          {CONTATO.privacidade}.
        </P>
        <P>
          Consulte também a{' '}
          <a href="/privacidade" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Política de Privacidade
          </a>
          , os{' '}
          <a href="/termos" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            Termos de Uso
          </a>{' '}
          e a página sobre{' '}
          <a href="/lgpd" className="text-amber-600 underline underline-offset-4 hover:text-amber-700">
            LGPD
          </a>
          .
        </P>
      </Section>
    </LegalPage>
  );
}
