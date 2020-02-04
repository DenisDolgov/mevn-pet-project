import Vue from 'vue'
import Router from 'vue-router'
import Validator from 'vee-validate'
import Button from '@components/Button.vue'
import Loader from '@components/Loader.vue'
import authMixin from '@mixins/auth'
import flashMixin from '@mixins/flash'
import TextInput from '@components/TextInput.vue'
import Main from '@views/Main.vue'
import router from '@router'
import store from '@store'
import axios from '@utils/axios'

Vue.use(Router)
Vue.use(Validator)
Vue.mixin(authMixin)
Vue.mixin(flashMixin)
Vue.component('btn', Button)
Vue.component('loader', Loader)
Vue.component('text-input', TextInput)

axios.interceptors.request.use((config) => {
  if (!!store.state.auth.user && !!store.state.auth.token) {
    config.headers = {
      access_token: store.state.auth.token
    }
  }

  return config
})

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main),
})
