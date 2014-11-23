'use strict';

var Backbone = require('backbone');
var template = require('../templates/spotify-player.handlebars');
var EventBus = require('../meta/EventBus');
var SpotifyPlayerView;

SpotifyPlayerView = Backbone.View.extend({
    className: 'spotify-player',

    initialize: function (options) {
        options = options || {};
        this.model = options.model;
        EventBus.on('spotify:change-track', this.setModelAndRender, this);
    },

    setModelAndRender: function (model) {
        this.model = model;
        this.render();
    },

    loaded: function () {
        this.$el.removeClass('overlay');
    },

    render: function () {
        var self = this;
        this.$el.html(template(this.model.toJSON()));


        //bind this function so we know when its rendered
        this.$el.addClass('overlay');
        this.$el.find('#spotify-player-iframe').load( function() {
            self.loaded();
        });
        return this;
    }
});

module.exports = SpotifyPlayerView;