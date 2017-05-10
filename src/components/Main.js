import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import './Main.css'

const Main = () => (
  <main className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/Topic' component={Topic}/>
    </Switch>
  </main>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <h2>About</h2>
    <h2>About</h2>
    <h2>About</h2>
    <h2>About</h2>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>Topics</h3>
  </div>
)

export default Main