/**
 * Created by Arlando Battle on 11/22/14.
 */

'use strict';

var Backbone = require('backbone');
var template = require('../templates/spotify-track.handlebars');
var SpotifyTrackView;

SpotifyTrackView = Backbone.View.extend({
    tagName: 'li',
    className: 'spotify-track',

    initialize: function (options) {
        options = options || {};
        this.model = options.model;
    },

    render: function () {
        this.$el.html(template(this.model.toJSON()));
        this.$el.attr('data-track-id', this.model.cid);
        return this;
    }
});

module.exports = SpotifyTrackView;