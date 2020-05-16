import { loginApi } from './../api/api';
import { stopSubmit } from 'redux-form';
import { authMeTC } from './../redux/appReducer';

const SET_AUTH_DATA = "appSocialNet/authRed/SET_AUTH_DATA";
const TOGGLE_IS_AUTH_FETCHING = "appSocialNet/authRed/TOGGLE_IS_AUTH_FETCHING";
const LOGIN = "appSocialNet/authRed/LOGIN";

let initState = {
  isAuthFetching: false,
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  rememberMe: false,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }

    case TOGGLE_IS_AUTH_FETCHING: {
      return { ...state, isAuthFetching: action.isFetching }
    }

    case LOGIN: {
      return {
        ...state,
        ...action.payload
      }
    }

    default: return state;
  }
}

export let setAuthData = (userId, email, login, isAuth) => ({ type: SET_AUTH_DATA, payload: { userId, email, login, isAuth } });
export let toggleIsAuthFetching = (isFetching) => ({ type: TOGGLE_IS_AUTH_FETCHING, isFetching });
export let login = (email, password, rememberMe) => ({ type: LOGIN, payload: { email, password, rememberMe } })

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
  let response = await loginApi.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(authMeTC());
  } else {
    let errorMessage = (response.data.messages.length > 0 ? response.data.messages[0] : "Some Error")
    dispatch(stopSubmit('login', { _error: errorMessage }))
  }
}

export const logoutTC = () => {
  return async (dispatch) => {
    let response = await loginApi.logout();

    if (response.data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, null));
    }
  };
}



export default authReducer;