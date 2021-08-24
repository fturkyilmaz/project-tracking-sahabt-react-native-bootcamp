import {TOGGLE_LOADER, HIDE_LOADER, SET_THEME} from './actionTypes';

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
