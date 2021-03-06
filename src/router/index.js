import { createRouter, createWebHistory } from 'vue-router'
import Teams from '../views/Teams.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Teams',
    component: Teams,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import('../views/Players.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/draft',
    name: 'Draft',
    component: () => import('../views/Draft.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/player/:pid',
    name: 'Player',
    component: () => import('../views/Player.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/add/:tid/:pid',
    name: 'AddPlayer',
    component: () => import('../views/AddPlayer.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
