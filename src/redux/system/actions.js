import {
  TOGGLE_LOADER,
  HIDE_LOADER,
  SET_THEME,
  SET_USER,
  USER_LOGOUT,
  SET_LANGUAGE,
} from './actionTypes';

// Loader Açar
export function toggleLoader() {
  return {
    type: TOGGLE_LOADER,
  };
}

//Loader kapatır
export function hideLoader() {
  return {type: HIDE_LOADER};
}

// Sistemin temasını set eder
export function setTheme(payload) {
  return {type: SET_THEME, payload};
}

// Sistemin dilini set eder
export function setLanguage(payload) {
  return {type: SET_LANGUAGE, payload};
}

// Sisteme login olmusş kişiyi setler
export function setUser(payload) {
  return {type: SET_USER, payload};
}

//Sistemde cıkış yapmamımız sağlar
export function userLogout() {
  return {type: USER_LOGOUT};
}
