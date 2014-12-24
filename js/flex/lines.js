/**
 * Created by Arlando Battle on 12/15/14.
 */

'use strict';

var stage = new PIXI.Stage(0x000000);

// create a renderer instance
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: true});//autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

var container = new PIXI.SpriteBatch();
stage.addChild(container);
var prevX;
var prevY;
var lines = new PIXI.Graphics();
var circles = new PIXI.Graphics();

var called = 1;
var MAX_NUM_SPRITES = 100;
var NUM_SPRITES = 0;

var MAX_NUM_CIRCLES = 8;
var NUM_CIRCLES = 0;

function addSprites() {
    for (var i = 0; i < MAX_NUM_SPRITES; i++) {
        var x;
        var y;
        var sprite = new PIXI.Sprite.fromImage('pixel.png');
        sprite.position.x = x = (Math.random() * window.innerWidth) * .5;
        sprite.position.y = y = (Math.random() * window.innerHeight) * .5;
        var randomScale = (Math.random() * 10) + 1;
        sprite.scale.x = randomScale;
        sprite.scale.y = randomScale;
        container.addChild(sprite);
        container.alpha = .5;
        drawLineFromPrev(x, y);
    }
    stage.addChild(lines);
}
function addSprite() {
    if (NUM_SPRITES < MAX_NUM_SPRITES) {
        var sprite = makeSprite();
        drawLineFromPrev(sprite.position.x, sprite.position.y);
        stage.addChild(sprite);
        NUM_SPRITES++;
    } else {
        called = 1;
        container.removeChildAt(0);
        container.removeChildAt(1);
        container.removeChildAt(2);
        lines.removeChildAt(0);
        lines.removeChildAt(1);
        lines.removeChildAt(2);
        NUM_SPRITES--;
        NUM_SPRITES--;
        NUM_SPRITES--;
    }
}

function addCircles() {
    for (var i = 0; i < MAX_NUM_CIRCLES; i++) makeCircle(circles);
    stage.addChild(lines);
    stage.addChild(circles);
}

function addCircle() {
    if (NUM_CIRCLES < MAX_NUM_CIRCLES) {
        makeCircle(circles)
    } else {
        called = 1;
        var REMOVE_FIRST_OR_LAST = (Math.random() >.5);
        circles.removeChildAt((REMOVE_FIRST_OR_LAST) ? circles.children.length - 1 : 0);
        lines.removeChildAt((REMOVE_FIRST_OR_LAST) ? lines.children.length - 1 : 0);
        NUM_CIRCLES--;
    }
}

function makeCircle(container) {
    var x;
    var y;
    var circle = new PIXI.Graphics();
    circle.lineStyle(1, 0xFFFFFF, 1);
    x = (Math.random() * window.innerWidth) * .5;
    y = (Math.random() * window.innerHeight) * .5;
    circle.drawCircle(x, y, 5);
    drawLineFromPrev(x, y);
    container.addChild(circle);
    NUM_CIRCLES++;
}

//addSprites();
addCircles();


function drawLineFromPrev(x, y) {
    if (prevX && prevY) {
        var line = new PIXI.Graphics();
//        graphics.beginFill(0xFF700B, 1);
        line.lineStyle(1, 0xFFFFFF, 1);
        line.moveTo(prevX, prevY);
        line.lineTo(x, y);
//        graphics.endFill();
        called += .1;
        lines.addChild(line);

    }
    prevX = x;
    prevY = y;
}

function makeSprite() {
    var sprite = new PIXI.Sprite.fromImage('pixel.png');
    sprite.position.x = (Math.random() * window.innerWidth) * .5;
    sprite.position.y = (Math.random() * window.innerHeight) * .5;
    var randomScale = (Math.random() * 10) + 1;
    sprite.scale.x = randomScale;
    sprite.scale.y = randomScale;
    container.addChild(sprite);

    return sprite;
}

function animate() {
    addCircle();
    requestAnimationFrame( animate );

    // render the stage
    renderer.render(stage);
}
