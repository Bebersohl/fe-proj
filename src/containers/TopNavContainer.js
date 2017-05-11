import { connect } from 'react-redux'
import TopNav from '../components/TopNav'

const mapStateToProps = ({ user }) => ({
  user,
})

const TopNavContainer = connect(mapStateToProps)(TopNav)

export default TopNavContainer
