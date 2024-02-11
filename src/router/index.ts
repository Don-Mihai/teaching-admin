import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TeacherView.vue'
import TeacherView from '../views/TeacherView.vue'
import StudentsView from '../views/StudentsView.vue'
import LoginView from '../views/LoginView.vue'
import Register from '../components/Register.vue'
import Auth from '../components/Auth.vue'
import MainView from '@/views/MainView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {
          path: 'teacher',
          component: TeacherView
        },
        {
          path: 'students',
          component: StudentsView
        },
        {
          path: 'users',
          component: UserView
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
