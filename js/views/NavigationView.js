'use strict';

var MultiView = require('./MultiView');
var data = require('../data/nav.json');
var template = require('../templates/navigation.handlebars');
var NavigationLinkView = require('./NavigationLinkView');

var NavigationView = MultiView.extend({
    className: 'navigation',

    cache: {},

    render: function () {
        var fragment = document.createDocumentFragment();
        var LinkView = NavigationLinkView;
        var size = data.length;

        for (var i = size - 1; i >= 0; i--) {
            var link = data[i];
            var linkView = new LinkView({
                data: link
            });

            this.subViews.push(linkView);
            fragment.appendChild(linkView.render().el);
        }
        this.$el.html(template());
        this.$el.find('ul').html(fragment);
        return this;
    }
});

module.exports = NavigationView;