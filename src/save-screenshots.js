var Promise = require('es6-promise').Promise;

var saveScreenshot = require('./save-screenshot.js');

function saveScreenshots(config) {

  return Promise.all(
    config.variants.map(function(variant) {
      return saveScreenshot({
        name: variant.name,
        url: variant.url,
        width: variant.width,
        height: variant.height,
        responsive: variant.responsive,
        baseDir: config.baseDir
      });
    })
  )
  .then(function(results) {
    return {
      title: config.title,
      baseDir: config.baseDir,
      variants: results
    };
  });
}

module.exports = saveScreenshots;
