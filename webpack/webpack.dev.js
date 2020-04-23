const path = require("path");

module.exports = {
    mode: "development",
    devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
        port: 1234,
        hot: true,
        open: true
	},
}