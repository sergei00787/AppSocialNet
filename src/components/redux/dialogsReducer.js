const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

let dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.NewMessage,
            }
            state.Messages.push(newMessage);
            state.NewMessage = '';
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessage = action.messageText;
            break;

        default: return state;
    }

    return state;
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export let updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text });

export default dialogsReducer;