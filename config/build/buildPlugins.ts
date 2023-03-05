import webpack, {
    DefinePlugin,
    WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types';

export const buildPlugins = ({
    paths,
    isDev,
    apiURL,
}: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
    // создаем index.html в output.path на основе public/index.html
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html',
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiURL),
        }),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    }

    return plugins;
};
