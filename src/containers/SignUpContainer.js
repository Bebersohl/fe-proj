import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

const mapStateToProps = ({ errors, user, requesting }) => ({
  serverErrors: Object.keys(errors).map(key => errors[key]),
  requesting,
})

const mapDispatchToProps = dispatch => ({
  handleCreateUser(email, password){
    dispatch({
      type: 'SIGN_IN_USER_REQUEST',
      email,
      password,
      newUser: true,
    })
  }
})

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default SignUpContainer