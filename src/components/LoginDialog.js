import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const LoginDialog = ({handleClose, open, children}) => {
  const actions = [
    <FlatButton
      label="Register"
      primary={true}
      onTouchTap={handleClose}
    />,
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
    />
  ]

  return (
    <Dialog
      actions={actions}
      modal={false}
      contentStyle={{
        width: '100%',
        maxWidth: 'none',
      }}
      open={open}
      onRequestClose={handleClose}
    >
      {children}
    </Dialog>
  )
}

export default LoginDialog