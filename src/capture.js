var saveScreenshots = require('./save-screenshots.js');
var buildWebpage = require('./build-webpage.js');
var compileConfig = require('./compile-config.js');

function capture(config) {
  return saveScreenshots(compileConfig(config)).then(buildWebpage);
};

module.exports = capture;
