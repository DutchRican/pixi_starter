const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: 'src',
        port: 3000
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: './build/assets',
            to: 'assets'
        }]),
        new HTMLWebpackPlugin({
            template: './build/index.html',
            filename: 'index.html'
        })
    ]
}