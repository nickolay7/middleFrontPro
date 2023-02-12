import webpack, {
    DefinePlugin,
    HotModuleReplacementPlugin,
    WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types';

export const buildPlugins = ({
    paths,
    isDev,
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
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new HotModuleReplacementPlugin());
    }

    return plugins;
};
