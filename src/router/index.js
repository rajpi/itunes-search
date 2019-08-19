import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SearchPage from '@/pages/search-page';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  }, {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  }]
})
