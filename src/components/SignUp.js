import React, {Component} from 'react'
import { Segment, Button, Form, Header, Icon, Divider, Message, Dimmer, Loader } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import {validate} from 'email-validator'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    clientErrors: [],
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, confirmPassword,} = this.state
    const clientErrors = []

    if(!email){
      clientErrors.push('Email is required')
    } else if (!validate(email)){
      clientErrors.push('Email is invalid')
    }

    if(!password){
      clientErrors.push('Password is required')
    } else if (password < 6) {
      clientErrors.push('Password must be at least 6 characters long')
    }

    if(!confirmPassword){
      clientErrors.push('Confirm Password is required')
    } else if (password !== confirmPassword) {
      clientErrors.push('Password\'s must match')
    }

    if(clientErrors.length === 0){
      console.log('create user')
      this.props.handleCreateUser(email, password)
    }

    this.setState({
      emailError: !email || !validate(email),
      passwordError: !password || password.length < 6,
      confirmPasswordError: !confirmPassword || confirmPassword !== password,
      clientErrors,
    })
  }
  render() {
    const {emailError, passwordError, confirmPasswordError,} = this.state
    const formHasError = emailError || passwordError || confirmPasswordError || this.props.serverErrors.length > 0

    return (
      <Segment padded>
        { this.props.requesting &&
          <Dimmer active inverted>
            <Loader />
          </Dimmer>
        }
        <Button color='red' fluid>
          <Icon name='google' /> Sign in with Google
        </Button>
        <Divider horizontal>Or</Divider>
        <Header as='h3'>
          Sign Up
        </Header>
        <Form error={formHasError} onSubmit={e => this.handleSubmit(e)}>
          
          <ErrorMessage
            list={this.state.clientErrors.concat(this.props.serverErrors)}
          />

          <Form.Input
            label='Email'
            placeholder="Email"
            error={this.state.emailError}
            onChange={e => this.setState({email: e.target.value})}
          />
          <Form.Input
            label='Password'
            type='password'
            placeholder="Password"
            error={this.state.passwordError}
            onChange={e => this.setState({password: e.target.value})}
          />
          <Form.Input
            label='Confirm Password'
            type='password'
            placeholder='Confirm Password'
            error={this.state.confirmPasswordError}
            onChange={e => this.setState({confirmPassword: e.target.value})}
          />
          <Button type='submit' fluid>Sign Up</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignUp