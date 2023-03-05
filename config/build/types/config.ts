type BuildMode = 'development' | 'production';

export interface BuildPaths {
    html: string;
    entry: string;
    build: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    src: string;
    apiURL: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiURL: string;
}
