module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, {
				test: /\.sass$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
			}
		],

		loaders: [
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
	}
};