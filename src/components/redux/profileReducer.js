const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  NewPost: "serg",
  Posts: [
    { id: 1, message: "HI, I'm cool hacker=)", countLikes: 100 },
    { id: 2, message: "HI, I'm cool hacker=)", countLikes: 1000 },
    { id: 3, message: "HI, I'm cool hacker=)", countLikes: 10000 },
    { id: 4, message: "HI, I'm cool hacker=)", countLikes: 100000 }
  ]
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 6, message: state.NewPost, countLikes: 0 }
      return { ...state, Posts: [...state.Posts, newPost], NewPost:''};
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, NewPost:action.newText};
    }

    default: return state;
  }


}

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;