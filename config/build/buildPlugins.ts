import webpack, {
    DefinePlugin,
    WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types';

export const buildPlugins = ({
    paths,
    isDev,
    apiURL,
    project,
}: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
    // создаем index.html в output.path на основе public/index.html
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html',
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiURL),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    }

    return plugins;
};
