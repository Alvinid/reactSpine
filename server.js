const express = require ('express');
const app = express();
import  { match, RoutingContext } from 'react-router';
import routes from './common/router';
import { renderToString } from 'react-dom/server';
app.use(express.static('public'));
app.get('*',function(req,res){
    match({ routes, location:req.url },(error,redirectLocation,renderProps)=>{
       // console.log('req--',req.url)
        //console.log('renderProps--',renderProps)
        if(redirectLocation){
            res.redirect(302,redirectLocation.pathname +redirectLocation.search);
        }else if( renderProps ){
            var react_stuff = renderToString(<RouterContext {...renderProps} />);
            res.send(`<html >
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                <div id="exp">${react_stuff}</div>
                
            </body>
            </html>`)
        }
    })
    
})

const server=app.listen('8800',()=>{
    const host=server.address().address;
    const port=server.address();
    console.log('localhost:8800'+host,port)
})