import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';

class SecretKey extends Component {
  render() {
    return (
      <TextValidator value={this.props.value}
                 name={this.props.name}
                 onChange={this.props.change}
                 label="Secret Key"
                 placeholder="Please, Enter a secret key"
                 name="skey"
                 fullWidth
                 variant="outlined"
                 className="form-control mt-5"
                 InputLabelProps={{
                   shrink: true,
                   'aria-label':'Secret Key'
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

export default SecretKey;
