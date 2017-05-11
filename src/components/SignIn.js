import React, {Component} from 'react'
import { Segment, Button, Form, Header, Icon, Divider, Message, Dimmer, Loader } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import {validate} from 'email-validator'
import {Redirect, Link} from 'react-router-dom'
import './SignIn.css'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    clientErrors: [],
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.new_user !== prevProps.match.params.new_user){
      this.setState({
        confirmPassword: '',
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        clientErrors: [],
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, confirmPassword,} = this.state
    const newUser = this.props.match.params.new_user === 'new'
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

    if(!confirmPassword && newUser){
      clientErrors.push('Confirm Password is required')
    } else if (password !== confirmPassword && newUser) {
      clientErrors.push('Password\'s must match')
    }

    if(clientErrors.length === 0){
      console.log('create user')
      this.props.handleCreateUser(email, password, newUser)
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
    const newUser = this.props.match.params.new_user === 'new'
    const title = newUser ? 'Sign Up' : 'Sign In'
    
    if(this.props.signedIn){
      return <Redirect to='/'/>
    }
    return (
      <Segment className="SignIn" padded>
        { this.props.requesting &&
          <Dimmer active inverted>
            <Loader />
          </Dimmer>
        }
        <Button color='red' fluid>
          <Icon name='google' /> {title} with Google
        </Button>
        <Divider horizontal>Or</Divider>
        <Header as='h3'>
          {title}
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
          {newUser &&
          <Form.Input
            label='Confirm Password'
            type='password'
            placeholder='Confirm Password'
            error={this.state.confirmPasswordError}
            onChange={e => this.setState({confirmPassword: e.target.value})}
          />
          }
          <Button type='submit' fluid>{title}</Button>
          <br/>
          <Link to={newUser ? '/sign-in' : '/sign-in/new'}>
            <Button basic fluid compact size='small'>
              {newUser ? 'Sign In' : 'Sign Up'}
            </Button>
          </Link>
        </Form>
      </Segment>
    )
  }
}

export default SignIn