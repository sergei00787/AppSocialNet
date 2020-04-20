const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_PAGE_COUNT = "SET_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initState = {
  pageCount: 0,
  currentPage: 1,
  usersInPageCount: 10,
  usersTotalCount: 0,
  users: [
  ]
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {

    case FOLLOW: {
      return {
        ...state,
        //users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        //users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    }

    case SET_USERS: {
      return { ...state, users: action.users
      }
    }

    case SET_USERS_COUNT: {
      return {...state, usersTotalCount: action.usersTotalCount }
    }

    case SET_PAGE_COUNT: {
      return {...state, pageCount: action.pageCount}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.page}
    }
    
    default:
      return state;
  }
}

export default usersReducer;

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users });
export let setUsersTotalCountAC = (usersTotalCount) => ({type: SET_USERS_COUNT, usersTotalCount});
export let setPageCountAC = (pageCount) => ({type: SET_PAGE_COUNT, pageCount});
export let setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})