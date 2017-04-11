var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve('app/components/Main.jsx'),
      Nav: path.resolve('app/components/Nav.jsx'),
      Weather: path.resolve('app/components/Weather.jsx'),
      WeatherForm: path.resolve('app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve('app/components/WeatherMessage.jsx'),
      About: path.resolve('app/components/About.jsx'),
      Examples: path.resolve('app/components/Examples.jsx'),
      OpenWeatherMap: path.resolve('app/api/OpenWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'eval-source-map'
};
