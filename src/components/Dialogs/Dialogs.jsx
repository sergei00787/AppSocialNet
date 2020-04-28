import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import whitAuthRedirectHoc from './../Hocs//RedirectHoc'

const Dialogs = (props) => {

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  }
  
  const DialogsElements = props.dialogs.map(dialog => {
    return (
      <DialogItem key={dialog.id} DialogName={dialog.dialogName} id={dialog.id} />
    )
  });

  const MessagesElements = props.messages.map(message => {
    return (
      <Message key={message.id} messageItem={message.message} />
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
          <textarea onChange={onMessageChange} value={props.newMessage} ></textarea>
          <button className="addMessage" onClick={onSendMessage}>Add message</button>
        </div>
      </div>

    </div>
  )
}

const AuthRedirectDialogs = whitAuthRedirectHoc(Dialogs);

export default AuthRedirectDialogs;