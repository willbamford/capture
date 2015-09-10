var capture = require('./src/capture.js');
var buildConfig = require('./src/build-config.js');
var config = buildConfig.withPath(__dirname + '/configs/tennis.js');

capture.buildAndSave(config).then(function() {
  console.log('Done!');
  process.exit();
});
