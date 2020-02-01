const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/weather', { target: 'https://api.darksky.net/forecast/392b9a0092ed725dfa693dc300a9b3b0' }));
}