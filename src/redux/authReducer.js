import { headerApi, loginApi } from './../api/api';

const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_IS_AUTH_FETCHING = "TOGGLE_IS_AUTH_FETCHING";
const LOGIN = "LOGIN";

let initState = {
  isAuthFetching: false,
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  rememberMe: false,
  captcha: false
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: true
      }
    }

    case TOGGLE_IS_AUTH_FETCHING: {
      return { ...state, isAuthFetching: action.isFetching }
    }

    case LOGIN: {
      return {
        ...state,
        email: action.email,
        password: action.password,
        rememberMe: action.rememberMe,
        captcha: action.captcha
      }
    }

    default: return state;
  }
}

export let setAuthData = (userId, email, login) => ({ type: SET_AUTH_DATA, userId, email, login });
export let toggleIsAuthFetching = (isFetching) => ({ type: TOGGLE_IS_AUTH_FETCHING, isFetching });
export let login = (email , password, rememberMe, captcha) => ({type: LOGIN, email , password, rememberMe, captcha})

export const authMeTC = () => {
  return (dispatch) => {
    dispatch(toggleIsAuthFetching(true));
    headerApi.authMe().then(response => {
      dispatch(toggleIsAuthFetching(false));
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthData(id, email, login));
      }      
    })
  }
};

export const loginTC = (email , password, rememberMe, captcha) => {
  return (dispatch) => {
    loginApi.login().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(login( email, password, rememberMe, captcha));
      }      
    })
  }
};


export default authReducer;