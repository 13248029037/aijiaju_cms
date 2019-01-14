
const htmlwebpackplugin = require('html-webpack-plugin') //模板
const cleanwebpackplugin = require('clean-webpack-plugin')//清除dist
const optimizecss = require('optimize-css-assets-webpack-plugin')//压缩css
const minicssextractplugin = require('mini-css-extract-plugin')//抽取css
module.exports = {
    mode:"development",
    entry: path.join(__dirname + 'index.js'),
    output: {
        filename: '[name].js',
        path: path.join(__dirnmae + '../dist'),
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
					{
						loader: require.resolve("css-loader"),
						options: {
							modules: true,
							localIndetName:"[name]__[local]___[hash:base64:5]"
						}
					}, {
						loader: require.resolve("less-loader")
					}
				],
			},
			{
				test: /\.less$/,
				include: /node_modules/,
				use: [
					require.resolve("style-loader"),
					require.resolve("css-loader"),
					{
						loader: "less-loader",
						options: {
							modifyVars,
							javascriptEnabled: true,
						}
					}
				],
            },
            {
				test: /\.css$/,
				exclude: /node_moduels/,
				use: [
					'style-loader',
					minicssextractplugin.loader,
					"css-loader"
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
				exclude: /node_modules/,
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
    ],
    devtool: '#eval-source-map',
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src'),
            'vue$': 'vue/dist/vue.js'
        },
        extends:['.js', '.vue','.css','.less']
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