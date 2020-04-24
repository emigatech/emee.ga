import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";

import App from './src/App.js'

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <App/>
            </Route>
            <Route path="*">
              <h1>Error 404</h1>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
