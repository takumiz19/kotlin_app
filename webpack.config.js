const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: "./src/main/resources/webpack/main.js",
    output: {
        path: __dirname + "/build/classes/kotlin/main/static/js",
        filename: "main.js"
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: ['vue-loader']
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['vue-style-loader', 'css-loader'],
            },
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
            alias: {
                '~': __dirname + '/src/main/resources/webpack'
            }
        }
    

};