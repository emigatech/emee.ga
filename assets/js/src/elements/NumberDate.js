import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';

class NumberDate extends Component {
  render() {
    return (
      <TextValidator value={this.props.value}
                 name={this.props.name}
                 onChange={this.props.change}
                 type="number"
                 label="Number"
                 variant="outlined"
                 className="form-control mt-5"
                 InputLabelProps={{
                   shrink: true,
                   'aria-label':'Number'
                 }}
                 validators={[
                   'required',
                   'minNumber:0',
                   'maxNumber:255',
                   'matchRegexp:^[0-9]$'
                 ]}
                 errorMessages={[
                   'This field is required',
                   'Minimum number is 0',
                   'Maximum number is 255',
                   'Only numbers allowed'
                 ]}
      />
    );
  }
};

export default NumberDate;
