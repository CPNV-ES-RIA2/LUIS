import { createI18n } from 'vue-i18n';

import en from './languages/en.json';
import fr from './languages/fr.json';
import de from './languages/de.json';
import pt from './languages/pt.json';

function loadLocaleMessages() {
  const locales = [{ en: en }, { fr: fr }, { de: de }, { pt: pt }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

let browserLocale = navigator.language.split('-')[0];

export default createI18n({
  legacy: false,
  locale: browserLocale,
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
});
