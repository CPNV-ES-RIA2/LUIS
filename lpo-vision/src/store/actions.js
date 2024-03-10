export default {
  updateActiveLocale(context, payload) {
    const availableLocales = context.rootGetters.getLocales
    const locale = payload.localeData.locale.toUpperCase()

    // find the locale in the available locale objects, get the name, and set the active locale
    let activeLocale = availableLocales.find((l) => l.locale === locale)

    if (!activeLocale) {
      console.error(
        `Locale "${locale}" is not available. Falling back to active locale.`,
      )
      let fallbackLocale = context.rootGetters.getActiveLocale
      context.commit('setActiveLocale', fallbackLocale)
    } else {
      context.commit('setActiveLocale', activeLocale)
    }
  },
  updateLabels(context, payload) {
    context.commit('setLabels', payload.labels)
  },
}
