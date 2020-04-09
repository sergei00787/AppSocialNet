
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state: {
        DialogState: {
            NewMessage: "",
            Dialogs: [
                { id: 1, dialogName: "Sergey" },
                { id: 2, dialogName: "Alesya" },
                { id: 3, dialogName: "Shusha" },
                { id: 4, dialogName: "Valentina" },
                { id: 5, dialogName: "Vladimir" }
            ],
    
            Messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "Buy" },
                { id: 4, message: "No" }
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

    _callSubscriber() { console.log("state changed"); },


    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer
    },
    
    dispatch(action){

        this._state.ProfileState = profileReducer(this._state.ProfileState, action);
        this._state.DialogState = dialogsReducer(this._state.DialogState, action);
        this._callSubscriber(this._state);

    }
}

window.store = store;

export default store;