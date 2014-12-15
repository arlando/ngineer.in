/**
 * Created by Arlando Battle on 11/9/14.
 */
'use strict';

var ContentView = require('./ContentView');
var template = require('../templates/staticcontentview.handlebars');
var StaticContentView;

StaticContentView = ContentView.extend({
    initialize: function (options) {
        options = options || {};
        this.template = options.template || template;
        ContentView.prototype.initialize.apply(this, arguments);
    },

    render: function () {
        this.$el.append(this.template(this.model.toJSON()));
        this.transitionIn();
        return this;
    }
});

module.exports = StaticContentView;