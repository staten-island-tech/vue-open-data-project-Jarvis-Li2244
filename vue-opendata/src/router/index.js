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
      path: '/about',
      name: 'about',
      component: AboutView,
      children: [
        {
          path: 'piechart',
          component: PieChart
        },
        {
          path: 'barchart',
          component: BarChart
        },
        {
          path: 'timechart',
          component: TimeChart
        }
      ]
    },
  ],
})

export default router
