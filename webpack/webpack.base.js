const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		path: path.resolve(__dirname, "../src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "bundle.[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss|sass)/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
			minify: true,
			title: "study webpack",
		}),
		new CleanWebpackPlugin(),
	],
};
