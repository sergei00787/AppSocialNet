import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import withAuthRedirectHoc from './../Hocs//RedirectHoc'
import { compose } from 'redux';
import {GetDailogs, GetMessages, GetNewMessage} from './../../redux/dialogsSelectors'

let mapStateToProps = (state) => {
  return (
    {
      dialogs: GetDailogs(state),
      messages: GetMessages(state),
      newMessage: GetNewMessage(state)
    }
  )
}

export default compose(connect(mapStateToProps, {sendMessage}), withAuthRedirectHoc)(Dialogs);