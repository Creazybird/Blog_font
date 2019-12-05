module.exports={
    devServer:{
        proxy:{
            '/blogApi':{
                target:'http://127.0.0.1:5000/',
                ws:true,
                secure:false,
                changOrigin:true,
                pathRewrite:{
                    '^/blogApi':'/api'
                }
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
      },
}