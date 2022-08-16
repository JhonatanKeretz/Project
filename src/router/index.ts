import Vue from 'vue'
//import Signup from '../components/Signup.vue'
//import Login from '../components/Login.vue'
//import Logout from '../components/Logout.vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/tasks',
    name: 'task',
    component: () => import('@/components/TaskList.vue'),
},
{
    path: '/tasks/new',
    name: 'task-new',
    component: () => import('@/components/TaskForm.vue'),
},
{
    path: '/tasks/:id',
    name: 'task-details',
    component: () => import('@/components/TaskDetail.vue'),
},
//{
 // path: '/signup',
//  name: 'Signup',
 // component: Signup
//},
//{
//  path: '/login',
//  name: 'Login',
//  component: Login
//},
//{
 // path: '/logout',
 // name: 'Logout',
 // component: Logout
//}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
