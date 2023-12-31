import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...setupLayouts(routes),
  ],
})

router.beforeEach(to => {
  const isLoggedIn = isUserLoggedIn()

  if (to.name === 'login' && isLoggedIn) {
    // If the user is logged in and trying to access the login page, redirect to the home page
    return '/'
  }
  else if (!isLoggedIn && to.name !== 'login') {
    // If the user is not logged in and trying to access a route other than login, redirect to login
    return '/login'
  }
  else {
    // Continue with the navigation
    return true
  }

  // if (canNavigate(to)) {
  //   if (to.meta.redirectIfLoggedIn && isLoggedIn)
  //     return '/'
  // }
  // else {
  //   if (isLoggedIn)
  //     return { name: 'not-authorized' }
  //   else
  //     return { name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
  // }
})

export default router
