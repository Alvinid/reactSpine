import Index from './contains/index.js';
import  { Router, Route, browserHistory  } from 'react-router';

const routers=(
    <Router history={ browserHistory }>
        <Route path="/" component={Index} >

        </Route>
    </Router>
    
)

export default routers



