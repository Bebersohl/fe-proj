import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import LoginFormContainer from '../containers/LoginFormContainer'
import RegisterFormContainer from '../containers/RegisterFormContainer'
import ModalDialog from './ModalDialog'
import MediaQuery from 'react-responsive'

class HeaderLogin extends Component {
  static muiName = 'FlatButton'
  constructor() {
    super()
    this.state = {
      LoginOpen: false,
      RegisterOpen: false,
    }
    this.changeModalState = this.changeModalState.bind(this)
  }

  changeModalState(state, open) {
    const { resetErrors } = this.props
    return function() {
      this.setState({
        LoginOpen: false,
        RegisterOpen: false,
        [state]: open
      });
      if(!open){
        resetErrors()
      }
    }.bind(this)
  }

  render() {
    const {creatingUser, signingInUser, dispatch, resetErrors, ...props} = this.props
    return (
      <div>
        <MediaQuery minDeviceWidth={425}>
          <FlatButton {...props} label="Register" onTouchTap={this.changeModalState('RegisterOpen', true)}/>
        </MediaQuery>
        <FlatButton {...props} label="Login" onTouchTap={this.changeModalState('LoginOpen', true)}/>
        <ModalDialog
          handleClose={this.changeModalState('LoginOpen', false)}
          open={this.state.LoginOpen}
          modal={signingInUser}
          loading={signingInUser}
        >
          <LoginFormContainer changeModalState={this.changeModalState}/>
        </ModalDialog>
        <ModalDialog
          handleClose={this.changeModalState('RegisterOpen', false)}
          open={this.state.RegisterOpen}
          modal={creatingUser}
          loading={creatingUser}
        >
          <RegisterFormContainer changeModalState={this.changeModalState}/>
        </ModalDialog>
      </div>
    )
  }
}

export default HeaderLogin