import { connect } from 'react-redux'
import App from '../components/App'

const mapDispatchToProps = dispatch => ({
  handleAuthChange(user){
    dispatch({
      type: 'AUTH_CHANGE',
      user,
    })
  }
})

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App)

export default AppContainer