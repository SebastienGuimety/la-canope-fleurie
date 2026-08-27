module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");

  // Collection des catégories VISIBLES uniquement (pour générer les pages)
  eleventyConfig.addCollection("categoriesVisibles", function (collectionApi) {
    return collectionApi.getFilteredByTag("categorie")
      .filter(item => item.data.visible)
      .sort((a, b) => (a.data.ordre || 99) - (b.data.ordre || 99));
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
  };
};
