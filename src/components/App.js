import React, { Component } from 'react'
import './App.css'
import { auth } from '../firebase'
import SidebarLeft from './SidebarLeft'
import { Icon } from 'semantic-ui-react'
import Main from './Main'
class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.handleAuthChange(user)
    });
  }
  // toggleDrawer(){
  //   this.setState({
  //     drawerOpen: !this.state.drawerOpen
  //   })
  // }
  render() {
    const { visible } = this.state
    return (
      <SidebarLeft visible={visible} toggleVisibility={this.toggleVisibility}>
        <div className="App">
          <div className="App--body">
            <Icon name="content" link size="big" onClick={() => this.toggleVisibility()}/>
            <Main/>
          </div>
        </div>
      </SidebarLeft>
    )
  }
}

export default App
