var navigation = (function(){

    Vue.component('navitem', {
        props: ['link'],
        template: '<a :href="link" class="navbar-item"><slot></slot></a>'
    });

    Vue.component('navigation', {
        template: `
        <nav class="navbar menu-principal">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <slot></slot>
                </div>
            </div>
        </nav>
        `
    });
});

export default navigation;
