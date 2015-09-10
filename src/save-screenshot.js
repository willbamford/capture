var Promise = require('es6-promise').Promise;
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs2');
var convertToSlug = require('./convert-to-slug.js');

function saveScreenshot(config) {

  var name = config.name;
  var url = config.url;
  var width = config.width;
  var height = config.height;
  var responsive = config.responsive !== undefined ? config.responsive : true;
  var filepath = 'screenshots/' + convertToSlug(name + '_' + width + 'x' + height) + '.png';

  return new Promise(function(resolve, reject) {

    var childArgs = [
      path.join(__dirname, 'phantom-screenshot.js'),
      'url=' + url,
      'filepath=' + config.baseDir + filepath,
      'width=' + width,
      'height=' + height,
      'responsive=' + responsive
    ];

    childProcess.execFile(phantomjs.path, childArgs, function(err, stdout, stderr) {

      if (stderr || err) {
        reject(stderr || rr);
      } else {

        console.log('Phantom log:');
        console.log(stdout);

        resolve({
          name: name,
          url: url,
          width: width,
          height: height,
          responsive: responsive,
          filepath: filepath
        });
      }
    });

  });
}

module.exports = saveScreenshot;
