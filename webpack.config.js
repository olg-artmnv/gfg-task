const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpe?g|bmp|ttf|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash]-[name].[ext]',
                            outputPath: 'images'
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GFG Task',
            favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
            template: path.resolve(__dirname, 'src/assets/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            '@contexts': path.join(__dirname, 'src/contexts'),
            '@hooks': path.join(__dirname, 'src/hooks'),
            '@images': path.join(__dirname, 'src/assets/images'),
            '@pages': path.join(__dirname, 'src/pages'),
            '@requests': path.join(__dirname, 'src/requests'),
            '@styles': path.join(__dirname, 'src/styles'),
            '@ui-kit': path.join(__dirname, 'src/ui-kit'),
            '@urls': path.join(__dirname, 'src/urls'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        open: true,
    },
    optimization: {
        minimize: false,
    },
};

module.exports = config;
