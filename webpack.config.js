const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin ({
    title: 'Mat beräknaren',
    template: path.join(__dirname, "./template/index.html"),
    filename: "index.html",
    inject: 'body'
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    plugins: [ HtmlWebpackPluginConfig ],
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] } 
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};