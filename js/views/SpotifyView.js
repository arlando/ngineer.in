'use strict';

var StaticContentView = require('./StaticContentView');
var SpotifyTracksView = require ('./SpotifyTracksView');
var SpotifyPlayerView = require('./SpotifyPlayerView');
var SpotifyTrackModel = require('../models/SpotifyTrackModel');
var spotifySongs = require('../data/spotifySongs');
var Backbone = require('backbone');
var SpotifyView;


SpotifyView = StaticContentView.extend({
    className: 'spotify',

    initialize: function (options) {
        StaticContentView.prototype.initialize.call(this, options);
        var collection = new Backbone.Collection(spotifySongs, { model: SpotifyTrackModel });
        this.tracksView = new SpotifyTracksView({
            collection: collection
        });

        this.playerView = new SpotifyPlayerView({
            model: collection.at(0)
        });
    },

    render: function () {
        StaticContentView.prototype.render.call(this, arguments);

        var fragment = document.createDocumentFragment();

        this.tracksView.render();
        this.playerView.render();

        fragment.appendChild(this.tracksView.el);
        fragment.appendChild(this.playerView.el);
        this.$el.find('.scv-content').append(fragment);

        return this;
    }
});

module.exports = SpotifyView;