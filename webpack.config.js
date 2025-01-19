const path = require("path");

module.exports = {
  entry: {
    youtube: "./scripts/youtube.js",
    pixelate: "./scripts/pixelate.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader
          options: {
            presets: ["@babel/preset-env"], // Use the preset-env preset
          },
        },
      },
    ],
  },
};