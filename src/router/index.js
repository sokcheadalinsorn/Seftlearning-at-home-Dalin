import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandWarnings from '../views/LandWarnings.vue'
import SeaWarnings from '../views/SeaWarnings.vue'
import WarningView from '../views/WarningView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/warning',
      name: 'warning',
      component: () => import('../views/WarningView.vue'),
    },
       {
      path: '/warnings/land',
      name: 'land',
      component: LandWarnings,
    },
    {
      path: '/warnings/sea',
      name: 'sea',
      component: SeaWarnings,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
