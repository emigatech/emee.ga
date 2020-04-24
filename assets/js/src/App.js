import React, { Component } from "react";
import Form from './components/Form';

import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div className="container mt-5 pb-5">
          <Paper elevation={0}>
            <Form/>
          </Paper>
      </div>
    );
  }
};

export default App;
