import React from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderLoginContainer from '../containers/HeaderLoginContainer'
import HeaderLogged from './HeaderLogged'

const Header = ({ user, toggleDrawer }) => (
  <AppBar
    onLeftIconButtonTouchTap={() => toggleDrawer()}
    iconElementRight={ user.uid ? <HeaderLogged/> : <HeaderLoginContainer/>}
  />
)

export default Header
