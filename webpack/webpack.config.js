/* eslint no-unused-vars: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

const webpack = require('webpack');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './src/app.js',
	},
	output: {
		filename: './dist/build.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				loader: 'babel-loader',
				query: {
					presets: [
						['es2015', { modules: false }],
					],
				},
			},
		],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false },
			sourceMap: true,
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
		}),
	],
};
