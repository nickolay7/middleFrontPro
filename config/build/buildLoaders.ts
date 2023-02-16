import { RuleSetRule } from 'webpack';
import sassModulesLoader from './loaders/sassLoader';
import { BuildOptions } from './types';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassLoader = sassModulesLoader(isDev);

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

    const babelLoader = {
        test: /\.(m?js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    return [babelLoader, tsLoader, sassLoader, svgLoader, fileLoader];
};
