var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
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
      OpenWeatherMap: path.resolve('app/api/OpenWeatherMap.jsx'),
      ErrorModal: path.resolve('app/components/ErrorModal.jsx')
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
