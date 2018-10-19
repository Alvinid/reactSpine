const path=require('path');
var nodeExternals = require('webpack-node-externals');
module.exports={
    entry:path.resolve(__dirname,'../server.js'),
    output:{
        path:path.resolve(__dirname,'../'),
        filename:'server.bundle.js'
    },
    externals:[nodeExternals()],
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