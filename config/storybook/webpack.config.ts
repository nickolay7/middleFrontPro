import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build';
import sassLoader from '../build/loaders/sassLoader';

const path = require('path');

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src,
    };
    config.resolve!.extensions!.push('ts', 'tsx');

    config.module!.rules!.push(sassLoader(true));

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.filter(
        (loader) => !/svg/.test(loader.test as string),
    );

    config.module!.rules.push(
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
    );

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('http://test_api.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
