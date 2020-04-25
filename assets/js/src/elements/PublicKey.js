import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';

class PublicKey extends Component {
  render() {
    return (
      <TextValidator value={this.props.value}
                 name={this.props.name}
                 onChange={this.props.change}
                 label="Public Key"
                 type="text"
                 placeholder="Please, Enter a public key"
                 name="pkey"
                 fullWidth
                 variant="outlined"
                 className="form-control mt-5"
                 InputLabelProps={{
                   shrink: true,
                   'aria-label':'Public Key'
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

export default PublicKey;
