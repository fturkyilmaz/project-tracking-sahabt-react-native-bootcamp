import I18n from 'i18n-js';
import * as RnLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import en from './en';
import tr from './tr';

const locales = RnLocalize.getLocales();

I18n.locale = locales[0].languageTag;

export const isRtl = locales[0].isRTL;

I18nManager.forceRTL = isRtl;

I18n.fallbacks = true;

I18n.locales.no = 'tr';

I18n.translations = {
  tr,
  en,
};

export default I18n;
