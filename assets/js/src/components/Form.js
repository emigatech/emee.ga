import React, { Component } from "react";

import { ValidatorForm } from 'react-material-ui-form-validator';
import Chiper from '../elements/Chiper.js';
import NumberDate from '../elements/NumberDate.js';
import StampDate  from '../elements/StampDate.js';
import PublicKey from '../elements/PublicKey.js';
import SecretKey from '../elements/SecretKey.js';
import Text from '../elements/Text.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
import qs from 'qs';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: '',
      pkey: '',
      skey: '',
      text: '',
      chiper: 'aes-256-cbc',
      timer_n: 1,
      timer_stamp: 'day'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState(value)
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/v1/api.php',
      {
        method: 'post',
        headers: {
          'content-type' : 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
          commit: 'calculate',
          data: {
            format: 'normal',
            action: this.state.action,
            pkey: this.state.pkey,
            skey: this.state.skey,
            text: this.state.text,
            chiper: this.state.chiper,
            timer: {
              n: this.state.timer_n,
              stamp: this.state.timer_stamp
            }
          }
        })
    })
    .then(res => res.json())
    .then(
      (data)=>{
        console.log(data);
      }
    )
  }

  render() {
    return (
      <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors=>console.log(errors)}
            noValidate
            autoComplete="off"
            method="POST"
            className="align-middle pb-4"
      >
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {/* Number Date */}
                <div className="col-md-6">
                  <NumberDate name="timer_n"
                              value={this.state.timer_n}
                              change= {
                                e => this.handleChange({
                                  timer_n : e.target.value
                                })
                              }

                  />
                </div>
                {/* Valid Date */}
                <div className="col-md-6">
                  <StampDate name="timer_stamp"
                             value={this.state.timer_stamp}
                             change= {
                               e=> this.handleChange({
                                 timer_stamp : e.target.value
                               })
                             }
                  />
                </div>
              </div>
            </div>
            {/* Chiper */}
            <div className="col-md-12">
              <Chiper name="chiper"
                      value={this.state.chiper}
                      change= {
                        e=> this.handleChange({
                          chiper: e.target.value
                        })
                      }
              />
            </div>
            {/* Public Key */}
            <div className="col-md-12">
              <PublicKey name="pkey"
                         value={this.state.pkey}
                         change= {
                           e=> this.handleChange({
                             pkey: e.target.value
                           })
                         }
               />
            </div>
            {/* Secret Key */}
            <div className="col-md-12">
              <SecretKey name="skey"
                         value={this.state.skey}
                         change= {
                           e=> this.handleChange({
                             skey: e.target.value
                           })
                         }
              />
            </div>
            {/* Text */}
            <div className="col-md-12">
              <Text name="text"
                    value={this.state.text}
                    change= {
                      e=> this.handleChange({
                        text: e.target.value
                      })
                    }
              />
            </div>
            {/* Action */}
            <div className="col-md-12 pt-3">
              <ButtonGroup variant="outlined"
                           fullWidth={true}
                           size="large"
                           color="primary"
                           aria-label="Action Menu"
                           className="bg-white mt-5"
              >
                <Tooltip title="Click to encrypt" aria-label="Encrypt">
                  <Button onClick={
                    e=> this.handleChange({
                      action: 'encrypt'
                    })
                  }
                  type="submit"
                  name="action"
                  value="encrypt">Encrypt</Button>
                </Tooltip>
                <Tooltip title="Click to decrypt" aria-label="Decrypt">
                  <Button onClick={
                    e=> this.handleChange({
                      action: 'decrypt'
                    })
                  }
                  type="submit"
                  name="action"
                  value="decrypt">Decrypt</Button>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
      </ValidatorForm>
    );
  }
};

export default Form;
