# Portfólio Pessoal - AlphaEdtech

## 📌 Descrição do Projeto
Este repositório contém o código de um portfólio pessoal estático desenvolvido como projeto obrigatório para a **AlphaEdtech**. O objetivo principal da aplicação é demonstrar o domínio prático das tecnologias fundamentais da web (HTML5, CSS3 e JavaScript Vanilla), aplicando técnicas avançadas de responsividade e animações fluidas puras.

A identidade visual foi completamente prototipada de forma prévia utilizando o **Stitch** no Figma, focando em uma interface de alta fidelidade voltada para o mercado de desenvolvimento web.

---

## 🚀 Links Úteis
* **Aplicação em Produção (Deploy):** [👉 Acesse o portfólio online aqui](https://raicolares.github.io/portfolio-rai/)
* **Protótipo Interativo (Figma/Stitch):** [📐 Visualize o Layout no Stitch](https://stitch.withgoogle.com/projects/15519108594731561643)

---

## 🛠️ Tecnologias e Recursos Utilizados

O projeto cumpre rigorosamente as restrições técnicas do escopo acadêmico, sendo desenvolvido de forma **autoral (Hand-coded)** e sem o uso de frameworks de estilização (como Bootstrap ou Tailwind) ou de componentes (como React ou Vue):

* **HTML5 Semântico:** Estruturação limpa baseada em tags estruturais nativas (`<header>`, `<nav>`, `<section>`, `<footer>`) para otimização de SEO e acessibilidade.
* **CSS3 Moderno & Variáveis:** Gerenciamento centralizado de cores por meio de propriedades customizadas (`:root`), layouts estruturados via Flexbox e CSS Grid nativos.
* **Animações Nativas:** Aplicação de múltiplos efeitos dinâmicos de surgimento (`slideRight`, `slideLeft`, `slideTop`, `slideBottom`, `zoomIn`) e efeito de flutuação contínua (`floatImage`) implementados puramente através de `@keyframes` e transições no CSS.
* **JavaScript Vanilla (Nativo):** * Lógica de controle para o menu mobile responsivo (Hamburguer alternando classes via DOM).
  * Algoritmo de scroll que identifica a posição da tela e ativa dinamicamente a classe `.active` no link correspondente da barra de navegação.
  * Efeito de fixação inteligente (`sticky`) para o cabeçalho ao rolar a página.
* **Bibliotecas de Integração Visual:**
  * [Typed.js](https://github.com/mattboldt/typed.js/) para o efeito de digitação interativa na seção de abertura.
  * [Boxicons](https://boxicons.com/) para o mapeamento e renderização de ícones modernos de redes sociais e componentes.

---

## 📐 Estrutura das Seções do Projeto
O site foi modelado em formato *Single Page Application* (SPA) dividido estritamente nas seções solicitadas:

1. **Home:** Seção Hero de impacto com texto dinâmico (via Typed.js), foto principal com efeito contínuo de flutuação, links para redes sociais (LinkedIn e Instagram) e botão integrado com chamada de ação (CTA) para o WhatsApp.
2. **Sobre Mim:** Resumo profissional da trajetória destacando a transição de plataformas no-code (WordPress) para a escrita de código limpo e de alta performance como estudante da AlphaEdtech.
3. **Portfólio:** Galeria responsiva no formato Grid exibindo os últimos projetos desenvolvidos no ecossistema web (como Instituto Mãe Crioula, Instituto HAFAMA, Nutri Ailana, MilleUno, entre outros) com camadas interativas de *hover*.
4. **Contato:** Formulário estruturado com tratamento nativo de inputs para recepção de mensagens de clientes e parceiros.
5. **Footer:** Rodapé com assinatura autoral utilizando strings de template (`</RaiColares >`), logotipo próprio e validações de direitos autorais.

---

## 📱 Responsividade (Breakpoints Tratados)
O layout do CSS foi projetado detalhadamente para garantir visualização perfeita de ponta a ponta sem quebras ou rolagem horizontal:
* `max-width: 1200px` — Ajuste de escala tipográfica base.
* `max-width: 991px` — Otimização de paddings em seções e layouts de containers.
* `max-width: 768px` — Ocultação do menu padrão, ativação do **Ícone Hamburguer interativo** para dispositivos móveis e conversão das seções em coluna simples (Mobile View).
* `max-width: 617px` / `450px` / `365px` — Ajuste milimétrico de largura de imagens e alinhamento centralizado do rodapé para dispositivos com telas muito pequenas.

---

## 🔧 Como Executar o Projeto Localmente

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone [https://github.com/raicolares/portfolio-rai.git](https://github.com/raicolares/portfolio-rai.git)