import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

const mapStateToProps = ({ errors, user }) => ({
  errors,
})

const mapDispatchToProps = dispatch => ({
  handleAuthenticateUser(email, password){
    dispatch({
      type: 'AUTHENTICATE_USER_REQUEST',
      email,
      password,
    })
  }
})

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer