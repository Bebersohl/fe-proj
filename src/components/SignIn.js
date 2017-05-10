import React from 'react'
import { Segment, Button, Form, Header, Icon, Divider } from 'semantic-ui-react'

const SignIn = () => (
  <Segment padded>
    <Button color='red' fluid>
      <Icon name='google' /> Sign in with Google
    </Button>
    <Divider horizontal>Or</Divider>
    <Header as='h3'>
      Sign In
    </Header>
    <Form>
      <Form.Input label='Email' placeholder="Email"/>
      <Form.Input label='Password' type='password' placeholder="Password"/>
      <Button type='submit' fluid>Sign In</Button>
    </Form>
  </Segment>
)

export default SignIn