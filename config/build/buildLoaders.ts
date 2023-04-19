import { RuleSetRule } from 'webpack';
import sassModulesLoader from './loaders/sassLoader';
import { BuildOptions } from './types';
import { babelLoader } from './loaders/babelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const sassLoader = sassModulesLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsxBabelLoader = babelLoader({ ...options, isTsx: true });
    const tsBabelLoader = babelLoader({ ...options, isTsx: false });

    return [
        fileLoader,
        svgLoader,
        tsBabelLoader,
        tsxBabelLoader,
        sassLoader,
    ];
};
