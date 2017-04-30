import React from 'react'
import AppBar from 'material-ui/AppBar'
import Login from './Login'
import Logged from './Logged'
import CircularProgress from 'material-ui/CircularProgress'

const Header = ({ fetchingUser, currentUser, handleLogin }) => (
  <AppBar
    title="BASEWEIGHT"
    iconElementRight={fetchingUser ? <CircularProgress color="#FFF" size={20} /> : currentUser ? <Logged/> : <Login handleLogin={handleLogin}/>}
    showMenuIconButton={false}
  />
)

export default Header
