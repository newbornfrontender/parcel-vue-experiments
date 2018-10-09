import Vue from 'vue';
import App from './App';
import routes from './routes';

Vue.config.productionTip = false;

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
