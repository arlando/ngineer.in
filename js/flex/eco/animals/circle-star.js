/**
 * Created by Arlando Battle on 1/18/15.
 */
'use strict';
var Animal = require('./Animal');
var CircleStar;

CircleStar.prototype = new Animal();
CircleStar.prototype.constructor = CircleStar;

function CircleStar() {
    this.container = new PIXI.Graphics();
}

CircleStar.prototype.draw = function (x, y) {
    var circle = new PIXI.Graphics();
    this.x = x;
    this.y = y;
    circle.lineStyle(1, 0xFFFFFF, 1);
    circle.drawCircle(x, y, 5);
    this.makeLines();
    this.container.addChild(circle);
};

CircleStar.prototype.makeLines = function () {
    var line = new PIXI.Graphics();

};

CircleStar.prototype.initialize = function () {

};

module.exports = CircleStar;