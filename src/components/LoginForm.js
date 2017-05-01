import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.email) {
      this.setState({emailError: 'Email is required'})
    }
    if(!this.state.password) {
      this.setState({passwordError: 'Password is required'})
    }
  }

  render(){
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <TextField
          hintText="Email"
          fullWidth={true}
          onChange={e => this.setState({email: e.target.value, emailError: ''})}
          errorText={this.state.emailError}
        />
        <TextField
          hintText="Password"
          fullWidth={true}
          onChange={e => this.setState({password: e.target.value, passwordError: ''})}
          type="password"
          errorText={this.state.passwordError}
        />
        <br/><br/>
        <RaisedButton 
          fullWidth={true} 
          label="Login with Email" 
          secondary={true}
          type="submit"
        />
        <br/><br/>
        <FlatButton fullWidth={true} label="Register" secondary={true} onTouchTap={this.props.changeModalState('RegisterOpen', true)}/>
      </form>
    )
  }
}

export default LoginForm