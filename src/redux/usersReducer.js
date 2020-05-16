import { usersApi } from './../api/api';
import {updateObjectProperties} from './../utils/object-helpers';

const FOLLOW = "appSocialNet/usersRed/FOLLOW";
const UNFOLLOW = "appSocialNet/usersRed/UNFOLLOW";
const SET_USERS = "appSocialNet/usersRed/SETUSERS";
const SET_USERS_COUNT = "appSocialNet/usersRed/SET_USERS_COUNT";
const SET_PAGE_COUNT = "appSocialNet/usersRed/SET_PAGE_COUNT";
const SET_CURRENT_PAGE = "appSocialNet/usersRed/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "appSocialNet/usersRed/TOGGLE_IS_FETCHING";
const FETCHING_FOLLOWER = "appSocialNet/usersRed/FETCHING_FOLLOWER";


let initState = {
  pageCount: 0,
  currentPage: 1,
  usersInPageCount: 10,
  usersTotalCount: 0,
  isFetching: false,
  fetchingFollowerList: [],
  users: [
  ]
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {

    case FOLLOW: {
      return {
        ...state,
        users: updateObjectProperties(state.users, "id", action.userId, {followed: true})
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectProperties(state.users, "id", action.userId, {followed: false})
      }
    }

    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    }

    case SET_USERS_COUNT: {
      return { ...state, usersTotalCount: action.usersTotalCount }
    }

    case SET_PAGE_COUNT: {
      return { ...state, pageCount: action.pageCount }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case FETCHING_FOLLOWER: {
      return {
        ...state,
        fetchingFollowerList: action.isFetching
          ? [...state.fetchingFollowerList, action.userId]
          : [state.fetchingFollowerList.filter(id => id === action.userId)]
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
export let setUsersTotalCount = (usersTotalCount) => ({ type: SET_USERS_COUNT, usersTotalCount });
export let setPageCount = (pageCount) => ({ type: SET_PAGE_COUNT, pageCount });
export let setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let fetchingFollower = (isFetching, userId) => ({ type: FETCHING_FOLLOWER, isFetching, userId });

export const requestUsersTC = (usersInPageCount, currentPage) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersApi.getUsers(usersInPageCount, currentPage);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
};

export const getUsersTotalCountTC = (usersInPageCount) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersApi.getUsersTotalCount();
  dispatch(toggleIsFetching(false));
  dispatch(setUsersTotalCount(response.totalCount));

  let pageCount = Math.ceil(response.totalCount / usersInPageCount);
  dispatch(setPageCount(pageCount));
};

const followUnfollowFlow = async (dispatch, id, actionFetch, actionCreator) => {
  dispatch(fetchingFollower(true, id));
  let response = await actionFetch(id);
  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
    dispatch(fetchingFollower(false, id));
  }
}

export const followTC = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersApi.follow, follow);

  /*
  dispatch(fetchingFollower(true, id));
  let response = await usersApi.follow(id);
  if (response.resultCode === 0) {
    dispatch(follow(id));
    dispatch(fetchingFollower(false, id));
  }
  */
};

export const unfollowTC = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersApi.unfollow, unfollow);
  /*dispatch(fetchingFollower(true, id));
  let response = usersApi.unfollow(id);

  if (response.resultCode === 0) {
    dispatch(unfollow(id));
    dispatch(fetchingFollower(false, id));
  }
  */
};
