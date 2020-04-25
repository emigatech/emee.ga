import ReactDOM from 'react-dom';
import React from "react";
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

const theme = createMuiTheme({
  palette : {
    primary : {
      main: '#0000FF'
    },
    secondary: {
      main: '#7EC8E3'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

ReactDOM.render(
<ThemeProvider theme={theme}>
  <Routes/>
</ThemeProvider>
,document.getElementById('emee-ga'));
