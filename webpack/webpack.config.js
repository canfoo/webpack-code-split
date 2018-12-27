const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const path = require('path');

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
    /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    entry: {
      main: path.join(__dirname, '../src/')
    },
    /**
     * output tells webpack where to put the files he creates
     * after running all its loaders and plugins.
     *
     * > [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     * > path.join(__dirname, '../build/') will output into a /build folder in
     *   the root of this prject.
     */
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, '../build/'),
      // publicPath: '/', can uncomment if you want everything relative to root '/'
      chunkFilename:'[name].js'
    },

    module: {
      // Loaders allow you to preprocess files!
      loaders: [
        {
          test: /\.(js)$/, // look for .js files
          exclude: /node_modules/, // ingore /node_modules
          loader: 'babel-loader', // preprocess with that babel goodness
          query: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.(scss|css)$/,
          loaders:
            env.dev || env.test
            ? [
              'style-loader',
              'css-loader?minimize&-autoprefixer',
              'postcss-loader',
              'sass-loader',
            ]
            : ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader?minimize&-autoprefixer!postcss-loader!sass-loader' }),
        },
        {
          test: /\.md$/,
          loader : 'raw-loader'
        }
      ],
    },

    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),

      ifProd(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks (module) {
            if (/world\.js$/.test(module.resource)) {
              return true
            }
            return false;
          }
        })
      )
    ]),
  };
};
