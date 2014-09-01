'use strict';
var Backbone = require('backbone');
var PageModel = require('../models/PageModel');
var data = require('../data/pages.json');
var PageCollection;
var pageCollection;

PageCollection = Backbone.Collection.extend({
    model: PageModel
});

pageCollection = new PageCollection(data);
module.exports = pageCollection;