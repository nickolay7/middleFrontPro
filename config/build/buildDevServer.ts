import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "./types";
export const buildDevServer = ({port}: BuildOptions): WebpackDevServerConfiguration => ({
    open: true,
    port: port
});