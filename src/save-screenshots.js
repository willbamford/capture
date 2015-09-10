var Promise = require('es6-promise').Promise;

var saveScreenshot = require('./save-screenshot.js');

function saveScreenshots(config) {

  var p = new Promise(function(resolve) {resolve(null);});

  var results = [];

  config.variants.forEach(function(variant) {
    p = p.then(function(result) {

      if (result)
        results.push(result);

      return saveScreenshot({
        name: variant.name,
        url: variant.url,
        width: variant.width,
        height: variant.height,
        responsive: variant.responsive,
        baseDir: config.baseDir
      })
    });
  });

  p = p.then(function(result) {
    results.push(result);
    return {
      title: config.title,
      baseDir: config.baseDir,
      variants: results
    };
  });

  return p;

  // return Promise.all(
  //   config.variants.map(function(variant) {
  //     return saveScreenshot({
  //       name: variant.name,
  //       url: variant.url,
  //       width: variant.width,
  //       height: variant.height,
  //       responsive: variant.responsive,
  //       baseDir: config.baseDir
  //     });
  //   })
  // )
  // .then(function(results) {
  //   return {
  //     title: config.title,
  //     baseDir: config.baseDir,
  //     variants: results
  //   };
  // });
}

module.exports = saveScreenshots;
