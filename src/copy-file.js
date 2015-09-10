var fs = require('fs');

// http://stackoverflow.com/a/14387791/186965
function copyFile(source, target, cb) {
  var cbCalled = false;

  // console.log('Copying "' + source + '" to "' + target + '"');

  var rd = fs.createReadStream(source);
  rd.on('error', function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on('error', function(err) {
    done(err);
  });
  wr.on('close', function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled && cb) {
      cb(err);
      cbCalled = true;
    }
  }
}

module.exports = copyFile;
