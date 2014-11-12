'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Router = require('./meta/router');
var AppView = require('./views/AppView');
var contents = require('./data/contents.json');
var SingleContentView = require('./views/SingleContentView');
var router;

router = new Router({
    app: new AppView({
        SingleContentView: SingleContentView,
        collection: new Backbone.Collection(contents)
    })
});
Backbone.history.start();