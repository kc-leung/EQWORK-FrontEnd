import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../components/Home/Home';
import Events from '../components/Events/Events';
import Stats from '../components/Stats/Stats';
import Map from '../components/Map/Map';

class Router extends Component {
  render() {
    return (
      <div className="routerContainer">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/stats" component={Stats} />
          <Route path="/map" component={Map} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default Router
