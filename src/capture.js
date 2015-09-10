var saveScreenshots = require('./save-screenshots.js');
var buildWebpage = require('./build-webpage.js');

var capture = {
  buildAndSave: function(config) {
    return saveScreenshots(config).then(buildWebpage).then(function(results) {
      console.log('Published to "' + results.publishedTo  + '"');
    });
  },
  publishToS3: function(path) {

  }
};

module.exports = capture;
