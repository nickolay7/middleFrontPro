import path from "path";
import {buildWebpackConfig, BuildPaths, BuildEnv} from "./config/build";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}
export default (env: BuildEnv) => {
    const mode = env.mode || "development";
    const isDev = mode !== "production";
    const port = env.port || 3000;

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        src: paths.src
    });
}
