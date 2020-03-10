import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const DialogsData = [
    {id:1, dialogName: "Sergey"},
    {id:2, dialogName: "Alesya"},
    {id:3, dialogName: "Shusha"},
    {id:4, dialogName: "Valentina"},
    {id:5, dialogName: "Vladimir"}
  ]

  const DialogsElements = DialogsData.map(dialog => {
    return (
      <DialogItem DialogName={dialog.dialogName} id={dialog.id} />
    )
  });

  const MessagesData = [
    {id:1, message:"Hi"},
    {id:1, message:"How are you"},
    {id:1, message:"Buy"},
    {id:1, message:"No"}
  ];

  const MessagesElements = MessagesData.map(message => {
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
      </div>
    </div>
  )
}

export default Dialogs;