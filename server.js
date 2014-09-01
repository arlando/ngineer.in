'use strict';
var SETTINGS = require('./SETTINGS');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var server;

if (!SETTINGS.IS_PRODUCTION) {

    app.use(express.static(__dirname + '/public'));
    app.use('/', express.static(__dirname, '/public/index.html'));

}

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(methodOverride());
require('./config/routes')(app);
server = app.listen(app.get('port'), '127.0.0.1');

module.exports = {
    app: app,
    server: server
};