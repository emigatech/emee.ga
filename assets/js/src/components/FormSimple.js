import React, { Component } from "react";

import { ValidatorForm } from 'react-material-ui-form-validator';
import Chiper from '../elements/Chiper.js';
import PublicKey from '../elements/PublicKey.js';
import SecretKey from '../elements/SecretKey.js';
import Text from '../elements/Text.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
import qs from 'qs';

class FormSimple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      action: '',
      pkey: '',
      skey: '',
      text: '',
      chiper: 'aes-256-cbc',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value) {
    this.setState(value)
  }

  handleFlash(event, reason) {
    if(reason == 'clickaway') {
      return;
    }
    this.setState({open:false});
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      commit: 'calculate',
      data: {
        format: 'normal',
        action: this.state.action,
        pkey: this.state.pkey,
        skey: this.state.skey,
        text: this.state.text,
        chiper: this.state.chiper
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
        let Cache = localStorage.getItem('cache') ? JSON.parse(localStorage.getItem('cache')) : [];
        Cache.push(JSON.parse(JSON.stringify(data)));

        localStorage.setItem('cache',JSON.stringify(Cache));
        this.props.window.location.reload();
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

export default FormSimple;
