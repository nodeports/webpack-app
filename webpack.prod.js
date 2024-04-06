const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
      output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
});
