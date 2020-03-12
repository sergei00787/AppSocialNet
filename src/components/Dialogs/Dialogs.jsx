import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let refAreaMessAdd = React.createRef();

  let addMessage = () => {
    let text = refAreaMessAdd.current.value;
    alert(text);
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
          <textarea ref={refAreaMessAdd}></textarea>
          <button className="addMessage" onClick={addMessage}>Add message</button>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;