import webpack from 'webpack';
import { BuildPaths } from '../build';
import sassLoader from '../build/loaders/sassLoader';

const path = require('path');

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    config.module.rules.push(sassLoader(true));

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules
        .filter((loader: { test: string }) => !/svg/.test(loader.test));

    config.module.rules.push(
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    );

    return config;
};
