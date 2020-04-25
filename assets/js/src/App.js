import React, { Component } from "react";
import Form from './components/Form';
import Results from './components/Results';

import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 bg-main min-vh-100 pb-5 shadow-sm sticky-top">
              <div className="container">
                <Paper elevation={0} className="mt-5 container align-middle shadow-lg">
                  <Form/>
                </Paper>
              </div>
            </div>
            <Paper className="col-md-8 min-vh-100 pb-5">
                <Results/>
            </Paper>
          </div>
      </div>
    );
  }
};

export default App;
