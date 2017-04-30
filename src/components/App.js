import React, { Component } from 'react'
import './App.css'
import { auth, googleAuthProvider } from '../firebase'
import Header from './Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      fetchingUser: true,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin() {
    this.setState({
      fetchingUser: true,
    })
    auth.signInWithRedirect(googleAuthProvider).then(foo => {
      console.log('foo')
    }).catch(e => {
      console.log('ERROR!')
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser,
        fetchingUser: false,
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} fetchingUser={this.state.fetchingUser} handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default App
