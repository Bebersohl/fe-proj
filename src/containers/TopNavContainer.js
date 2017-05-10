import { connect } from 'react-redux'
import TopNav from '../components/TopNav'

const mapStateToProps = ({ user }) => ({
  authRequestMade: user.authRequestMade,
})

const TopNavContainer = connect(
  mapStateToProps
)(TopNav)

export default TopNavContainer