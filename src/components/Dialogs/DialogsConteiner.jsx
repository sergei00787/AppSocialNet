import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogsReducer';

const DialogsConteiner = (props) => {
  
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Dialogs sendMessage={sendMessage} 
             updateNewMessageText={updateNewMessageText} 
             newMessage={state.DialogState.NewMessage} 
             dialogs={state.DialogState.Dialogs} 
             messages={state.DialogState.Messages} />   
  )
}

export default DialogsConteiner;