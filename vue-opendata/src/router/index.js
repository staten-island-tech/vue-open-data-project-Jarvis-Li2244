import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PieChart from '../components/PieChart.vue'
import BarChart from '../components/BarChart.vue'
import TimeChart from '../components/TimeChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/piechart',
      name: 'piechart',
      component: PieChart,
    },
    {
      path: '/barchart',
      name: 'barchart',
      component: BarChart,
    },
    {
      path: '/timechart',
      name: 'timechart',
      component: TimeChart,
    },
  ],
})

export default router
