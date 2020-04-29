import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  enabledEditMode() {
    this.setState({
      editMode: true
    })
  }

  disabledEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return <>
    {(!this.state.editMode) 
      ? <div><span onDoubleClick= {this.enabledEditMode.bind(this)} >Sergey is good programmer</span></div>
      : <div><input autoFocus={true} value="Sergey is good programmer" onBlur={ this.disabledEditMode.bind(this) }/></div>
    }
      
      
    </>
  }

}

export default ProfileStatus;