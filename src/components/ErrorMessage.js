import React from 'react'
import { Message } from 'semantic-ui-react'
import './ErrorMessage.css'

const ErrorMessage = props => <Message error {...props} />

export default ErrorMessage
