'use strict';
var MultiView = require('./MultiView');

var AppView = MultiView.extend({
    el: '#app',

    initialize: function (options) {
        MultiView.prototype.initialize.call(this);
        this.navigationView = options.navigationView;
        this.subViews.push(this.navigationView);
    },

    render: function () {
        this.$el.empty();
        this.$el.append(this.navigationView.$el);
        this.navigationView.render();
        return this;
    },

    /**
     *
     * @param subView - the sub view to add
     * @param argz - Arguments passed to the sub app's render method
     * @returns {AppView}
     */
    addAppAndRenderIt: function (subView, argz) {
        this.subViews.push(subView);
        this.$el.append(subView.$el);
        subView.render(argz);
        return this;
    },

    closeChildViews: function () {
        var subViews = this.subViews;

        //do not want to remove navigation view
        for (var i = subViews.length - 1; i >= 1; i--) {
            var view = subViews[i];
            if (view.close) {
                view.close();
            }
        }

        return this;
    },

    closeChildViewsAndRender: function () {
        this.closeChildViews()
            .render();
    }

});

module.exports = AppView;