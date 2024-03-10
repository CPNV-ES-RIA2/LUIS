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
      labels: [
        { entity_name: 'label1', score: '90' },
        { entity_name: 'label2', score: '72' },
        { entity_name: 'label3', score: '70' },
      ],
    }
  },
  getters,
  mutations,
  actions,
})
