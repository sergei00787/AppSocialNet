const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let profileReducer = (state, action) => {

    switch(action.type) {

        case SEND_MESSAGE:
                let newMessage = {
                    id:5,
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

export let updateNewMessageTextActionCreator = (text) => ({ type:UPDATE_NEW_MESSAGE_TEXT, messageText:text} );

export default profileReducer;