import Vue from 'vue'
import VueRouter from 'vue-router'
import apps from './apps'
import dashboard from './dashboard'
import pages from './pages'
import userInterface from './user-interface'

Vue.use(VueRouter)

const routes = [
  // ? We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    redirect: to => {
      const userData = JSON.parse(localStorage.getItem('userData'))

      // Check if userData is available
      if (userData) {
        // Handle the case where userData is available
        // Redirect based on your application logic
        // For example, you can redirect to different routes based on the user data
        // Here, we are assuming a basic redirection to the dashboard if user data is available
        return { name: 'dashboard-overview' } // Replace 'dashboard' with the appropriate route name
      } else {
        // Handle the case where userData is not available
        // Redirect to the login page if the current route is not 'auth-login' or 'login'
        if (to.name !== 'auth-login' && to.name !== 'login') {
          return { name: 'auth-login', query: to.query }
        }
        return null
      }
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error404.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/Register.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/ForgotPassword.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  ...dashboard,
  ...userInterface,
  ...apps,
  ...pages,
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
