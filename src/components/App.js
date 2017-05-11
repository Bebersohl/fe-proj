import React, { Component } from 'react'
import './App.css'
import { auth } from '../firebase'
import { Grid } from 'semantic-ui-react'
import Main from './Main'
import TopNavContainer from '../containers/TopNavContainer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.handleAuthChange(user)
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Grid container columns={1}>
          <Grid.Column>
            <TopNavContainer location={this.props.location}/>
            <Main/>
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default App
