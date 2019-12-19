import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/register'
import Login from '@/components/login'
import CreateAdd from '@/components/createAd'
import AllAds from '@/components/allAds'
import Search from '@/components/search'
import UserAds from '@/components/userAds'
import EditAd from '@/components/editAd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/createAd',
      name: 'createAd',
      component: CreateAdd
    },
    {
      path: '/allAds',
      name: 'allAds',
      component: AllAds
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/userAds',
      name: 'userAds',
      component: UserAds
    },
    {
      path: '/editAd',
      name: 'editAd',
      component: EditAd
    }
  ]
})
