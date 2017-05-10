import React, {Component} from 'react'
import { Segment, Button, Form, Header, Icon, Divider, Message } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    errorMessages: [{
      header: 'hi',
      content: 'hello',
    }],
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, confirmPassword,} = this.state

    this.setState({
      emailError: !email,
      passwordError: !password,
      confirmPasswordError: !confirmPassword,
    })
  }
  render() {
    const {emailError, passwordError, confirmPasswordError,} = this.state
    const formHasError = emailError || passwordError || confirmPasswordError
    return (
      <Segment padded>
        <Button color='red' fluid>
          <Icon name='google' /> Sign in with Google
        </Button>
        <Divider horizontal>Or</Divider>
        <Header as='h3'>
          Sign Up
        </Header>
        <Form error={formHasError} onSubmit={e => this.handleSubmit(e)}>
          {this.state.errorMessages.map((message, index) => (
            <div key={index}>
              <Message
                error
                header={message.header}
                content={message.content}
              />
              <br/>
            </div>
          ))}
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