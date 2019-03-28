const path = require('path');

const config = {
    entry: {
			test: './test.js',
			toast : './toast.js'
    },
    output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, './')
    },
    mode: 'production',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				}
			]
		}
}

module.exports = config;