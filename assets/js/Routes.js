import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Helmet } from "react-helmet";
import App from './src/App.js'

class Routes extends Component {

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={()=><App/>} />
            <Route path="*">
              <Helmet>
                <title>Error 404 | emee.ga</title>
                <style>{`body {background-color: #0000FF !important ;}#loading{display:none !important;}`}</style>
              </Helmet>
              <figure>
              	<div className="sad-mac"></div>
              	<figcaption>
              		<span className="sr-text">Error 404: Not Found</span>
              		<span className="e"></span>
              		<span className="r"></span>
              		<span className="r"></span>
              		<span className="o"></span>
              		<span className="r"></span>
              		<span className="_4"></span>
              		<span className="_0"></span>
              		<span className="_4"></span>
              		<span className="n"></span>
              		<span className="o"></span>
              		<span className="t"></span>
              		<span className="f"></span>
              		<span className="o"></span>
              		<span className="u"></span>
              		<span className="n"></span>
              		<span className="d"></span>
              	</figcaption>
              </figure>
            </Route>
          </Switch>
      </Router>
    );
  }
};

export default Routes;
