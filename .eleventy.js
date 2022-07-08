// config file

const { DateTime } = require("luxon");
// Modify the date time on the blog post
module.exports = function (eleventyConfig) {
  // Function to tell eleventy to copy the assets and css file to the public folder for display
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
