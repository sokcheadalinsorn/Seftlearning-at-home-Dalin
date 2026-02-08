import { createRouter, createWebHistory } from 'vue-router'

// 1. Static Imports (Keep these at the top)
import HomeView from '../views/HomeView.vue'
import LandWarnings from '../views/LandWarnings.vue'
import SeaWarnings from '../views/SeaWarnings.vue'
import RegionListView from '../views/RegionListView.vue'
import RegionDetailView from '../views/RegionDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // This is your main "Regions" grid page (image 1)
    {
      path: '/water-temperatures',
      name: 'water-list',
      component: RegionListView,
    },
    // This is your "Specific Region" table page (image 2)
    {
      path: '/water-temperatures/:id',
      name: 'region-detail',
      component: RegionDetailView,
      props: true,
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
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router