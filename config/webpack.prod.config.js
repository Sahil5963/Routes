const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: ["./js/index.js"],
    app: ["./js/app.js"],
    sidebar: ["./js/sidebar.js"],
    dataTable: ["./js/dataTable.js"]
  },
  mode: "production",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/"
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
              name: "[name].[ext]",
              outputPath: 'images/',
              publicPath: 'images/'
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
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
              minimize: false,
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