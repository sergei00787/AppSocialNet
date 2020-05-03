const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    case SEND_MESSAGE: {
      let newMessage = {id: 5, message: action.message}
      return {...state, Messages: [...state.Messages, newMessage]};
    }

    default: return state;
  }  
}

export let sendMessage = (message) => ({ type: SEND_MESSAGE, message });

export default dialogsReducer;