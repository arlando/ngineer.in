/**
 * Created by Arlando Battle on 1/18/15.
 */
'use strict';

function Animal() {}

Animal.prototype = {
    addToStage: function (stage) {
        stage.addChild(this.container);
    },

    draw: function () {

    },

    make: function () {

    }
};

module.exports = Animal;