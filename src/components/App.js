import React, { Component } from 'react'
import './App.css'
import { auth } from '../firebase'
import HeaderContainer from '../containers/HeaderContainer'
import LeftDrawer from './LeftDrawer'
import Footer from './Footer'
import GearTable from './GearTable'
import GearCard from './GearCard'

class App extends Component {
  constructor(){
    super()
    this.state = {
      drawerOpen: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.handleAuthChange(user)
    });
  }
  toggleDrawer(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer toggleDrawer={this.toggleDrawer}/>
        <div className="App--body">
          <LeftDrawer open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer}/>
          <GearCard>
            <GearTable/>
          </GearCard>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
