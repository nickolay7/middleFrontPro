type BuildMode = "development" | 'production';

export interface BuildPaths {
    html: string;
    entry: string;
    build: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}