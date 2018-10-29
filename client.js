import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import { createStore } from 'redux';
import routers from './common/router.js';

let routerComponent=<Router routes={ routers } history={ browserHistory } ></Router>

ReactDOM.render(routerComponent,document.getElementById('exp'));