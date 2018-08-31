const express = require ('express');
const app = express();
import  { match } from 'react-router';
//import routes from './common/router';
app.use(express.static('public'));
app.get('*',function(req,res){
    // match({ routes, location:req.url },(error,redirectLocation,renderProps)=>{
    //     console.log('renderProps--',renderProps)
    //     if(redirectLocation){
    //         res.redirect(302,redirectLocation.pathname +redirectLocation.search);
    //     }else if( renderProps ){
            
    //     }
    // })
    res.send(`<html >
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="https://cdn.bootcss.com/react/16.4.0/umd/react.development.js"></script>
        <script src="https://cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.development.js"></script>
        <script src="https://cdn.bootcss.com/babel-standalone/6.26.0/babel.min.js"></script>
    </head>
    <body>
        <div id="exp">111</div>
        
    </body>
    </html>`)
})

const server=app.listen('8800',()=>{
    const host=server.address().address;
    const port=server.address();
    console.log('localhost:8800'+host,port)
})