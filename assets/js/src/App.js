import React, { Component } from "react";
import Results from './components/Results';

import FormWithLimit from './components/FormWithLimit';
import FormSimple from './components/FormSimple';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Helmet } from "react-helmet";

import Logo from './emiga-logo.png';

function TabPanel(props){

  const {children, value, index, ...other} = props;

  return(
    <div role="tabpanel"
         hidden={value !== index}
         id={`tabpanel-${index}`}
         aria-labelledby={`tab-${index}`}
         {...other}>
         { value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {

  return {
    id : `wrapped-tab-${index}`,
    'aria-controls' : `wrapped-tabpanel-${index}`
  }
}


export default function App(){

  const [value , setValue] = React.useState(1);

  const handleChange = (event, newValue) => {

    setValue(newValue);
  }

  return (
    <div className="container-fluid">
        <Helmet>
          <style>{`body{background-color:#ffffff !important;}#loading{display:none !important;}`}</style>
        </Helmet>
        <div className="mt-2 pt-2 text-center">
            <img src={Logo} className="img-fluid rounded" alt="emiga-logo" height="32px" width="32px"/>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="container sticky-top sticky-offset">
            <Paper elevation={3} className="shadow-lg mt-2">
              <Tabs value={value}
                    onChange={handleChange}
                    aria-label="wrapped tabs"
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    centered
              >
                <Tab title="Click to select type of Cryptography" value={1} wrapped {...a11yProps(1)} label="Simple Cryptography"/>
                <Tab title="Click to select type of Cryptography" value={2} wrapped {...a11yProps(2)} label="Limited Cryptography"/>
              </Tabs>

              <TabPanel className="container" value={value} index={1}>
                 <FormSimple window={window}/>
              </TabPanel>

              <TabPanel className="container" value={value} index={2}>
                <FormWithLimit window={window}/>
              </TabPanel>

            </Paper>
            </div>
          </div>
          <Paper elevation={0} square className="col-md-8 min-vh-100 pb-5">
              <Results window={window}/>
          </Paper>
        </div>
    </div>
  );
};
