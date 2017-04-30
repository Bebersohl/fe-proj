import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { auth, googleAuthProvider } from '../firebase'
import LoginForm from './LoginForm'
import LoginDialog from './LoginDialog'

class Login extends Component {
  static muiName = 'FlatButton'
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <FlatButton {...this.props} label="Login" onTouchTap={() => this.handleOpen()}/>
        <LoginDialog
          handleClose={this.handleClose}
          open={this.state.open}
        >
          <RaisedButton 
            fullWidth={true} 
            label="Login with Google" 
            primary={true} 
            onTouchTap={() => auth.signInWithRedirect(googleAuthProvider)}
          />
          <br/><br/>
          <h5 style={{textAlign: 'center'}}>OR</h5>
          <LoginForm/>
        </LoginDialog>
      </div>
    )
  }
}

export default Login
