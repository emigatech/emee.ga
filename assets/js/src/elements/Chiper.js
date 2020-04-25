import React, { Component } from "react";

import { TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@material-ui/core/MenuItem';
import qs from 'qs';

class Chiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount () {

    fetch('/api/v1/api.php',
      {
        method: 'post',
        headers: {
          'content-type' : 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
          commit: 'chipers'
        })
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const { error, isLoaded, data } = this.state;

    return(
      <TextValidator value={this.props.value}
                 name={this.props.name}
                 onChange={this.props.change}
                 select
                 label="Chiper"
                 variant="outlined"
                 className="form-control mt-5"
                 InputLabelProps={{
                   shrink: true,
                   'aria-label':'Chiper'
                 }}
                 validators={[
                   'required'
                 ]}
                 errorMessages={[
                   'This field is required'
                 ]}
      >
      <MenuItem disabled>List of chipers</MenuItem>
      {(()=>{
        if(error){
          return null;
        }
        else if(!isLoaded) {
          return null;
        }
        else {
        return(
          data.response.map((data, index) => (
            <MenuItem key={index} value={data}>{data}</MenuItem>
          ))
        )}
      })()}
      </TextValidator>
    );
  }
};

export default Chiper;
