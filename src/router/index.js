import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '@/components/Home_page.vue'
import About from '@/components/About us.vue'
import Bookings from '@/components/Bookings.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import Restaurant_list from '@/components/Restaurant_list.vue'


const routes = [
    {
    path:'/',
    component: Home_page
    },
    {
    path:'/About',
    component: About
    },
    {
    path:'/Bookings',
    component: Bookings
    },
    {
    path:'/Contact',
    component: Contact
    },
    {
    path:'/Feedback',
    component: Feedback
    },
    {
    path:'/Menu',
    component: Menu
    },
    {
    path:'/Order',
    component: Order
    },
    {
    path:'/Restaurant_list',
    component: Restaurant_list
    },
]
const router = createRouter(
    {
    history: createWebHistory(),
    routes: routes,
})

export default router
