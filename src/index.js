import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import store from './configureStore'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)