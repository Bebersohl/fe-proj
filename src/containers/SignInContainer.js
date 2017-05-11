import { connect } from 'react-redux'
import SignIn from '../components/SignIn'

const mapStateToProps = ({ errors, user, requesting }) => ({
  serverErrors: Object.keys(errors).map(key => errors[key]),
  requesting,
  signedIn: user.uid ? true : false,
  authRequestMade: user.authRequestMade,
})

const mapDispatchToProps = dispatch => ({
  handleCreateUser(email, password, newUser) {
    dispatch({
      type: 'SIGN_IN_USER_REQUEST',
      email,
      password,
      newUser,
    })
  },
})

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer
