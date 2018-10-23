const path = require('path');
const webpack = require('webpack');
/**
 * `..` Since this config file is in the config folder so we need
 * to resolve path in the top level folder.
 */
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    mode: 'production',
    entry: {
        app: resolve('src/app.js'),
    },
    output: {
        filename: '[name].min.js',
        path: resolve('dist'),
    },
    module: {
        rules: [
            {
                // vue-loader config to load `.vue` files or single file components.
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                        css: ['vue-style-loader', {
                            loader: 'css-loader',
                        }],
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // Exchanges, adds, or removes modules while an application is running, without a full reload.
        new webpack.HotModuleReplacementPlugin(),
        // short-circuits all Vue.js warning code
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        // new webpack.optimize.UglifyJsPlugin(),
    ],
    resolve: {
        /**
         * The compiler-included build of vue which allows to use vue templates
         * without pre-compiling them
         */
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.json'],
    },
    // webpack outputs performance related stuff in the browser.
    performance: {
        hints: false,
    },
};