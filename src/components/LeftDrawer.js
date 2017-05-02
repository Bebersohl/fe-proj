import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'

const LeftDrawer = ({open, toggleDrawer}) => (
  <Drawer open={open}>
    <AppBar
      title="baseweight"
      showMenuIconButton={false}
      onTitleTouchTap={() => console.log('foo')}
      iconElementRight={<IconButton><NavigationClose /></IconButton>}
      onRightIconButtonTouchTap={() => toggleDrawer()}
    />
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
)

export default LeftDrawer