// import rerender from './render';
let store = {
    _state: {
        DialogState: {
            Dialogs: [
                { id: 1, dialogName: "Sergey" },
                { id: 2, dialogName: "Alesya" },
                { id: 3, dialogName: "Shusha" },
                { id: 4, dialogName: "Valentina" },
                { id: 5, dialogName: "Vladimir" }
            ],
    
            Messages: [
                { id: 1, message: "Hi" },
                { id: 1, message: "How are you" },
                { id: 1, message: "Buy" },
                { id: 1, message: "No" }
            ],
        },
    
        ProfileState: {
            NewPost: "serg",
            Posts: [
                { id: 1, message: "HI, I'm cool hacker=)", countLikes: 100 },
                { id: 2, message: "HI, I'm cool hacker=)", countLikes: 1000 },
                { id: 3, message: "HI, I'm cool hacker=)", countLikes: 10000 },
                { id: 4, message: "HI, I'm cool hacker=)", countLikes: 100000 }
            ]
        }
    },

    getState(){
        return this._state;
    },

    _callSubscriber() { console.log("state changed"); },

    addPost(){
        let newPost = {
            id:5,
            message: this._state.ProfileState.NewPost,
            countLikes: 0
        }
        this._state.ProfileState.Posts.push(newPost);
        this._state.ProfileState.NewPost = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.ProfileState.NewPost = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer
    }

}

window.store = store;

export default store;