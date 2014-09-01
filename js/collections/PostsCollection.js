'use strict';
var Backbone = require('backbone');
var PostModel = require('../models/PostModel');
var data = require('../data/posts.json');
var PostsCollection;

PostsCollection = Backbone.Collection.extend({
    model: PostModel
});

//singleton
var posts = new PostsCollection(data);
module.exports = posts;