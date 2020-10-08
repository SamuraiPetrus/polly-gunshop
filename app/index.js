import Carrinho from './carrinho.js';
import Navigation from './navigation.js';
import Dropdown from './dropdown.js';

Vue.component('polly', {
    props: ['imagem', 'fazendo'],
    template: `
      <div class="polly-container">
          <p class="polly-msg mb-5 mt-3"><strong>"<slot></slot>"</strong></p>
          <img class="polly polly-intro" :src="imagem" :alt="fazendo">
      </div>

    `
});

Vue.component('cabecalho', {
  template: `
    <header class="cabecalho">
        <div class="cabecalho-grid">
            <div>
                <h1 class="title is-1 mr-6">Feirinha de armas da Polly</h1>
                <p class="ml-1 cabecalho-slogan"><i>Matar pessoas nunca foi tão <strong>kawaii.</strong> &#10084;</i></p>
            </div>
            <polly imagem="images/birthday-polly.svg" fazendo="Unicórnio amarelo esboçando uma expressão alegre ao lado do título.">Eu sou a Polly!</polly>
        </div>
    </header>
  `
});

Vue.component('titulo-da-sessao', {
    template: `
    <div class="catalogo-header mb-6">
        <h2 class="title is-2 ml-3">Catálogo</h2>
        <polly imagem="images/badass-polly.svg" fazendo="Unicórnio branco de óculos escuro, agindo de forma suspeita.">Rápido, antes que os tiras cheguem.</polly>
    </div>
    `
});

Navigation();
Dropdown();
Carrinho();

new Vue({
  el: "#root"
});
