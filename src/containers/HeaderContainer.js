import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = ({ user }) => ({
  user,
})

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer