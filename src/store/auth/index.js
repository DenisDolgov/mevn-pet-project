import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'

console.log('actions', actions);
console.log('mutations', mutations);
console.log('getters', getters);

let initialState = null

try {
  initialState = JSON.parse(localStorage.getItem('auth'))
} catch (e) {
  initialState = {
    user: null,
    token: null,
  }
}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
