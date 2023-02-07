import webpack, { DefinePlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => [
  // создаем index.html в output.path на основе public/index.html
  new HtmlWebpackPlugin({
    template: paths.html,
    filename: "index.html",
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin(),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
];
