import { connect } from 'react-redux'
import HeaderLogin from '../components/HeaderLogin'

const mapStateToProps = ({ user }) => ({
  creatingUser: user.creatingUser,
  signingInUser: user.signingInUser,
})

const mapDispatchToProps = (dispatch) => ({
  resetErrors(){
    dispatch({type: 'RESET_ERRORS'})
  }
})

const HeaderLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderLogin)

export default HeaderLoginContainer