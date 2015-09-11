var capture = require('./src/capture.js');

function buildVariants(url) {

  return [
    {
      url: url,
      name: 'small',
      width: 320,
      height: 480,
      responsive: true
    },
    {
      url: url,
      name: 'medium',
      width: 600,
      height: 480,
      responsive: true
    },
    {
      url: url,
      name: 'wide',
      width: 1008,
      height: 480,
      responsive: true
    },
    {
      url: url,
      name: 'xwide',
      width: 1400,
      height: 480,
      responsive: true
    }
  ];

}

function buildConfig(id) {

  return {
    title: sections[id].title,
    variants: buildVariants(sections[id].url)
  };

}

var sections = {
  'guardian-sport': {
    title: 'Guardian Sport',
    url: 'http://www.theguardian.com/uk/sport'
  },
  'sky-sports': {
    title: 'Sky Sports',
    url: 'http://www.skysports.com/'
  },
  'bbc-homepage': {
    title: 'BBC Homepage',
    url: 'http://www.bbc.co.uk'
  },
  'bbc-news': {
    title: 'BBC News',
    url: 'http://www.bbc.co.uk/news'
  },
  'bbc-iplayer': {
    title: 'BBC iPlayer',
    url: 'http://www.bbc.co.uk/iplayer'
  },
  'bbc-cbeebies': {
    title: 'BBC CBeebies',
    url: 'http://www.bbc.co.uk/cbeebies'
  },
  'bbc-cbbc': {
    title: 'BBC CBBC',
    url: 'http://www.bbc.co.uk/cbbc'
  }
};

var config = buildConfig('bbc-homepage');

capture(config).then(function(results) {
  console.log('Published to "' + results.publishedTo  + '"');
}).then(function() {
  console.log('Done!');
  process.exit(0);
}).catch(function(err) {
  console.error('Err: ' + err);
  process.exit(1);
});
