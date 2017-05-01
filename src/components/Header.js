import React from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderLogin from './HeaderLogin'
import HeaderLogged from './HeaderLogged'

const Header = ({ user }) => (
  <AppBar
    title="baseweight"
    iconElementRight={ user ? <HeaderLogged/> : <HeaderLogin/>}
    showMenuIconButton={false}
  />
)

export default Header
