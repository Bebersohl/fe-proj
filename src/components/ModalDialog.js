import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import GoogleLoginButton from './GoogleLoginButton'

const ModalDialog = ({handleClose, open, children}) => {
  const actions = [
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
        maxWidth: '400px',
      }}
      open={open}
      onRequestClose={handleClose}
    >
      <GoogleLoginButton/>
      <br/><br/>
      <h5 style={{textAlign: 'center'}}>OR</h5>
      {children}
    </Dialog>
  )
}

export default ModalDialog