'use strict';
var Backbone = require('backbone');
var Post;

Post = Backbone.Model.extend({
    initialize: function (options) {
        if (options) {
            this.set('urlName', options.url.trim().toLowerCase().replace(/ /g, '-'));
        }
    }
});

module.exports = Post;