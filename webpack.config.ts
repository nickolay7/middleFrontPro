import path from "path";
import {BuildPaths} from "./config/build/types";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = "production";
const isDev = mode === "production";

const config = buildWebpackConfig({
    mode,
    paths,
    isDev
});

export default config;