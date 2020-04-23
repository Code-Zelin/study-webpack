const config = require("./webpack/webpack.base");
const merge = require("webpack-merge");

module.exports = (env) => {
    console.log(env)
    const mode = env && env.production ? "prod" : "dev";

    return merge(config, require(`./webpack/webpack.${mode}.js`));
};
