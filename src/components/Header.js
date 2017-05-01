import React from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderLoginContainer from '../containers/HeaderLoginContainer'
import HeaderLogged from './HeaderLogged'

const Header = ({ user }) => (
  <AppBar
    title="baseweight"
    iconElementRight={ user.uid ? <HeaderLogged/> : <HeaderLoginContainer/>}
    showMenuIconButton={false}
  />
)

export default Header
