let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSASS = new ExtractTextPlugin('./static/css/[name].css');
let isProduction = function() {
    return process.env.NODE_ENV === 'production';
};

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './static/css/index.scss',
        './static/js/index.js',
        './index.jsx'
    ],
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
        extractSASS,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

    ]
};