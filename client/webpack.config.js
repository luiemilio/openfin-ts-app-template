const path = require('path');

module.exports = [
	{
		entry: './client/src/app.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: 'app-bundle.js',
			path: path.resolve(__dirname, '..', 'build')
		},
		experiments: {
			topLevelAwait: true
		}
	},
	{
		entry: './client/src/provider.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: 'provider-bundle.js',
			path: path.resolve(__dirname, '..', 'build')
		},
		experiments: {
			topLevelAwait: true
		}
	}
];