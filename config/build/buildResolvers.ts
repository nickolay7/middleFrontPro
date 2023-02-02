import {ResolveOptions} from "webpack";
import path from "path";
import {BuildOptions} from "./types";
export const buildResolvers = ({src}: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
        'node_modules',
        src
    ]
});