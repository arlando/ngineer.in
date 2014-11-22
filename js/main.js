'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Router = require('./meta/router');
var AppView = require('./views/AppView');
var contents = require('./data/contents.json');
var SingleContentView = require('./views/SingleContentView');
var router;

router = new Router({
    app: new AppView({
        VIEWS: {
            SINGLE_CONTENT_VIEW: SingleContentView
        },
        collection: new Backbone.Collection(contents)
    })
});
Backbone.history.start();