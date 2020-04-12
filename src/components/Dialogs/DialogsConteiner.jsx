import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogsReducer';
import StoreContext from '../redux/context/store-context';

const DialogsConteiner = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
          let state = store.getState();

          let sendMessage = () => {
            store.dispatch(sendMessageActionCreator());
          }

          let updateNewMessageText = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
          }

          return (
            <Dialogs sendMessage={sendMessage}
            updateNewMessageText={updateNewMessageText}
            newMessage={state.DialogState.NewMessage}
            dialogs={state.DialogState.Dialogs}
            messages={state.DialogState.Messages} />
          )  
        }
      }
    </StoreContext.Consumer>

  )
}

export default DialogsConteiner;