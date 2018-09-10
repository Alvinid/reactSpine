import Index from './contains/index.js';
import  { Router, Route, hashHistory  } from 'react-router';
import React from 'react';

const routers=(
    <Router history={ hashHistory }>
        <Route path="/" component={Index} >

        </Route>
    </Router>
    
)

export default routers



