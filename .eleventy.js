module.exports = function(eleventyConfig) {

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
