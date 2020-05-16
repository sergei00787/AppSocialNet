import { profileApi } from './../api/api';

const ADD_POST = 'appSocialNet/profileRed/ADD-POST';
const SET_PROFILE = 'appSocialNet/profileRed/SET_PROFILE';
const SET_PROFILE_STATUS = 'appSocialNet/profileRed/SET_PROFILE_STATUS';

let initialState = {
  Posts: [
    { id: 1, message: "HI, I'm cool hacker=)", countLikes: 100 },
    { id: 2, message: "HI, I'm cool hacker=)", countLikes: 1000 },
    { id: 3, message: "HI, I'm cool hacker=)", countLikes: 10000 },
    { id: 4, message: "HI, I'm cool hacker=)", countLikes: 100000 }],
  profile: null,
  status: ""
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 5, message: action.newPost, countLikes: 0 }
      return { ...state, Posts: [...state.Posts, newPost] };
    }

    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_PROFILE_STATUS: {
      return { ...state, status: action.status }
    }

    default: return state;
  }
}

export let addPost = (newPost) => ({ type: ADD_POST, newPost });

export let setProfile = (profile) => ({ type: SET_PROFILE, profile })
export let setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const getProfileTC = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId);
  dispatch(setProfile(response));
}

export const getProfileStatusTC = (userId) => async (dispatch) => {
  let response = await profileApi.getProfileStatus(userId);
  dispatch(setProfileStatus(response))

}

export const setProfileStatusTC = (status) => async (dispatch) => {
  let response = await profileApi.setProfileStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
}

export default profileReducer;