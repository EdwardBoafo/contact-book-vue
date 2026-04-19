import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewContactView from '../views/NewContactView.vue'
import ContactDetailsView from '../views/ContactDetailsView.vue'
import EditContactView from '../views/EditContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/new',
      component: NewContactView
    },
    {
      path: '/contact/:id',
      component: ContactDetailsView
    },
    {
      path: '/edit/:id',
      component: EditContactView
    }
  ]
})

export default router