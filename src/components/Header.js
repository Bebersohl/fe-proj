import React from 'react'
import AppBar from 'material-ui/AppBar'
import Login from './Login'
import Logged from './Logged'

const Header = ({ fetchingUser, currentUser, handleLogin, ...props }) => (
  <AppBar
    title="baseweight"
    iconElementRight={ currentUser ? <Logged/> : <Login/>}
    showMenuIconButton={false}
  />
)

export default Header
