export default {
  updateActiveLocale(context, payload) {
    const availableLocales = context.rootGetters.getLocales
    const locale = payload.localeData

    if (!availableLocales.includes(locale)) {
      console.error(
        `Locale "${locale}" is not available. Falling back to active locale.`,
      )
      let fallbackLocale = context.rootGetters.getActiveLocale
      context.commit('setActiveLocale', fallbackLocale)
    } else {
      context.commit('setActiveLocale', locale)
    }
  },
}
