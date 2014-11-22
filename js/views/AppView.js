'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var AppView = Backbone.View.extend({
    el: '#app',

    initialize: function (options) {
        options = options || {};
        this.collection = options.collection;
        this.VIEWS = _.extend({}, options.VIEWS);
    },

    render: function () {
        var fragment = document.createDocumentFragment();
        var size = this.collection.size();

        for (var i = 0; i < size; i++) {
            var model = this.collection.at(i);
            var type = model.get('type');
            var View;
            var view;

            View = this._createNewView(type);
            view = new View({ model: model });

            fragment.appendChild(view.el);
            view.render();
        }

        this.$el.append(fragment);
        return this;
    },

    _createNewView: function (type) {
        var view;

        if (type) {
            view = this.VIEWS[type];
            if (view) return view;
            throw new Error('Could not find view type: ' + type);
        }
        throw new Error('type was null');
    }
});

module.exports = AppView;