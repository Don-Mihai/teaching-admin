import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import Register from '../components/Register.vue'
import Auth from '../components/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {
          path: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/login',
      component: LoginView,
      children: [
        {
          path: 'register',
          component: Register
        },
        {
          path: 'auth',
          component: Auth
        }
      ]
    }
  ]
})

export default router
