const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.js$/, loader: "source-map-loader" },
        ],

    },
    // Other options...
};
