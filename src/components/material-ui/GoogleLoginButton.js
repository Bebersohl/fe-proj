import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MediaQuery from 'react-responsive'
import { auth, googleAuthProvider } from '../firebase'

const GoogleLoginButton = () => (
  <MediaQuery minDeviceWidth={768}>
    {(matches) => {
      return (
        <RaisedButton 
          fullWidth={true} 
          label="Login with Google" 
          primary={true} 
          onTouchTap={() => matches ? auth.signInWithPopup(googleAuthProvider) :  auth.signInWithRedirect(googleAuthProvider)}
        />
      )
    }}
  </MediaQuery>
)

export default GoogleLoginButton