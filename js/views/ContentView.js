/**
 * Created by Arlando Battle on 11/11/14.
 */
'use strict';

var Backbone = require('backbone');
var ContentView;

ContentView = Backbone.View.extend({

    constructor: function () {
        this.VIEW_STATE = 'closed';
        Backbone.View.apply(this, arguments);
    },

    STATES: {
        'closed': 'closed',
        'open': 'open'
    },

    events: {
        'click .scv-open-closed-state': 'toggleOpenClosedState'
    },

    initialize: function (options) {
        options = options || {};

        this.model = options.model;
    },

    toggleOpenClosedState: function (e) {
        e.preventDefault();
        if (this.getCurrentState() === 'closed') this.open();
        else this.close();
    },

    open: function () {
        this.handleState('open');
    },

    close: function () {
        this.handleState('closed');
    },

    handleState: function (state) {
        this.setCurrentState(state);
        this.changeOpenCloseSymbol();
        this.showOrCloseContent();
    },

    changeOpenCloseSymbol: function () {
        this.$openClosedStateSymbol = this.$openClosedStateSymbol || this.$el.find('.scv-open-closed-state');
        if (this.VIEW_STATE === 'closed') this.$openClosedStateSymbol.html('+');
        else this.$openClosedStateSymbol.html('x')
    },

    showOrCloseContent: function () {
        this.$scvContent = this.$scvContent || this.$el.find('.scv-content');
        this.$scvContent.toggleClass('is-closed');
        this.$scvContent.toggleClass('is-open');
    },

    setCurrentState: function (state) {
        state = this.STATES[state];

        if (!state) {
            state = this.getCurrentState();
            state = (state === 'closed') ? 'open' : 'closed';
        }
        this.VIEW_STATE = this.STATES[state]
    },

    getCurrentState: function () {
        return this.VIEW_STATE;
    }
}); //try putting class props here

module.exports = ContentView;