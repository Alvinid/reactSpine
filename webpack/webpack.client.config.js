const path=require('path');

module.exports = {
    entry:path.resolve(__dirname,'../client.js'),
    output:{
        path:path.resolve(__dirname,'../public'),
        filename:'server.client.bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    }
}