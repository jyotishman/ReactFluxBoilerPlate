var config = {
	entry: './src/js/main.js', // entry point
	output: {
		filename: 'dist/js/main.js', // place where bundled app will be served
	},
	devServer: {
		inline: true, // autorefresh
		port: 8080 // development port server
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, // search for js files 
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'axios'] // use es2015 and react
			}
		}]
	}
}
module.exports = config;