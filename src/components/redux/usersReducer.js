import React from 'react';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";

let initState = {
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
      return { ...state, users: [...state.users, ...action.users]
      }
    }
    default:
      return state;
  }
}

export default usersReducer;

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users });