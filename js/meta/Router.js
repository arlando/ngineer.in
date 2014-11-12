'use strict';

var Backbone = require('backbone');
var eventBus = require('./EventBus');

var Router;
Router = Backbone.Router.extend({
    routes: {
        'experiments': 'getExperiments',
        'experiments/:name' : 'getExperiment',
        '*default': 'defaultRoute'
    },

    initialize: function (options) {
        options = options || {};
        this.app = options.app;
        this.app.render();
        eventBus.on('router:navigate', this.navigate, this);
    },

    getExperiments: function () {

    },

    getExperiment: function (name) {

    },

    defaultRoute: function () {
    }
});

module.exports = Router;
