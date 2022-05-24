import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'
import Contact from '../views/Contact.vue'


Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'Avent',
  component: About
},
{
  path: '/event',
  name: 'Event',
  component: Event
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  path: '/*',
  name: 'NotFound',
  component: () => import('../components/NotFound.vue')
}
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
