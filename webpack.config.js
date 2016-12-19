var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSASS = new ExtractTextPlugin('./static/css/[name].css');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './static/css/index.scss',
        './index.jsx'
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        extractSASS
    ]
}