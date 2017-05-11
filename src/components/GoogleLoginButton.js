import React from 'react'
import { auth, googleAuthProvider } from '../firebase'
import MediaQuery from 'react-responsive'
import { Button, Icon } from 'semantic-ui-react'

const GoogleLoginButton = () => (
  <MediaQuery minDeviceWidth={768}>
    {matches => (
      <Button
        color="red"
        fluid
        onClick={() =>
          matches
            ? auth.signInWithPopup(googleAuthProvider)
            : auth.signInWithRedirect(googleAuthProvider)}
      >
        <Icon name="google" /> Sign In with Google
      </Button>
    )}
  </MediaQuery>
)

export default GoogleLoginButton
