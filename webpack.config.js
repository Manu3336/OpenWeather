const path = require('path');
const  autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/indejx.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename:'[id].js',
        publicPath: ''
    }, 
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use:[
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options:{
                            importLoaders:1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident: 'postcss',
                            plugin:() =>[
                                autoprefixer({
                                    "browsers":[
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};