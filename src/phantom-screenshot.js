var page = require('webpage').create();
var system = require('system');

var options = getOptions(
  {
    url: null,
    filepath: null,
    width: 1024,
    height: 768,
    responsive: false
  },
  system.args
);

function getOptions(options, args) {
  args.slice(1).forEach(function (a) {
    var kv = a.split('=');
    var v = kv[1];
    v = v === 'true' ? true : (v === 'false' ? false : v);
    options[kv[0]] = v;

  });
  return options;
}

function logObject(obj) {
  for (var key in obj) {
    console.log(key + ': ' + obj[key]);
  }
}

console.log('\nCapturing with options:');
logObject(options);

page.viewportSize = {
  width: options.width,
  height: options.height
};

// Try to force the "responsive" site
if (options.responsive) {
  page.settings.userAgent = 'Mozilla/5.0(iPhone;U;CPUiPhoneOS4_0likeMacOSX;en-us)AppleWebKit/532.9(KHTML,likeGecko)Version/4.0.5Mobile/8A293Safari/6531.22.7';
}

phantom.addCookie({
  'name': 'ckns_policy_exp',
  'value': '1473469312260',
  'domain': '.bbc.co.uk',
  'path': '/',
  'expires': (new Date()).getTime() + (1000 * 60 * 60)
});

phantom.addCookie({
  'name': 'ckns_policy',
  'value': '111',
  'domain': '.bbc.co.uk',
  'path': '/',
  'expires': (new Date()).getTime() + (1000 * 60 * 60)
});

page.open(options.url, function(status) {

  if (status !== 'success') {
    console.log('Unable to load the address: ' + status);
    phantom.exit();
  } else {
    console.log('Waiting for 10 seconds on ' + options.url);
    window.setTimeout(function() {
      page.render(options.filepath);
      console.log('URL ' + options.url + ' saved to ' + options.filepath);
      phantom.exit();
    }, 5000);
  }
});
