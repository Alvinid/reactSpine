const path=require('path');
module.exports={
    entry:path.resolve(__dirname,'../server.js'),
    output:{
        path:path.resolve(__dirname,'../'),
        filename:'server.bundle.js'
    },
    target:'node',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader'
            }
        ]
    }

}