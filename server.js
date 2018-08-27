const express = require ('express');
const app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
    console.log(req.body,'123')
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
        https://cnodejs.org/topic/5865a866189fd5ad6459006c
        
    </body>
    </html>`)
})

const server=app.listen('8800',()=>{
    const host=server.address().address;
    const port=server.address();
    console.log('localhost:8800'+host,port)
})