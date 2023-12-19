const path = require('path');

module.exports =  {
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
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        fallback: { "path": false }
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    // Add the watch options
    watch: process.env.NODE_ENV === "development",
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
};