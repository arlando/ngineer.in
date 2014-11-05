'use strict';
var Backbone = require('backbone');
var Post;

Post = Backbone.Model.extend({
    initialize: function (options) {
        options = options || {};
        if (options.url) this.set('urlName', options.url.trim().toLowerCase().replace(/ /g, '-'));
    }
});

module.exports = Post;