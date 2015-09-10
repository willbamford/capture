var Promise = require('es6-promise').Promise;
var s3 = require('s3');

function publishDirToS3(options) {

  return new Promise(function(resolve, reject) {

    var localDir = options.localDir;
    var remoteDir = options.remoteDir;
    var bucketName = options.bucketName;
    var credentialsKey = options.credentials.key;
    var credentialsSecret = options.credentials.secret;

    var client = s3.createClient({
      s3Options: {
        accessKeyId: credentialsKey,
        secretAccessKey: credentialsSecret
      },
    });

    var params = {
      localDir: localDir,

      s3Params: {
        Bucket: bucketName,
        Prefix: remoteDir
      },
    };

    var uploader = client.uploadFile(params);
    uploader.on('error', function(err) {

      reject('Unable to upload: ' + err.stack);
    });

    uploader.on('progress', function() {
      console.log('progress', uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal);
    });

    uploader.on('end', function() {
      resolve('Done uploading');
    });
  });
}
