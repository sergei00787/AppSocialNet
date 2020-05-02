import React from 'react';
import s from './Profile.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  enabledEditMode() {
    this.setState({editMode: true})
  }

  disabledEditMode() {
    this.setState({editMode: false})
    this.props.setProfileStatus(this.state.status);
  }

  changeStatus = (e) => {
    this.setState({ status: e.target.value })
  }

  render() {
    return <>
    {(!this.state.editMode) 
      ? <div className={s.boxstatus} ><span onDoubleClick= {this.enabledEditMode.bind(this)} >{(!this.props.status)? "Введите статус" : this.props.status}</span></div>
      : <div><input autoFocus={ true } 
                    value={ this.state.status } 
                    onBlur={ this.disabledEditMode.bind(this)}
                    onChange={ this.changeStatus } /></div>}
    </>
  }

}

export default ProfileStatus;