'use strict';
var Backbone = require('backbone');
var template = require('../templates/navigation-item.handlebars');
var $ = require('jquery');
var eventBus = require('../meta/EventBus');

var NavigationLinkView = Backbone.View.extend({
    className: 'navigation-link',

    initialize: function (options) {
        options = options || {};
        this.data = options.data || {};
        this.data.urlName = this.data.url.trim().toLowerCase().replace(' ', '-');
    },

    events: {
        'click': 'gotoLink'
    },

    gotoLink: function (e) {
        e.preventDefault();
        var $e = $(e.currentTarget);
        var route = $e.find('svg').attr('data-route');
        eventBus.trigger('router:navigate', route, {trigger: true});
    },

    render: function () {
        this.$el.html(template(this.data));
        return this;
    }
});

module.exports = NavigationLinkView;