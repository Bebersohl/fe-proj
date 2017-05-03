import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import GoogleLoginButton from './GoogleLoginButton'
import Loading from './Loading'

const ModalDialog = ({handleClose, open, children, modal, loading}) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
      disabled={loading}
    />
  ]

  return (
    <Dialog
      actions={actions}
      modal={modal}
      contentStyle={{
        width: '100%',
        maxWidth: '400px',
      }}
      open={open}
      onRequestClose={handleClose}
    >
    {loading ? (
      <Loading/>
    ) : (
      <div>
        <GoogleLoginButton/>
        <br/><br/>
        <h5 style={{textAlign: 'center'}}>OR</h5>
        {children}
      </div>
    )}
    </Dialog>
  )
}

export default ModalDialog