const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: ["./js/index.js"],
    app: ["./js/app.js"],
    sidebar: ["./js/sidebar.js"],
    dataTable: ["./js/dataTable.js"],
    messageAlerts: ["./js/messageAlerts.js"],
    test: ["./js/test.js"],
  },
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/",
    library: ["App", "[name]"],
    libraryTarget: "umd"
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'sighnup.html',
      template: './src/sighnup.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../src"),
    overlay: true,
    watchContentBase: true
  },
  module: {
    rules: [{
        parser: {
          amd: false
        }
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },

          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(__dirname)
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img: src"]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            plugins: ["transform-es2015-arrow-functions"]
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};