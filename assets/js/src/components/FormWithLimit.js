import React, { Component } from "react";
import Recaptcha from 'react-google-invisible-recaptcha';

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

class FormWithLimit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swl_action: '',
      swl_pkey: '',
      swl_skey: '',
      swl_text: '',
      swl_chiper: 'aes-256-cbc',
      timer_n: 1,
      timer_stamp: 'day'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.recaptcha.reset();
    this.setState(value)
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      commit: 'calculate',
      data: {
        format: 'normal',
        action: this.state.swl_action,
        pkey: this.state.swl_pkey,
        skey: this.state.swl_skey,
        text: this.state.swl_text,
        chiper: this.state.swl_chiper,
        timer: {
          n: this.state.timer_n,
          stamp: this.state.timer_stamp
        }
      }
    };

    fetch('/api/v1/api.php',
      {
        method: 'post',
        headers: {
          'content-type' : 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(data)
    })
    .then(res => res.json())
    .then(
      (data)=>{
        console.log(data);

        let Cache = localStorage.getItem('cache') ? JSON.parse(localStorage.getItem('cache')) : [];
        Cache.push(JSON.parse(JSON.stringify(data)));

        localStorage.setItem('cache',JSON.stringify(Cache));
        this.props.window.location.reload();
      }
    )
  }

  onSubmit(){
    this.recaptcha.execute();
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
          <Recaptcha
          ref={ ref => this.recaptcha = ref }
          sitekey="6LcwIO8UAAAAADvSTIM6us5NqPCYvLhv7gleKysF"
          onResolved={ this.handleSubmit } />
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
            {/* swl_chiper */}
            <div className="col-md-12">
              <Chiper name="swl_chiper"
                      value={this.state.swl_chiper}
                      change= {
                        e=> this.handleChange({
                          swl_chiper: e.target.value
                        })
                      }
              />
            </div>
            {/* Public Key */}
            <div className="col-md-12">
              <PublicKey name="swl_pkey"
                         value={this.state.swl_pkey}
                         change= {
                           e=> this.handleChange({
                             swl_pkey: e.target.value
                           })
                         }
               />
            </div>
            {/* Secret Key */}
            <div className="col-md-12">
              <SecretKey name="swl_skey"
                         value={this.state.swl_skey}
                         change= {
                           e=> this.handleChange({
                             swl_skey: e.target.value
                           })
                         }
              />
            </div>
            {/* swl_text */}
            <div className="col-md-12">
              <Text name="swl_text"
                    value={this.state.swl_text}
                    change= {
                      e=> this.handleChange({
                        swl_text: e.target.value
                      })
                    }
              />
            </div>
            {/* swl_action */}
            <div className="col-md-12 pt-3">
              <ButtonGroup variant="outlined"
                           fullWidth={true}
                           size="large"
                           color="primary"
                           aria-label="swl_action Menu"
                           className="bg-white mt-5"
              >
                <Tooltip title="Click to encrypt" aria-label="Encrypt">
                  <Button onClick={
                    e=> this.handleChange({
                      swl_action: 'encrypt'
                    })
                  }
                  type="submit"
                  name="swl_action"
                  value="encrypt">Encrypt</Button>
                </Tooltip>
                <Tooltip title="Click to decrypt" aria-label="Decrypt">
                  <Button onClick={
                    e=> this.handleChange({
                      swl_action: 'decrypt'
                    })
                  }
                  type="submit"
                  name="swl_action"
                  value="decrypt">Decrypt</Button>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
      </ValidatorForm>
    );
  }
};

export default FormWithLimit;
