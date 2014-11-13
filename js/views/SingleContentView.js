/**
 * Created by Arlando Battle on 11/9/14.
 */
'use strict';

var ContentView = require('./ContentView');
var template = require('../templates/singlecontentview.handlebars');
var eventBus = require('../meta/EventBus');
var SingleContentView;

SingleContentView = ContentView.extend({
    render: function () {
        this.$el.append(template(this.model.toJSON()));
        return this;
    }
});

module.exports = SingleContentView;