'use strict';
var Backbone = require('backbone');
var template = require('../../templates/postlink.handlebars');

var PostLinkView = Backbone.View.extend({
    tagName: 'li',
    className: 'post-link',
    initialize: function (options) {
        this.model = options.model;
    },

    render: function () {
        this.$el.html(template(this.model.pick('title', 'urlName')));
        return this;
    }
});

module.exports = PostLinkView;