/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

require('./system/prototype');

// Global variables
global.config = require('./config');
global.debug = require('./system/helpers/debug');
global.date = require('./system/helpers/date');
global.i18n = require('./system/helpers/i18n');
global.http = require('./system/helpers/http');
global.pagination = require('./system/helpers/pagination');

global.i18n.setLanguage();

app.set('view engine', global.config.site.html.engine);
app.locals = global.config;
app.locals.pretty = !global.config.site.html.minify;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});