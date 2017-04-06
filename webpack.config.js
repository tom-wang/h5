var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './app/index.js',
        //vendor: 'moment',
    },
    output: {
        //filename: '[name].[chunkhash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }]
   },
    /*
   plugins: [
       new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor' // Specify the common bundle's name.
       })
   ]
   */
};
