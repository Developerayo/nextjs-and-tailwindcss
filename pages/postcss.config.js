const tailwind = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer")
  ]
};
