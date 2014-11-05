//Manages the view for posts

'use strict';
var template = require('../../templates/posts.handlebars');
var PostLinksView = require('./PostLinksView');
var postsCollection = require('../../collections/postsCollection');
var PostView = require('./PostView');
var MultiView = require('../MultiView');

var PostsView = MultiView.extend({
    className: 'page posts-view',

    initialize: function () {
        MultiView.prototype.initialize.call(this);
        this.collection = postsCollection;
        this.currentPost = null;
    },

    render: function (name) {
        var elt = this.$el;

        this.renderPostLinksView();
        this.setPostAndRenderPostView(name);
        elt.append(this.postView.el);
        return this;
    },

    renderPostLinksView: function () {
        var postLinksView;
        var collection = this.collection;
        var elt = this.$el;

        postLinksView = new PostLinksView({
            collection: collection
        });
        postLinksView.render();
        elt.append(postLinksView.el);
        this.subViews.push(postLinksView);
    },

    _renderPostView: function () {
        var postView = this.postView;
        if (postView) {

            postView.model = this.currentPost;

        } else {
            this.postView = new PostView({
                model: this.currentPost
            });
            this.subViews.push(this.postView);
        }
        this.postView.render();
        return this;
    },

    /**
     * Sets the current post to one if we find it, then renders it.
     * @param name - urlName of a post we want to find and render.
     */
    setPostAndRenderPostView: function (name) {
        this._setPost(name)
            ._renderPostView();
    },

    _setPost: function (name) {
        var collection = this.collection;

        if (name) {
            var found = false;
            for (var i = 0, len = collection.size(); i < len; i++) {
                var model = collection.at(i);
                if (name === model.get('urlName')) {
                    found = true;
                    this.currentPost = model;
                }
            }

            //Did not find anything
            if (!found) {
                this.currentPost = null;
            }

        } else {
            //no name, assume the default view.
            this.currentPost = collection.at(0);
        }
        return this;
    }
});

module.exports = PostsView;