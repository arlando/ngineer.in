//var Cube = require('./cube');
var Circle = require('./shapes/DumbAgents');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
});
renderer.autoClearColor = false;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var circle = new Circle(scene);


camera.position.z = 5;
var tick = 0;
var render = function () {
    requestAnimationFrame( render );
    circle.update();
    renderer.render(scene, camera);
    tick++;
};

render();