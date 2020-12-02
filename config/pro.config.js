const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
//抽离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = webpackMerge.merge(baseConfig, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        // 抽离 css 文件
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
        }),
    ],
});
module.exports = config;
