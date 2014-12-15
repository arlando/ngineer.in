/**
 * Created by Arlando Battle on 12/15/14.
 */

'use strict';

var PIXI = require('./lib/pixi');

var stage = new PIXI.Stage(0x390000);

// create a renderer instance
var renderer = new PIXI.WebGLRenderer(400, 300);//autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

var container = new PIXI.SpriteBatch();
stage.addChild(container);
var texture = new PIXI.Texture.fromImage("pixel.png");

for (var i = 0; i < 50; i++) {
    var sprite = new PIXI.Sprite(texture);
    sprite.position.x = (Math.random() * 20) * 2;
    sprite.position.y = i * 2;
    container.addChild(sprite);
}

function animate() {

    requestAnimationFrame( animate );

    // just for fun, lets rotate mr rabbit a littl

    // render the stage
    renderer.render(stage);
}
