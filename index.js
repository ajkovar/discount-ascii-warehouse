var http = require('http');
var serveStaticFiles = require('ecstatic')({ root: __dirname + '/static' });
var port = process.env.PORT || 8000;

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

let config = require('./webpack.config');
const compiler = webpack(config);

let middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

let hotMiddleware = webpackHotMiddleware(compiler);

http.createServer(function (req, res) {
    if (req.url.indexOf('/ad') === 0) {
        return require('./lib/http-handle-ads')(req, res);
    }

    if (req.url.indexOf('/api') === 0) {
        return require('./lib/http-handle-api')(req, res);
    }

    // default: handle the request as a static file
    // serveStaticFiles(req, res);
  middleware(req, res, () => {
  })
  hotMiddleware(req, res, () => {})
}).listen(port);

console.log('Listening on http://localhost:%d', port);
