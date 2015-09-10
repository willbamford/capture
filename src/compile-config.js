var convertToSlug = require('./convert-to-slug.js');

function withData(input) {

  function buildVariant(variant) {

    return {
      name: variant.name || null,
      url: variant.url || input.url,
      width: variant.width || input.width,
      height: variant.height || input.height,
      responsive: (variant.responsive !== undefined) ?
        variant.responsive :
        ((input.responsive !== undefined) ? input.responsive : false)
    };
  }

  return {
    title: input.title || null,
    variants: input.variants.map(buildVariant),
    baseDir: input.baseDir || 'published/' + createUniqueDir(input) + '/'
  }
}

function withPath(path) {
  return withData(require(path));
}

function createUniqueDir(input) {
  return convertToSlug(input.title + '_' + Date.now());
}

function compileConfig(config) {
  return typeof config === 'string' ? withPath(path) : withData(config);
}

module.exports = compileConfig;
