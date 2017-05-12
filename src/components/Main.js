import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignInContainer from '../containers/SignInContainer'
import './Main.css'

import GearTable from './GearTable'

const Main = () => (
  <main className="Main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sign-in/:new_user?" component={SignInContainer} />
      <Route path="/Topic" component={Topic} />
    </Switch>
  </main>
)

const Home = () => (
  <div>
    <GearTable />
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
