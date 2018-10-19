import { render } from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routers from './common/router.js';

let routerComponent=<Router routers={ routers } history={ browserHistory } ></Router>

render(routerComponent,document.getElementById('exp'));