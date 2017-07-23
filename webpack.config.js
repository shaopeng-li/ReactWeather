module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/weather.jsx',
			About: 'app/components/About.jsx',
			Example: 'app/components/Example.jsx',
			WeatherForm: 'app/components/weatherForm.jsx',
			WeatherList: 'app/components/weatherList.jsx',
			openWeatherMap: 'api/openWeatherMap.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},

	devtool: 'cheap-module-eval-source-map'
};