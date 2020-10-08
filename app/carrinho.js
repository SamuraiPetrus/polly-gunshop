var carrinho = (function () {

    Vue.component('carrinho-item', {
        props: ['thumbnail', 'preco'],
        template: `
            <li class="carrinho-item">
            <span class="icon has-text-success">
                <i class="fas fa-check-square"></i>
            </span>
                <figure class="carrinho-thumb mr-3">
                  <img :src="thumbnail">
                </figure>
                <a class="carrinho-title mr-3" href="#"><slot></slot></a>
                <span class="preco">{{ '$' + preco }}</span>
            </li>
        `
    });

    Vue.component('Carrinho', {
        template: `
            <div class="carrinho-content">
                <ul class="carrinho-items">
                    <slot></slot>
                </ul>
                <button class="button is-success is-light carrinho-checkout">Finalizar compra</button>
            </div>
        `
    });

});

export default carrinho;
