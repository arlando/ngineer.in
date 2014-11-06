'use strict';
var Backbone = require('backbone');
var template = require('../templates/navigation-item.handlebars');

var NavigationLinkView = Backbone.View.extend({
    className: 'navigation-link',

    initialize: function (options) {
        options = options || {};
        this.data = options.data || {};
        this.data.urlName = this.data.url.trim().toLowerCase().replace(' ', '-');
    },

    render: function () {
        this.$el.html(template(this.data));
        return this;
    }
});

module.exports = NavigationLinkView;