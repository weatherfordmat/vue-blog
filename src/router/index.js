import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import AddPost from '@/components/AddPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/:id?',
      name: 'Container',
      component: Container
    }
  ],
  mode: 'history'
})
