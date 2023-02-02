import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import { Configuration } from "webpack";
import {BuildOptions} from "./types";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths: { entry, build }, mode, isDev } = options;

    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].bundle.js', // default name is main or if multi entry point(name as entry point name)
            path: build,
            clean: true // remove old build cash
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}