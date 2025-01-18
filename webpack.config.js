const path = require("path");

module.exports = {
  entry: "./scripts/youtube.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
