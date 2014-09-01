'use strict';

var MultiView = require('./MultiView');
var data = require('../data/nav.json');
var NavigationLinkView = require('./NavigationLinkView');

var NavigationView = MultiView.extend({
    className: 'navigation',

    render: function() {
        var fragment = document.createDocumentFragment();
        var LinkView = NavigationLinkView;
        for (var i = data.length - 1; i >= 0; i--) {
            var linkView = new LinkView({
                data: data[i]
            });
            this.subViews.push(linkView);
            fragment.appendChild(linkView.render().el);
        }
        this.$el.html(fragment);
        return this;
    }
});
module.exports = NavigationView;
