/**
 * Created by Arlando Battle on 12/14/14.
 */
'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var Kaleidoscope;

Kaleidoscope = Backbone.View.extend({
    el: '#app',

    initialize: function (options) {
        options = options || {};
        this.VIEWS = _.extend({}, options.VIEWS);
    }
});

module.exports = Kaleidoscope;