/**
 * Created by Arlando Battle on 11/11/14.
 */
'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var Modernizr = require('../helpers/transitionEnd');
var transEndEventNames = require('../helpers/transEndEventNames');
var transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )];
var support = { transitions : Modernizr.csstransitions };
var ContentView;

ContentView = Backbone.View.extend({

    className: 'content',

    constructor: function () {
        this.expanded = false;
        this.isAnimating = false;
        Backbone.View.apply(this, arguments);
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

        this.elH = this.elH || this.$el.find('.scv')[0].offsetHeight;
        this.contentEl = this.contentEl || this.$el.find('.scv-content');

        if (this.isAnimating) return false;

        if (!this.expanded) this.$el.addClass('active');

        var self = this;
        var onEndTransitionFn = function (e) {
//            debugger;
            //if (e.target !== this) return false;
            self.isAnimating = false;
            self.expanded = !self.expanded;
        };

//        debugger;
        //this.el.addEventListener(transEndEventName, );
//        this.$el.on('transitionend', onEndTransitionFn);
        onEndTransitionFn();

        var height = this.expanded ? + 30 + this.elH + 'px' : 30 + this.contentEl[0].offsetHeight + 'px';
        this.$el.find('.scv').css('height', height);


        if (this.expanded) this.$el.removeClass('open');
        else this.$el.addClass('open');

        this.changeOpenCloseSymbol();
        //if (this.getCurrentState() === false) this.open();
        //else this.close();
    },

    handleState: function () {
        this.expanded = !this.expanded;
        this.changeOpenCloseSymbol();
        this.showOrCloseContent();
    },

    changeOpenCloseSymbol: function () {
        this.$openClosedStateSymbol = this.$openClosedStateSymbol || this.$el.find('.scv-open-closed-state');
        if (this.expanded === false) this.$openClosedStateSymbol.html('+');
        else this.$openClosedStateSymbol.html('x')
    },

    showOrCloseContent: function () {
        this.$scvContent = this.$scvContent || this.$el.find('.scv-content');
        this.$scvContent.toggleClass('is-closed');
        this.$scvContent.toggleClass('is-open');
    },

    transitionIn: function (callback) {
        var self = this;

        var animateIn = function () {
            self.$el.addClass('is-visible');
            self.$el.one('transitionend', function () {
                if (callback) callback();
            });
        };

        _.delay(animateIn, 20);
    },

    transitionOut: function (callback) {
        var self = this;

        self.$el.removeClass('is-visible');
        self.$el.one('transitionend', function () {
           if (callback) callback();
        });
    },
}); //try putting class props here

module.exports = ContentView;