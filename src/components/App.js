import React, { Component } from 'react'
import './App.css'
import { auth } from '../firebase'
import HeaderContainer from '../containers/HeaderContainer'

class App extends Component {
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.handleAuthChange(user)
    });
  }
  
  render() {
    return (
      <div className="App">
        <HeaderContainer />
      </div>
    )
  }
}

export default App
