import { connect } from 'react-redux'
import HeaderLogin from '../components/HeaderLogin'

const mapStateToProps = ({ user }) => ({
  creatingUser: user.creatingUser,
})

const HeaderLoginContainer = connect(
  mapStateToProps,
)(HeaderLogin)

export default HeaderLoginContainer