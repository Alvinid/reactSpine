const express = require ('express');
const app = express();

app.get('/',function(req,res){
    console.log(req.body,'123')
    res.send('hello world')；
})
const server=app.listen('8800',()=>{
    const host=server.address().address;
    const port=server.address();
    console.log('localhost:8800'+host,port)
})