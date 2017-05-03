var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './app/index.js',
        //vendor: 'moment',
    },
    output: {
        //filename: '[name].[chunkhash].js',
        //filename: 'bundle_[hash]_[chunkhash].js',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
   },
    /*
   plugins: [
       new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor' // Specify the common bundle's name.
       })
   ]
   */
};
