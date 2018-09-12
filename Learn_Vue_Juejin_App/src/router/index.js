import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'components/home-page/home-page'
import Brochures from 'components/brochures/brochures'
import OpenSourceLibrary from 'components/open-source-library/open-source-library'
import Activity from 'components/activity/activity'
import All from 'components/all/all'
import Bought from 'components/bought/bought'
import Myself from 'components/myself/myself'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: '首页',      
      component: HomePage
    },
    {
      path: '/brochures',
      component: Brochures,
      redirect: '/brochures/all',
      children: [
        {
          path: 'all',
          component: All
        },
        {
          path: 'bought',
          component: Bought
        },
        {
          path: 'myself',
          component: Myself
        }
      ]
    },
    {
      path: '/openSourceLibrary',
      name: '开源库',
      component: OpenSourceLibrary
    },
    {
      path: '/activity',
      name: '活动',
      component: Activity
    }
  ]
})
