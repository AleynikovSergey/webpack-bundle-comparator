const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/',
    pathinfo: process.env.NODE_ENV !== 'production',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    flagIncludedChunks: false,
    occurrenceOrder: false,
    concatenateModules: false,
    splitChunks: {
      hidePathInfo: true,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: false,
    removeAvailableModules: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'public/favicon.png'),
      favicons: {
        appName: 'JB desk',
        appDescription: 'JB desks,job portal,job',
        developerName: 'Me',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#fff',
        theme_color: '#777777',
        icons: {
          coast: false,
          yandex: false,
        },
      },
      inject: (htmlPlugin) =>
        path.basename(htmlPlugin.options.filename) === 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    }),
    new EnvironmentPlugin({ ...process['env'] }),
  ],
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'index.html',
    port: process.env.PORT,
    open: true, // Opens the browser after launching the dev server.
    compress: true, // Enables asset compression for faster reloads.
    historyApiFallback: true, // Enables a fallback to index.html for history-based routing.
    overlay: true, // Displays Webpack errors in the browser window.
    noInfo: false, // All information will be hide if set true
    onListening(server) {
      const { port } = server.listeningApp.address();
      console.log('Listening on port:', port);
    },
    proxy: {
      '/api': {
        target: 'https://employment-assistant.onti.actcognitive.org/',
        secure: false,
      }
    }
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    concatenateModules: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
