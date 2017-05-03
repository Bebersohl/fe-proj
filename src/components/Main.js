import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
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
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>Topics</h3>
  </div>
)

export default Main