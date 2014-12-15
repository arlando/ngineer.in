/**
 * Created by Arlando Battle on 12/14/14.
 */

'use strict';

var THREE = require('three');
require('./libs/EffectComposer');
require('./libs/RenderPass');
require('./libs/ShaderPass');
require('./libs/MaskPass');
require('./libs/CopyShader');
require('./libs/KaleidoShader');

var camera, scene, renderer;
var rgbParams, rgbPass;
var kaleidoParams, kaleidoPass;
var composer;
var cubeHolder;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 20, 3000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    //init object to hold cubes and rotate
    cubeHolder = new THREE.Object3D();
    scene.add(cubeHolder);

    //add light
    var light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(1000, 1000, 1000);
    scene.add(light);

    //use lambert material to get greyscale shadows
    var material = new THREE.MeshLambertMaterial();

    //create cubes
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var spread = 2000;
    for(var j = 0; j < 100; j++) {
        var cube = new THREE.Mesh(geometry, material);
        //randomize size, posn + rotation
        cube.scale.x = cube.scale.y = cube.scale.z = Math.random() * 3 + .05;
        cubeHolder.add(cube);
        cube.position.x = Math.random() * spread - spread / 2;
        cube.position.y = Math.random() * spread - spread / 2;
        cube.position.z = Math.random() * spread - spread / 2;
        cube.rotation.x = Math.random() * 2 * Math.PI - Math.PI;
        cube.rotation.y = Math.random() * 2 * Math.PI - Math.PI;
        cube.rotation.z = Math.random() * 2 * Math.PI - Math.PI;
    }

    //init renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    //POST PROCESSING
    //Create Shader Passes
    //render pass renders scene into effects composer
    var renderPass = new THREE.RenderPass( scene, camera );
    kaleidoPass = new THREE.ShaderPass( THREE.KaleidoShader );

    //Add Shader Passes to Composer
    //order is important
    composer = new THREE.EffectComposer( renderer );
    composer.addPass( renderPass );
    composer.addPass( kaleidoPass );

    //set last pass in composer chain to renderToScreen
    kaleidoParams = {
        sides: 12,
        angle: 0.0
    };
}

function animate() {
    requestAnimationFrame( animate );
    cubeHolder.rotation.y -= 0.01;
    cubeHolder.rotation.x += 0.005;
    composer.render( 0.1 );
}
