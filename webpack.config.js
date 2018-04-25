const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports ={
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js'
    },
    devServer: {
        port: 8000,
        historyApiFallback: true
      },
      mode: "production",
    devtool: "eval-cheap-module-source-map",
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        fallback: 'responsive-loader'
                    }
                  }
                ]
              }
            
          ]
       
    },
    plugins: [
        new CopyWebpackPlugin([{
            from:'./index.html',
            toType: 'dir'
        }]),
        new CleanWebpackPlugin('./dist')
        
    ]
   
}