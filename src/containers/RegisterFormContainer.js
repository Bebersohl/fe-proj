import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'

const mapStateToProps = ({ errors, user }) => ({
  errors,
})

const mapDispatchToProps = dispatch => ({
  handleCreateUser(email, password){
    dispatch({
      type: 'CREATE_USER_REQUEST',
      email,
      password,
    })
  }
})

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)

export default RegisterFormContainer