'use strict';

var Backbone = require('backbone');

//Views
var AppView = require('../views/AppView');
var NavigationView = require('../views/NavigationView');
var PostsView = require('../views/Posts/PostsView');
var PageView = require('../views/Page/PageView');

//Meta
var eventBus = require('./EventBus');

var Router;
var router;

Router = Backbone.Router.extend({
    routes: {
        'blog/:name': 'getPost',
        'blog': 'getPosts',
        'about': 'getAbout',
        'contact': 'getContact',
        'experiments': 'getExperiments',
        'experiments/:name' : 'getExperiment',
        '*default': 'defaultRoute'
    },

    initialize: function (options) {
        this.app = options.app;
        this.app.render();
        this.currentPage = null;
        eventBus.on('router:navigate', this.navigate, this);
    },

    getPosts: function (name) {
        this.destroyCurrentView();
        var postsView = new PostsView();
        this.app.addAppAndRenderIt(postsView, name);
        this.currentPage = postsView;
    },

    getPost: function (name) {
        if (this.currentPage instanceof PostsView) {
            this.currentPage.setPostAndRenderPostView(name);
        } else {
            this.destroyCurrentView();
            this.getPosts(name);
        }
    },

    getAbout: function () {
        this._makePageView({
            type: 'about'
        });
    },

    getContact: function () {
        this._makePageView({
            type: 'contact'
        });
    },

    getExperiments: function () {

    },

    getExperiment: function (name) {

    },

    defaultRoute: function () {
        this._makePageView({
            type: 'home'
        });
    },

    destroyCurrentView: function () {
        if (this.currentPage) {
            this.app.closeChildViewsAndRender();
            this.currentPage = null;
        }
    },

    _makePageView: function (options) {
        this.destroyCurrentView();
        var pageView = new PageView(options);
        this.app.addAppAndRenderIt(pageView);
        this.currentPage = pageView;
    }
});

router = new Router({
    app: new AppView({
        navigationView: new NavigationView()
    })
});
Backbone.history.start();
module.exports = router;
