import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboniments',
      name: 'aboniments',
      component: () => import('../views/AbonimentsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // Всегда возвращается в начало страницы
    if (savedPosition) {
      return savedPosition // Вернуться назад (для кнопки Назад)
    } else {
      return { top: 0 } // В начало
    }
  }

})

export default router
