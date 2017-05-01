import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class RegisterForm extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordConfirm: '',
      passwordConfirmError: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const {email, password, passwordConfirm} = this.state
    let formError = false
    if(!email) {
      this.setState({emailError: 'Email is required'})
      formError = true
    }
    if(!password) {
      this.setState({passwordError: 'Password is required'})
      formError = true
    }else if(password.length < 6){
      this.setState({passwordError: 'Password must be atleast 6 characters long'})
      formError = true
    }
    if(!passwordConfirm) {
      this.setState({passwordConfirmError: 'Confirm Password is required'})
      formError = true
    }else if(passwordConfirm !== password){
      this.setState({passwordConfirmError: 'Passwords must match'})
      formError = true
    }
    if(!formError){
      this.props.handleCreateUser(email, password)
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
          errorText={errors['auth/invalid-email'] || errors['auth/email-already-in-use'] || this.state.emailError}
        />
        <TextField
          hintText="Password"
          fullWidth={true}
          onChange={e => this.setState({password: e.target.value, passwordError: ''})}
          type="password"
          errorText={errors['auth/weak-password'] || this.state.passwordError}
        />
        <TextField
          hintText="Confirm Password"
          fullWidth={true}
          onChange={e => this.setState({passwordConfirm: e.target.value, passwordConfirmError: ''})}
          type="password"
          errorText={this.state.passwordConfirmError}
        />
        <br/><br/>
        <RaisedButton 
          fullWidth={true} 
          label="Register" 
          secondary={true}
          type="submit"
        />
        <br/><br/>
        <FlatButton fullWidth={true} label="Login" secondary={true} onTouchTap={this.props.changeModalState('LoginOpen', true)}/>
      </form>
    )
  }
}

export default RegisterForm