import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CreateCate from '../views/CreateCate.vue'
import ListCate from '../views/ListCate.vue'
import CreateItem from '../views/CreateItem.vue'
import ListItem from '../views/ListItem.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
        path: 'categories/create',
        component: CreateCate
      },
      {
        path: 'categories/list',
        component: ListCate
      },
      {
        path: 'categories/edit/:id',
        component: CreateCate,
        props: true
      }, {
        path: 'items/create',
        component: CreateItem
      },
      {
        path: 'items/list',
        component: ListItem
      },
      {
        path: 'items/edit/:id',
        component: CreateItem,
        props: true
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router