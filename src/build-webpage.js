var fs = require('fs');
var mustache = require('mustache');
var path = require('path');
var copyFile = require('./copy-file.js');

function buildWebpage(model) {

  return new Promise(function(resolve, reject) {

    var templateInputPath = __dirname + '/template/page.mst';
    var cssInputPath = __dirname + '/css/page.css';

    var publishedDir = path.normalize(__dirname + '/../' + model.baseDir);

    var cssOutputPath = publishedDir + 'page.css';
    var htmlOutputPath = publishedDir + 'index.html';

    // Write CSS
    copyFile(cssInputPath, cssOutputPath, function(err) {
      if (err) {
        reject(err);
      } else {

        // Read HTML template
        fs.readFile(templateInputPath, 'utf8', function(err, template) {

          if (err) {
            reject(err);
          } else {

            // Render HTML
            var html = mustache.render(template, model);

            // Write HTML
            fs.writeFile(htmlOutputPath, html, function(err) {
              if (err) {
                reject(err);
              } else {
                resolve({
                  publishedTo: publishedDir
                });
              }
            });
          }
        });
      }
    });
  });
}

module.exports = buildWebpage;
