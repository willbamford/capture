var config = {
  title: 'Tennis',
  url: 'http://m.bbc.co.uk/sport/tennis',
  responsive: true,
  variants: [
    {
      name: 'mdot-small',
      width: 320,
      height: 480
    },
    {
      name: 'mdot-medium',
      width: 600,
      height: 480
    },
    {
      name: 'mdot-wide',
      width: 1008,
      height: 480
    },
    {
      url: 'http://www.bbc.co.uk/sport/0/tennis',
      name: 'wwwdot',
      width: 1008,
      height: 480,
      responsive: false
    }
  ]
};

module.exports = config;
