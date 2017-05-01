import { connect } from 'react-redux'
import App from '../components/App'

const mapDispatchToProps = dispatch => ({
  handleNewUser(user){
    dispatch({
      type: 'NEW_USER',
      user,
    })
  }
})

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App)

export default AppContainer