'use strict';
var Backbone = require('backbone');
var template = require('../../templates/post.handlebars');
var PostView;

PostView = Backbone.View.extend({
    className: 'post',

    initialize: function (options) {
        if (options) {
            this.model = options.model;
        }

    },

    render: function () {
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
});

module.exports = PostView;