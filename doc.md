# webpack 基本使用流程

> 1 `npm install webpack webpack-cli -D`
> 2 安装处理 css 的 loader `npm install style-loader css-loader node-sass sass-loader postcss-loader autoprefixer -D`
> 3 安装处理 js 的 loader `npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D`
> 4 安装处理图片的 loader `npm install url-loader file-loader -D`
> 5 安装 html-webpack-plugin clean-webpack-plugin `npm install html-webpack-plugin clean-webpack-plugin -D`
> 6 合并 webpack 配置项 `npm install webpack-merge -D`
> 7 开发环境中需要用到的服务 `npm install webpack-dev-server -D`
> 8 抽离 css 插件 `npm install extract-text-webpack-plugin@next -D`

# 启动文件

> webpack 在打包的时候默认会找到 webpack.config.js 配置文件进行处理,但是如果想要找到其他文件为启动目录配置文件时候需要做配置,在 scripts 中做配置

# React 必须安装的依赖

`npm install react react-dom -S`
