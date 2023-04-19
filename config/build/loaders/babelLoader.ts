import { BuildOptions } from '../types';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BabelLoaderOptions extends BuildOptions {
    isTsx: boolean;
}

export const babelLoader = ({ isTsx }: BabelLoaderOptions) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
});
