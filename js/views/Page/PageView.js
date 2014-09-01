'use strict';
var Backbone = require('backbone');
var template = require('../../templates/page.handlebars');
var pageCollection = require('../../collections/pageCollection');
var PageView;

PageView = Backbone.View.extend({
    className: 'page-view',

    initialize: function (options) {
        if (options) {

            var type = options.type;
            for (var i = pageCollection.size() - 1; i >= 0; i--) {
                var page = pageCollection.at(i);
                if (page.get('type') === type) {
                    this.model = page;
                    break;
                }
            }

        }
    },

    render: function () {
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
});

module.exports = PageView;