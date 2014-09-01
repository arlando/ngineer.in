'use strict';
var MultiView = require('../MultiView');
var PostLinkView = require('./PostLinkView');

var PostLinksView = MultiView.extend({
    className: 'post-links',
    tagName: 'ul',

    initialize: function (options) {
        MultiView.prototype.initialize.call(this);
        this.collection = options.collection;
    },

    render: function () {
        var fragment = document.createDocumentFragment();
        var collection = this.collection;

        for(var i = 0, len = collection.size(); i < len; i++) {
            var postLinkView = new PostLinkView({
                model: collection.at(i)
            });
            fragment.appendChild(postLinkView.render().el);
            this.subViews.push(postLinkView);
        }

        this.$el.html(fragment);
        return this;
    }
});

module.exports = PostLinksView;