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
    const {email, password} = this.state
    let formError = false
    if(!this.state.email) {
      formError = true
      this.setState({emailError: 'Email is required'})
    }
    if(!this.state.password) {
      formError = true
      this.setState({passwordError: 'Password is required'})
    }
    if(!formError){
      this.props.handleSignInUser(email, password)
    }
  }

  render(){
    const { errors } =  this.props
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <TextField
          hintText="Email"
          fullWidth={true}
          onChange={e => this.setState({email: e.target.value, emailError: ''})}
          errorText={
            errors['auth/invalid-email'] || 
            errors['auth/user-disabled'] || 
            errors['auth/user-not-found'] || 
            this.state.emailError}
        />
        <TextField
          hintText="Password"
          fullWidth={true}
          onChange={e => this.setState({password: e.target.value, passwordError: ''})}
          type="password"
          errorText={
            errors['auth/wrong-password'] || 
            this.state.passwordError
          }
        />
        <br/><br/>
        <RaisedButton 
          fullWidth={true} 
          label="Login with Email" 
          secondary={true}
          type="submit"
        />
        <br/><br/>
        <FlatButton 
          fullWidth={true} 
          label="Register" 
          secondary={true} 
          onTouchTap={this.props.changeModalState('RegisterOpen', true)}
          labelStyle={{fontSize: '.7em'}}
        />
      </form>
    )
  }
}

export default LoginForm