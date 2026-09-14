import type { Metadata } from 'next';
import LegalPage from '@/components/legal/legal-page';
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
          Se isso mudar — por exemplo, se passarmos a usar uma ferramenta de análise de audiência —
          atualizaremos esta página e, quando a lei exigir, solicitaremos seu consentimento antes da
          instalação.
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
            'Não utilizamos Google Analytics, Meta Pixel, Hotjar ou ferramentas equivalentes.',
            'Não há botões de redes sociais que carreguem conteúdo de terceiros.',
            'Não compartilhamos dados de navegação com plataformas de publicidade.',
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
        <Callout tone="amber" title="A confirmar antes da publicação">
          <p>
            <Fill>
              Se houver qualquer ferramenta de análise, mapa de calor, chat de atendimento ou pixel de
              campanha em uso ou previsto, listar aqui com nome, finalidade e duração — e implementar um
              aviso de consentimento antes da instalação
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
              <Fill key="n">nome do cookie de sessão</Fill>,
              'Manter você autenticado entre páginas, evitando novo login a cada navegação',
              <Fill key="d">duração</Fill>,
              'Próprio, necessário',
            ],
            [
              <Fill key="r">nome do cookie de renovação</Fill>,
              'Renovar a sessão com segurança sem exigir novo login',
              <Fill key="d2">duração</Fill>,
              'Próprio, necessário',
            ],
            [
              <Fill key="c">nome do cookie de proteção CSRF, se houver</Fill>,
              'Proteger formulários contra requisições forjadas de outros sites',
              'Sessão',
              'Próprio, necessário',
            ],
          ]}
        />
        <Callout tone="amber" title="A preencher com os dados reais da aplicação">
          <p>
            <Fill>
              Levantar na aplicação os nomes exatos dos cookies definidos pelo provedor de autenticação,
              sua duração e se algum é de terceiro. Se a autenticação usa Supabase, os nomes seguem o
              padrão sb-&lt;projeto&gt;-auth-token
            </Fill>
          </p>
        </Callout>
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
              <Fill key="p">confirmar</Fill>,
            ],
            [
              'Analíticos',
              'Medir uso e desempenho de forma agregada',
              'Consentimento (art. 7º, I)',
              'Não',
            ],
            [
              'Publicidade',
              'Personalizar anúncios e medir campanhas',
              'Consentimento (art. 7º, I)',
              'Não',
            ],
          ]}
        />
        <P>
          Caso venhamos a adotar cookies analíticos ou de publicidade, eles só serão instalados após seu
          consentimento livre, informado e inequívoco, que poderá ser revogado a qualquer momento.
        </P>
      </Section>

      <Section id="gerenciar" title="6. Como gerenciar cookies no navegador">
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

      <Section id="nao-rastrear" title="7. Do Not Track e sinais de preferência">
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

      <Section id="alteracoes" title="8. Alterações nesta política">
        <P>
          Esta política pode ser atualizada quando adicionarmos ou removermos tecnologias. A data da última
          atualização aparece no topo da página. Mudanças que impliquem novos cookies sujeitos a
          consentimento serão precedidas de solicitação explícita.
        </P>
      </Section>

      <Section id="contato" title="9. Contato">
        <P>
          Dúvidas sobre cookies ou sobre o tratamento dos seus dados:{' '}
          <Fill>e-mail do encarregado</Fill>.
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
