import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogFormRedux from './DialogForm';

const Dialogs = (props) => {

  let onSendMessage = (value) => {
    props.sendMessage(value.message);
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

        <DialogFormRedux onSubmit={onSendMessage}/>
        
      </div>

    </div>
  )
}

export default Dialogs;