import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import store from './configureStore'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
