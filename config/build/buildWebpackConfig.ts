import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import { Configuration } from "webpack";
import {BuildOptions} from "./types";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths: { entry, build }, mode } = options;

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
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}