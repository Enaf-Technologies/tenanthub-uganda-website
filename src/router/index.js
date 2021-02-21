import { createWebHistory, createRouter  } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () => import('../views/Pricing.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
    },
    {
        path: '/about-us',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contact-us',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('../views/PrivacyPolicy.vue')
    },
    { 
        path: '/:pathMatch(.*)*',
        name: 'not-found', 
        component: NotFound 
    },
];


const router = createRouter({
    history : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }else {
            if (savedPosition) {
                return savedPosition
              } else {
                return { x: 0, y: 0 }
              }
        }
      }
});

router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
  }).href

export default router