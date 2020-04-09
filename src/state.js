
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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
        switch(action.type) {

            case ADD_POST:
                let newPost = {
                    id:6,
                    message: this._state.ProfileState.NewPost,
                    countLikes: 0
                }
                this._state.ProfileState.Posts.push(newPost);
                this._state.ProfileState.NewPost = '';
                this._callSubscriber(this._state);
            break;

            case UPDATE_NEW_POST_TEXT:
                this._state.ProfileState.NewPost = action.newText;
                this._callSubscriber(this._state);
            break;

            case SEND_MESSAGE:
                let newMessage = {
                    id:5,
                    message: this._state.DialogState.NewMessage,
                }
                this._state.DialogState.Messages.push(newMessage);
                this._state.DialogState.NewMessage = '';
                this._callSubscriber(this._state);
            break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.DialogState.NewMessage = action.messageText;
                this._callSubscriber(this._state);
            break;

            default:
                window.alert("НЕТ ТАКОГО ДЕЙСТВИЯ");
        }
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = (text) => ({ type:UPDATE_NEW_POST_TEXT, newText:text} );

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export let updateNewMessageTextActionCreator = (text) => ({ type:UPDATE_NEW_MESSAGE_TEXT, messageText:text} );

window.store = store;

export default store;