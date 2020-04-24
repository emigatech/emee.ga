import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';

class Form extends Component {
  render() {
    return (
      <form noValidate autoComplete="off" method="POST" className="pb-5">
          <div className="row">

            <div className="col-md-12">
              <div className="row">

                {/* Number Date */}
                <div className="col-md-6">
                  <TextField name="data[timer[n]]"
                             type="number"
                             label="Number Stamp"
                             defaultValue={1}
                             variant="outlined"
                             className="form-control mt-5"
                             InputLabelProps={{
                               shrink: true,
                               'aria-label':'Number Stamp'
                             }}
                  />
                </div>

                {/* Valid Date */}
                <div className="col-md-6">
                  <TextField name="data[timer[stamp]]"
                             select
                             label="Time Stamp"
                             value={1}
                             variant="outlined"
                             className="form-control mt-5"
                             InputLabelProps={{
                               shrink: true,
                               'aria-label':'Time Stamp'
                             }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </TextField>
                </div>

              </div>
            </div>

            {/* Chiper */}
            <div className="col-md-12">
              <TextField name="data[chiper]"
                         select
                         label="Chiper"
                         value={1}
                         variant="outlined"
                         className="form-control mt-5"
                         InputLabelProps={{
                           shrink: true,
                           'aria-label':'Chiper'
                         }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </TextField>
            </div>

            {/* Public Key */}
            <div className="col-md-12">
              <TextField name="data[pkey]"
                         label="Public Key"
                         type="text"
                         placeholder="Please enter a public key"
                         name="pkey"
                         fullWidth
                         variant="outlined"
                         className="form-control mt-5"
                         InputLabelProps={{
                           shrink: true,
                           'aria-label':'Public Key'
                         }}
              />
            </div>

            {/* Secret Key */}
            <div className="col-md-12">
              <TextField name="data[skey]"
                         label="Secret Key"
                         placeholder="Please enter a secret key"
                         name="skey"
                         fullWidth
                         variant="outlined"
                         className="form-control mt-5"
                         InputLabelProps={{
                           shrink: true,
                           'aria-label':'Secret Key'
                         }}
              />
            </div>

            {/* Text */}
            <div className="col-md-12">
              <TextField name="data[text]"
                         label="Text"
                         multiline
                         rows={2}
                         variant="outlined"
                         className="form-control mt-5"
                         InputLabelProps={{
                           shrink: true,
                           'aria-label':'Text'
                         }}
              />
            </div>

            {/* Action */}
            <div className="col-md-12 fixed-bottom pt-1 pb-1 bg-white">
              <div className="container">
                <ButtonGroup variant="outlined"
                             fullWidth={true}
                             size="large"
                             color="primary"
                             aria-label="Action Menu"
                             className="bg-white"
                >
                  <Button>Encrypt</Button>
                  <Button>Decrypt</Button>
                </ButtonGroup>
              </div>
            </div>

          </div>
      </form>
    );
  }
};

export default Form;
