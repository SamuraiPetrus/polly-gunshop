var dropdown = (function(){

    Vue.component('dropitem', {
        props: ['link'],
        template: '<a :href="link" class="dropdown-item"><slot></slot></a>'
    });

    Vue.component('dropdown', {
      props: ['title'],
      template: `
          <div class="navbar-item has-dropdown is-hoverable">
              <a href="#" class="navbar-link">{{ title }}</a>
              <div class="navbar-dropdown">
                  <slot></slot>
              </div>
          </div>
      `
    });
});

export default dropdown;
