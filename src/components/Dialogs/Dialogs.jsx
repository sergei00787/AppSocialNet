import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../dialogsReducer';

const Dialogs = (props) => {

  // let refAreaMessAdd = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  const DialogsElements = props.dialogState.Dialogs.map(dialog => {
    return (
      <DialogItem DialogName={dialog.dialogName} id={dialog.id} />
    )
  });

  const MessagesElements = props.dialogState.Messages.map(message => {
    return (
      <Message messageItem={message.message} />
    )
  });

  return (
    <div className={style.dialogsWrap}>
      <div className={style.dialogsBox}>
        {DialogsElements}
      </div>
      <div className={style.messagesBox}>
        {MessagesElements}
        <div className="containerMessAdd">
          <textarea onChange={onMessageChange} value={props.dialogState.NewMessage} ></textarea>
          <button className="addMessage" onClick={sendMessage}>Add message</button>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;