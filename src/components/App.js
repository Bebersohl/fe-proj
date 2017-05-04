import React, { Component } from 'react'
import './App.css'
import { auth } from '../firebase'
import SidebarLeft from './SidebarLeft'
import { Icon } from 'semantic-ui-react'
import Main from './Main'
import Header from './Header'
class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.handleAuthChange(user)
    });
  }

  render() {
    const { visible } = this.state
    return (
      <div className='App'>
        <SidebarLeft visible={visible} toggleVisibility={this.toggleVisibility}>
          <div className='App--body'>
            <Header toggleVisibility={this.toggleVisibility}></Header>
          </div>
        </SidebarLeft>
      </div>
    )
  }
}

export default App
