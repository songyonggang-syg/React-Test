const path = require("path");
// html 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
//每次打包清除dist文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//出入口文件路径
const PATH = {
    app: path.join(__dirname, "../src/main.js"),
    build: path.join(__dirname, "../dist"),
};
module.exports = {
    entry: {
        app: PATH.app,
    },
    output: {
        //判断当前环境
        filename: process.env.NODE_ENV == "development" ? "js/[name].[hash:8].js" : "js/[name].js",
        path: PATH.build,
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            fliename: "index.html",
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".jsx", ".js", ".json"],
        alias: {},
    },
    //处理模块
    module: {
        //规则
        rules: [
            {
                //js处理
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: path.join(__dirname, "../node_modules/"),
            },
            {
                //图片处理
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 2048,
                        name: "image/[name].[ext]",
                    },
                },
                exclude: path.join(__dirname, "../node_modules/"),
            },
            {
                //字体处理
                test: /\.(woff|svg|woff2|ttf|eot)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "iconfont/[name].[ext]",
                    },
                },
                exclude: path.join(__dirname, "../node_modules/"),
            },
        ],
    },
};
