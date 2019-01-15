
const htmlwebpackplugin = require('html-webpack-plugin') //模板
const cleanwebpackplugin = require('clean-webpack-plugin')//清除dist
const optimizecss = require('optimize-css-assets-webpack-plugin')//压缩css
const minicssextractplugin = require('mini-css-extract-plugin')//抽取css
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loader-plugin
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode:"development",
    entry: path.join(__dirname + '/../src/index.js'),
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename:'js/[name].[hash].js',
        path: path.join(__dirname + '../dist'),
        publicPath: '/'
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                exclude:/node_modules/,
                loader: ["vue-loader"]
			},
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: ["babel-loader"]
            },
            {
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                    require.resolve("less-loader")
				],
			},
            {
				test: /\.css$/,
				use: [
                    'style-loader',
					minicssextractplugin.loader,
					"css-loader",
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_moduels/,
				use: [
					require.resolve("style-loader"),
					require.resolve("css-loader"),
					require.resolve("sass-loader"),
				]
            },
            {
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: "url-loader",
				exclude: /node_modules/,
				options: {
					limit: 8192
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: "file-loader",
			}
        ]
    },
    plugins: [
        new htmlwebpackplugin({
			template: path.resolve(__dirname, '../src/index.html'),
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),//定义全局变量
        new minicssextractplugin({
			filename: "[name].[hash].css",
        }),//抽取css
        new optimizecss(),//压缩css
        new cleanwebpackplugin(
			["dist/*"],　 //匹配删除的文件
			{
				root: path.resolve(__dirname, "../"),
				verbose: true,
				dry: false
			}),
		new VueLoaderPlugin()
    ],
    devtool: '#eval-source-map',
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src'),
            'vue$': 'vue/dist/vue.js'
        },
        extensions:['.js', '.vue','.css','.less']
    },
    devServer:{
        open:true,
        hot:true,
        inline:true,
        historyApiFallback:true,
        host:'localhost',
        proxy:{
			'/erp-gateway':{
				target:'http://192.168.3.115:8512',
				secure:false,
				changeOrigin:true,
				pathRewrite:{'^/erp-gateway':'/erp-gateway'}
			}
		}
    }
}