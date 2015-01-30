/**
 * Created by Arlando Battle on 12/15/14.
 * an animation of lines and circles
 */

'use strict';
var myDisplayResolution = window.devicePixelRatio;

// create an options object and include our resolution
var renderOptions = {
    resolution : myDisplayResolution,
    antialias: true
};

var CONSTANTS = {
    MAX_NUM_CIRCLES: 24,
    CIRCLE_X_AMPLITUDE: 50,
    CIRCLE_X_VERTICAL_TRANSLATION: 200,
    CIRCLE_X_PHASE_SHIFT: 8,
    CIRCLE_X_NOISE: 0,
    CIRCLE_Y_AMPLITUDE: 50,
    CIRCLE_Y_VERTICAL_TRANSLATION: 100,
    CIRCLE_Y_PHASE_SHIFT: 4,
    CIRCLE_Y_NOISE: 0,
    CIRCLE_LINE_WIDTH: 1,
    CIRCLE_ALPHA: 1,
    CIRCLE_RADIUS: 1,
    LINE_ALPHA: 1,
    LINE_LINE_WIDTH: 1,
    DRAW_CIRCLE_INTERVAL: 4 //draw a circle every four circles
};

var stage = new PIXI.Stage(0x000000);

// create a renderer instance
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, renderOptions);//autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame(animate);

var tick = .1;
var circleGroupManager = [];

function CircleGroup() {
    this.container = new PIXI.SpriteBatch();
    this.lines = new PIXI.Graphics();
    this.circles = new PIXI.Graphics();
    this.prevX = void 0;
    this.prevY = void 0;
    stage.addChild(this.container);
}

function initializeCircleGroups() {

}

function initializeCircles(aCircleGroup) {
    for (var i = 0; i < CONSTANTS.MAX_NUM_CIRCLES; i++) makeCircle(aCircleGroup);
    stage.addChild(aCircleGroup.lines);
    stage.addChild(aCircleGroup.circles);
}

function addCircleGroup() {
    var circleGroup = new CircleGroup();
    circleGroup.seed = Math.random() * 100;
    circleGroup.reversed = (Math.random() > .5) ? -1 : 1;
    initializeCircles(circleGroup);
    circleGroupManager.push(circleGroup);
}

function addCircle(aCircleGroup) {
    if (aCircleGroup.circles.children.length < CONSTANTS.MAX_NUM_CIRCLES) {
        makeCircle(aCircleGroup)
    } else {
//        var REMOVE_FIRST_OR_LAST = 1;
//        circles.removeChildAt((REMOVE_FIRST_OR_LAST) ? circles.children.length - 1 : 0);
//        lines.removeChildAt((REMOVE_FIRST_OR_LAST) ? lines.children.length - 1 : 0);
        aCircleGroup.circles.removeChildAt(0);
        aCircleGroup.lines.removeChildAt(0);
    }
}


function initializeDATGui() {
    var gui = new dat.GUI();
    gui.add(CONSTANTS, 'MAX_NUM_CIRCLES', 0, 1000).name('max circles');
    gui.add(CONSTANTS, 'CIRCLE_X_AMPLITUDE', -200, 200, 5).name('x amp');
    gui.add(CONSTANTS, 'CIRCLE_X_VERTICAL_TRANSLATION').name('x vert trans');
    gui.add(CONSTANTS, 'CIRCLE_X_PHASE_SHIFT').name('x phase shift');
    gui.add(CONSTANTS, 'CIRCLE_X_NOISE', -50, 50).name('x noise');
    gui.add(CONSTANTS, 'CIRCLE_Y_AMPLITUDE', -200, 200, 5).name('y amp');
    gui.add(CONSTANTS, 'CIRCLE_Y_VERTICAL_TRANSLATION').name('y vert trans');
    gui.add(CONSTANTS, 'CIRCLE_Y_PHASE_SHIFT', -20, 20).name('y phase shift');
    gui.add(CONSTANTS, 'CIRCLE_Y_NOISE', -50, 50).name('y noise');
    gui.add(CONSTANTS, 'CIRCLE_LINE_WIDTH', 0, 100, 5).name('circle line width');
    gui.add(CONSTANTS, 'CIRCLE_ALPHA', 0, 1, .01).name('circle alpha');
    gui.add(CONSTANTS, 'CIRCLE_RADIUS', 1, 20, 1).name('circle radius');
    gui.add(CONSTANTS, 'LINE_LINE_WIDTH', 0, 100, 5).name('line line width');
    gui.add(CONSTANTS, 'LINE_ALPHA', 0, 1, .01).name('line alpha');
}

var called = 0;
function makeCircle(circleGroup) {
    called++;
    var x;
    var y;
    var circle = new PIXI.Graphics();

    circle.lineStyle(CONSTANTS.CIRCLE_LINE_WIDTH, 0xFFFFFF, CONSTANTS.CIRCLE_ALPHA);
    x = circleGroup.reversed * (Math.cos(tick / CONSTANTS.CIRCLE_X_PHASE_SHIFT) * CONSTANTS.CIRCLE_X_AMPLITUDE) + CONSTANTS.CIRCLE_X_VERTICAL_TRANSLATION + (Math.random() * CONSTANTS.CIRCLE_X_NOISE) + circleGroup.seed;
    y = circleGroup.reversed * (Math.sin(tick / CONSTANTS.CIRCLE_Y_PHASE_SHIFT) * CONSTANTS.CIRCLE_Y_AMPLITUDE) + CONSTANTS.CIRCLE_Y_VERTICAL_TRANSLATION + (Math.random() * CONSTANTS.CIRCLE_Y_NOISE) + circleGroup.seed;
    if (called % CONSTANTS.DRAW_CIRCLE_INTERVAL === 0) circle.drawCircle(x, y, CONSTANTS.CIRCLE_RADIUS);
    drawLineFromPrev(x, y, circleGroup);
    circleGroup.circles.addChild(circle);
    tick += .5;
}

function drawLineFromPrev(x, y, circleGroup) {
    var prevX = circleGroup.prevX;
    var prevY = circleGroup.prevY;

    if (prevX && prevY) {
        var line = new PIXI.Graphics();

        line.lineStyle(CONSTANTS.LINE_LINE_WIDTH, 0xFFFFFF, CONSTANTS.LINE_ALPHA);
        line.moveTo(prevX, prevY);
        line.lineTo(x, y);
        circleGroup.lines.addChild(line);
    }

    circleGroup.prevX = x;
    circleGroup.prevY = y;
}

function animate() {
    var numberOfCircleGroups = circleGroupManager.length;

    for (var i = 0; i < numberOfCircleGroups; i++) {
        var circleGroup = circleGroupManager[i];
        addCircle(circleGroup);
    }

    requestAnimationFrame( animate );

    // render the stage
    renderer.render(stage);
}


addCircleGroup();
addCircleGroup();
addCircleGroup();
addCircleGroup();
addCircleGroup();

initializeDATGui();