/**
 * Created by Arlando Battle on 11/22/14.
 */

'use strict';

var Backbone = require('backbone');
var SpotifyTrackModel;

SpotifyTrackModel = Backbone.Model.extend({
    defaults: {
        title: 'need to set a title',
        uri: '4bz7uB4edifWKJXSDxwHcs',
        artist: 'need to set an artist',
        playing: false
    },

    isPlaying: function () {
        return this.get('playing');
    },

    togglePlaying: function () {
        return this.set('playing', !this.isPlaying());
    }
});

module.exports = SpotifyTrackModel;