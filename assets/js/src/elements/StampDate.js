import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@material-ui/core/MenuItem';
import qs from 'qs';

class StampDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount () {
    this.setState({
      isLoaded: true,
      data: JSON.parse(this.props.window.API.date)
    });
  }

  render() {
    const { isLoaded, data } = this.state;
      return(
        <TextValidator value={this.props.value}
                   name={this.props.name}
                   onChange={this.props.change}
                   select
                   label="Valid limit"
                   variant="outlined"
                   className="form-control mt-5"
                   InputLabelProps={{
                     shrink: true,
                     'aria-label':'Valid limit'
                   }}
                   validators={[
                     'required'
                   ]}
                   errorMessages={[
                     'This field is required'
                   ]}
        >
        <MenuItem disabled>List of limits</MenuItem>
        {(()=>{
          if(!isLoaded) {
            return null;
          }
          else {
          return(
            data.map((data, index) => (
              <MenuItem key={index} value={data}>{data}</MenuItem>
            ))
          )}
        })()}
        </TextValidator>
    );
  }
};

export default StampDate;
