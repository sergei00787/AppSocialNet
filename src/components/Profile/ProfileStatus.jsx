import React from 'react';
import s from './Profile.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState( {status: this.props.status} )
    }
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
      ? <div className={s.boxstatus}  onDoubleClick= {this.enabledEditMode.bind(this)} >{(!this.props.status)? "Введите статус" : this.props.status}</div>
      : <div><input className={s.boxstatus}
                    placeholder="Введите статус" 
                    autoFocus={ true } 
                    value={ this.state.status } 
                    onBlur={ this.disabledEditMode.bind(this)}
                    onChange={ this.changeStatus } /></div>}
    </>
  }

}

export default ProfileStatus;