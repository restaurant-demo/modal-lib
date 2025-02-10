const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].js',
    // publicPath: "http://localhost:5000/",
    publicPath: "auto",
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react'),
      "tailwind-config": path.resolve(__dirname, "../main-mf/tailwind.config.js"),
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.svg$/,
      //   use: "file-loader",
      // },
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "modal_lib",
      filename: 'remoteEntry.js',
      remotes: {
        main: `main@${process.env.REACT_APP_HOST_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        zustand: { singleton: true, eager: true, requiredVersion: "^5.0.0" },
      },
      exposes: {
        "./Modal": "./src/components/Modal",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Restaurant Demo App",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 5000,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};
