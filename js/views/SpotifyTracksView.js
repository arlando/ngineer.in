'use strict';

var Backbone = require('backbone');
var SpotifyTrackView = require('./SpotifyTrackView');
var EventBus = require('../meta/EventBus');
var SpotifyTracksView;

SpotifyTracksView = Backbone.View.extend({
    tagName: 'ul',
    className: 'spotify-tracks',

    events: {
        'click li': 'changeCurrentTrack'
    },

    initialize: function (options) {
        options = options || {};
        this.collection = options.collection || [];
        this.currentTrack = (this.collection) ? this.collection.first() : undefined;
    },

    render: function () {
        var fragment = document.createDocumentFragment();
        var size = this.collection.length;

        for (var i = 0; i < size; i++) {
            var model = this.collection.at(i);
            var view = new SpotifyTrackView({ model: model});

            fragment.appendChild(view.el);
            view.render();
        }
        this.$el.append(fragment);
        return this;
    },

    changeCurrentTrack: function (e) {
        //todo handle case where e is an id in the collection
        e.preventDefault();
        e.stopPropagation();
        var trackid = e.currentTarget.getAttribute('data-track-id');
        var track = this.collection.get(trackid);
        this._swapAndChangeTrack(track);
    },

    _swapAndChangeTrack: function (track) {
        if (!track.isPlaying()) {
            this.currentTrack.togglePlaying();
            track.togglePlaying();
            this.currentTrack = track;
            EventBus.trigger('spotify:change-track', track);
        }
    }
});

module.exports = SpotifyTracksView;