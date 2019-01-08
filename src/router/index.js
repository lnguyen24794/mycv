import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/admin/posts/Index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/admin',
      name:'admin',
      children:[
       
      ]
    },
    {
      path:'/posts',
      name:'admin_posts',
      component:Posts
    },
    {
      path:"/posts/add",
      name:"admin_posts_add",
      component:Posts
    }
  ]
})
