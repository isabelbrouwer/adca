module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addFilter("postDate", (date) => {
    return new Date(date).toLocaleDateString("nl-NL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("otherPosts", (posts, currentUrl, limit) => {
    return posts.filter(p => p.url !== currentUrl).slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
