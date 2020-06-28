import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';

const messages = {
    ind: () => import('./i18n/ind.js').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    if (locale === 'ind') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
}, 'en');
