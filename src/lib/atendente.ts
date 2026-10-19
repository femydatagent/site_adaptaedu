/**
 * Abre o chat da Ana (web bubble do MyDataAgent, carregado no layout).
 *
 * O pacote não expõe uma API de abrir: o único controle é o botão da bolha,
 * que alterna aberto/fechado. Por isso só clicamos nele quando o chat ainda
 * não está aberto — o cartão do chat só existe após a primeira abertura e,
 * fechado, fica com opacidade 0.
 *
 * Retorna false se a bolha ainda não carregou, para o chamador cair no
 * destino padrão do link.
 */
export function abrirAtendente(): boolean {
  const root = document.querySelector('mydataagent-chatbox-bubble')?.shadowRoot;
  const launcher = root?.querySelector<HTMLElement>('.mydataagent-launcher');
  if (!root || !launcher) return false;

  const card = root.querySelector<HTMLElement>('.MuiCard-root');
  const isOpen = card !== null && getComputedStyle(card).opacity !== '0';
  if (!isOpen) launcher.click();
  return true;
}
