const path = require('path');

const webpack = require('webpack');
const WebpackUserscript = require('webpack-userscript');
const isDev = process.env.NODE_ENV === 'development';
const devProxyPort = process.env.DEV_PROXY_PORT || '10801';

const userscriptHeaders = require('./build/userscript.headers');
if (isDev) {
    userscriptHeaders.version = `[version]-build.[buildNo]`;
    userscriptHeaders.match.push('*://localhost*');
}

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  //devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebpackUserscript({
        headers: userscriptHeaders,
        pretty: false,
        proxyScript: {
            baseUrl: `http://127.0.0.1:${devProxyPort}`,
            filename: '[basename].proxy.user.js',
            enable: () => process.env.LOCAL_DEV === '1'
        },
    })
]
};