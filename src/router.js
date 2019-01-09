import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'page',
      redirect: {name:'home'},
      component: ()=> import('./views/home/index'),
      children:[
        {
          path:"/home",
          name:"home",
          component:()=> import('./views/home/home')
        },
        {
          path:"/aboutme",
          name:"aboutme",
          component:()=> import('./views/home/aboutme')
        },
        {
          path:"/resume",
          name:"resume",
          component:()=> import('./views/home/resume')
        },
        {
          path:"/portfolio",
          name:"portfolio",
          component:()=> import('./views/home/portfolio')
        },
        {
          path:"/contact",
          name:"contact",
          component:()=> import('./views/home/contact')
        }
      ]
    }
  ]
})
