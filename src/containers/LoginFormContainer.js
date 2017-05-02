import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

const mapStateToProps = ({ errors, user }) => ({
  errors,
})

const mapDispatchToProps = dispatch => ({
  handleSignInUser(email, password){
    dispatch({
      type: 'SIGN_IN_USER_REQUEST',
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