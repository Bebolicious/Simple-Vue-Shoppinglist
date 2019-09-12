import Vue from 'vue'
import Router from 'vue-router'
import shoppingList from './components/shoppingList.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingList',
      component: shoppingList
    },
    {
      path: '/about/',
      name: 'about',
      component: About
    }
  ]
})