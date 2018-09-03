const { version } = require('./package');
const path = require('path');

module.exports = {
    components: './src/component/**/[A-Z]*.jsx',
    ignore: ['**/component/FilterContainer/FilterContainer.jsx',
        '**/component/ControlsForm/ControlsForm.jsx',
        '**/component/TaskContainer/TaskContainer.jsx'],
    defaultExample: true,
    ribbon: {
        url: 'https://github.com/styleguidist/react-styleguidist',
    },
    version,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                    include: path.resolve(__dirname, '../'),
                },
                {
                    test: /\.svg$/,
                    loader: 'file-loader',
                    query: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
            ],
        },
    },
};
