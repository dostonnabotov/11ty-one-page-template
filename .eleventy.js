// import filters
const sortByOrder = require("./src/_11ty/filters/sortByOrder.js");
const { readableDate, ISODate } = require("./src/_11ty/filters/date.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // passthrough files
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // filters
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("ISODate", ISODate);
  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  // watch compiled CSS for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/css/**/*.css",
  });

  // base config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
