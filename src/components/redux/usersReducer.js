const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_PAGE_COUNT = "SET_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FETCHING_FOLLOWER = "FETCHING_FOLLOWER";


let initState = {
  pageCount: 0,
  currentPage: 1,
  usersInPageCount: 10,
  usersTotalCount: 0,
  isFetching: false,
  fetchingFollowerList: [7491],
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

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    case FETCHING_FOLLOWER: {
      return {
        ...state, 
        fetchingFollowerList: action.isFetching 
          ? [...state.fetchingFollowerList, action.userId ]   
          : [ state.fetchingFollowerList.filter(id => id === action.userId)]
      }
    }
    
    default:
      return state;
  }
}

export default usersReducer;

export let follow = (userId) => ({ type: FOLLOW, userId });
export let unfollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_COUNT, usersTotalCount});
export let setPageCount = (pageCount) => ({type: SET_PAGE_COUNT, pageCount});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let fetchingFollower = (isFetching, userId) => ({type: FETCHING_FOLLOWER, isFetching, userId})