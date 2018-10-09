import Vue from 'vue';
import App from './App';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.config.productionTip = false;

const routes = {
  '/': Home,
  '/about': About,
};

const vm = new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute];
    },
  },
  render (h) { return h(
    App, [ h(
      this.ViewComponent,
    )],
  )},
}).$mount('#app');

window.addEventListener('popstate', () => {
  vm.currentRoute = window.location.pathname;
});
