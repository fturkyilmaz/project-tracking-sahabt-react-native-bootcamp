import {
  TOGGLE_LOADER,
  HIDE_LOADER,
  USER_LOGOUT,
  SET_THEME,
  SET_USER,
  SET_LANGUAGE,
} from './actionTypes';

const initialState = {
  loading: false,
  userInfo: {},
  token: '',
  language: 'TR',
  isDarkMode: false,
  isLogin: false,
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {...state, loading: true};

    case HIDE_LOADER:
      return {...state, loading: false};

    case SET_USER:
      return {...state, isLogin: true, userInfo: action.payload};

    case USER_LOGOUT:
      return {
        ...state,
        userInfo: {},
        token: '',
        language: 'TR',
        loading: false,
        isLogin: false,
      };

    case SET_THEME:
      return {...state, isDarkMode: action.payload};

    case SET_LANGUAGE:
      return {...state, language: action.payload};

    default:
      return state;
  }
}
