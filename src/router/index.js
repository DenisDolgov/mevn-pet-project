import Router from 'vue-router'

import Home from '@views/Home.vue'
import Login from '@views/Login.vue'
import Register from '@views/Register.vue'
import EmailConfirm from '@views/EmailConfirm.vue'
import ResetPassword from '@views/ResetPassword.vue'
import ForgotPassword from '@views/ForgotPassword.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login,
    },
    {
      path: '/auth/register',
      component: Register,
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/auth/passwords/email',
      component: ForgotPassword,
    },
    {
      path: '/auth/passwords/reset/:token',
      component: ResetPassword,
    },
    {
      path: '/auth/emails/confirm/:token',
      component: EmailConfirm,
    },
  ],
})
