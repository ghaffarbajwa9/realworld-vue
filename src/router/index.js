import { createRouter, createWebHistory } from 'vue-router'
import EventsList from '../views/EventsList.vue'
import EventDetails from '@/components/EventDetails.vue'
import CreateEvent from '@/components/CreateEvent.vue'

const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList,
    props: true
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/createevent',
    name: 'CreateEvent',
    component: CreateEvent
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
