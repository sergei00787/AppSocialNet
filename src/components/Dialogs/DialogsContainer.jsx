import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import withAuthRedirectHoc from './../Hocs//RedirectHoc'
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return (
    {
      dialogs: state.DialogState.Dialogs,
      messages: state.DialogState.Messages,
      newMessage: state.DialogState.NewMessage
    }
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
    {
      sendMessage: () => {
        dispatch(sendMessageActionCreator())
      }, 
      updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextActionCreator(text))
      }
    }
  )
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectHoc)(Dialogs);

// const AuthRedirectDialogs = withAuthRedirectHoc(Dialogs);

// const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsConteiner;