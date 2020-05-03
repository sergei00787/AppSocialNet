import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogsReducer';
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

export default compose(connect(mapStateToProps, {sendMessage}), withAuthRedirectHoc)(Dialogs);