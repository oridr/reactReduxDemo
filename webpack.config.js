'use strict';

const webpack = require('webpack');
const DEV_SERVER_PORT = 8081;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:' + DEV_SERVER_PORT,
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'react-hot!babel'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=20480&name=[name].[ext]'
			}
		]
	},

	resolve: {
		extensions: ['', '.js']
	},

	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},

	devServer: {
		port: DEV_SERVER_PORT,
		contentBase: './dist',
		hot: true
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'eRated Widget',
			inject: 'body',
			template: 'src/index.html',
		}),

		new CleanWebpackPlugin(['dist']),

		new webpack.HotModuleReplacementPlugin()
	],

	devtool: "source-map"
};