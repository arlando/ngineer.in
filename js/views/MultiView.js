/**
 * A view with subviews...
 */

'use strict';
var Backbone = require('backbone');
var MultiView;

MultiView = Backbone.View.extend({
    initialize: function () {
        this.subViews = [];
    },

    render: function () {
        this.$el.empty();
        return this;
    },

    close: function () {
        this.closeChildViews();
        this.remove();
        this.unbind();
        this.render();
    },

    closeChildViews: function () {
        var subViews = this.subViews;
        for (var i = subViews.length - 1; i >= 0; i--) {
            var view = subViews[i];
            if (view instanceof MultiView) {
                view.close();
            } else {
                view.remove();
            }
        }
    }
});

module.exports = MultiView;