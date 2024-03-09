import { createStore } from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default createStore({
  state() {
    return {
      locales: [
        { locale: 'EN', name: 'English' },
        { locale: 'FR', name: 'Français' },
        { locale: 'DE', name: 'Deutsch' },
        { locale: 'PT', name: 'Português' },
      ],
      activeLocale: { locale: 'EN', name: 'English' },
    }
  },
  getters,
  mutations,
  actions,
})
