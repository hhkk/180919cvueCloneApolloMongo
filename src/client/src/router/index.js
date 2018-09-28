// IMPORTS
import Vue from 'vue'
import Router from 'vue-router'
import welcomeComponent from '../components/welcomeComponent'

Vue.use(Router)

// ROUTES
const routes = [
  {
    path: '/',
    name: 'welcome', // from https://www.howtographql.com/vue-apollo/5-authentication/
    component: welcomeComponent
  },
  // { //
  //   path: '/',
  //   component: LinkList
  // },
  {
    path: '/create',
    component: CreateLink
  },
  {
    path: '/login',
    component: AppLogin
  }

]
// EXPORT ROUTER
export default new Router({
  mode: 'history',
  routes
})
