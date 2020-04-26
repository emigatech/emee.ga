import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';

class Text extends Component {
  render() {
    return (
      <TextValidator value={this.props.value}
                 name={this.props.name}
                 onChange={this.props.change}
                 label="Text"
                 multiline
                 placeholder="Please, Enter a text"
                 rows={3}
                 variant="outlined"
                 className="form-control mt-5"
                 InputLabelProps={{
                   shrink: true,
                   'aria-label':'Text'
                 }}
                 validators={[
                   'required'
                 ]}
                 errorMessages={[
                   'This field is required'
                 ]}
      />
    );
  }
};

export default Text;
