
const htmlwebpackplugin = require('html-webpack-plugin') //模板
const cleanwebpackplugin = require('clean-webpack-plugin')//清除dist
const optimizecss = require('optimize-css-assets-webpack-plugin')//压缩css
const minicssextractplugin = require('mini-css-extract-plugin')//抽取css
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loader-plugin
const extractTextPlugin=require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode:"production",
    entry: path.join(__dirname + '/../src/index.js'),
    output: {
        filename: 'js/[name].[chunkhash].js',
        chunkFilename:'js/[name].[chunkhash].js',
        path: path.join(__dirname + '/../dist'),
        publicPath: '/'
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                exclude:/node_modules/,
                loader: "vue-loader",
                options:{
                    loaders:{
                       css:extractTextPlugin.extract({
                         fallback:'vue-style-loader',
                           use:'css-loader!less-loader'
                       }),
                       less:extractTextPlugin.extract({
                         fallback:'vue-style-loader',
                           use:'css-loader!less-loader'
                       })
                    }
                  }
			},
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: ["babel-loader"]
            },
            {
				test: /\.less$/,
				exclude: /node_modules/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                  })
			},
            {
                test: /\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                  })
			},
			{
				test: /\.scss$/,
                exclude: /node_moduels/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:["css-loader","sass-loader"]
                  })
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
    optimization: {
		splitChunks: {
			cacheGroups: { // 单独提取JS文件引入html
				common: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
				}
            }
		}
	},
    plugins: [
        new htmlwebpackplugin({
			template: path.resolve(__dirname, '../src/index.html'),
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),//定义全局变量
        new optimizecss(),//压缩css
        new cleanwebpackplugin(
			["dist/*"],　 //匹配删除的文件
			{
				root: path.resolve(__dirname, "../"),
				verbose: true,
				dry: false
			}),
		new VueLoaderPlugin(),
        new extractTextPlugin({
            filename: 'style.[chunkhash:5].css',
            allChunks: true
       }),
    ],
    devtool: 'cheap-module-source-map',
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src'),
            'vue$': 'vue/dist/vue.js'
        },
        extensions:['.js', '.vue','.css','.less']
    }
}