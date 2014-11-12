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
        this.setCurrentState('open');
    },

    close: function () {
        this.setCurrentState('closed');
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
    },

    render: function () {
        return this;
    }
}); //try putting class props here

module.exports = ContentView;