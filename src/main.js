// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
//import VueMaterial from 'vue-material';

import ItunesSearch from './components/itunes-search/itunes-search.vue';
import router from './router';

Vue.config.productionTip = false;
// Vue.use(VueMaterial);

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  mixins: [ItunesSearch],
  components: {},
  // template: '<App/>'
})

window.vm = vm;
