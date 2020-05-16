
import { headerApi } from './../api/api';
import { setAuthData } from './authReducer'

const SUCCESS_INITIALIZED = 'appSocialNet/appRed/SUCESS_INITIALIZED';

let initState = {
  initialized: false
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    default: return state;
  }
}

export default appReducer;

export let initialize = () => ({ type: SUCCESS_INITIALIZED });

export const authMeTC = () => async (dispatch) => {
  let response = await headerApi.authMe();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthData(id, email, login, true));
  }
};

export let initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(authMeTC);
    Promise.all([promise]).then(response => {
      dispatch(initialize());
    })
  }
};

