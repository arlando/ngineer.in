'use strict';

var Backbone =  require('backbone');

var AppView = Backbone.View.extend({
    el: '#app',

    initialize: function (options) {
        options = options || {};
        this.collection = options.collection;
        this.SingleContentView = options.SingleContentView;
        this.MultiContentView = options.MultiContentView;
    },

    render: function () {
        var fragment = document.createDocumentFragment();
        var size = this.collection.size();

        for (var i = 0; i < size; i++) {
            var model = this.collection.at(i);
            var type = model.get('type');
            var view;

            if (type === 'SINGLE_CONTENT_VIEW') {
                view = new this.SingleContentView({ model: model });
            } else {
                view = new this.MultiContentView({ model: model });
            }

            fragment.appendChild(view.el);
            view.render();
        }

        this.$el.append(fragment);
        return this;
    }
});

module.exports = AppView;