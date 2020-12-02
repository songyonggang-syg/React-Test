const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
const config = WebpackMerge.merge(baseConfig, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    devtool: "cheap-module-eval-source-map",
    devServer: { //
        host: "0.0.0.0",
        stats: 'errors-only',
        hotOnly: true,
        port: 2000,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        progress:false,
        before:()=>{
            console.log('start!')
        },
        after:()=>{
            console.log('end!')
        }
    },
});
module.exports = config;
