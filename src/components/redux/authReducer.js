const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initState = {
  isAuthFetching: false,
  userId: null,
  email: null,
  login: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login
      }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isAuthFetching: action.isFetching }
    }

    default: return state;
  }
}

export let setAuthData = (userId, email, login) => ({ type: SET_AUTH_DATA, userId, email, login });
export let toggleIsAuthFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer;