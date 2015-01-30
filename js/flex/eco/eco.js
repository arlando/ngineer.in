/**
 * Created by Arlando Battle on 1/18/15.
 */
//Initializes the eco system
'use strict';
var CircleStar = require('./animals/circle-star');
var myDisplayResolution = window.devicePixelRatio;
var renderOptions = {
    resolution : myDisplayResolution,
    antialias: true
};
var stage = new PIXI.Stage(0x000000);
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, renderOptions);
document.body.appendChild(renderer.view);
var container = new PIXI.SpriteBatch();
stage.addChild(container);
requestAnimationFrame(animate);

var cs = new CircleStar();

function initializeDATGui() {
    var gui = new dat.GUI();
}

function animate() {
    requestAnimationFrame( animate );
    cs.draw(20, 20);
    // render the stage
    renderer.render(stage);
}

cs.addToStage(stage);
initializeDATGui();