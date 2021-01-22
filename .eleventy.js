module.exports = function(eleventyConfig) {

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    templateFormats: ["html"],
    pathPrefix: "/",

    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "content",
      output: "_site"
    }
  };
};
