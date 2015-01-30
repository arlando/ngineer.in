(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/abattle/sideprojects/ngineer.in/js/kaboo-webgl/kaboo.js":[function(require,module,exports){
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
},{"./shapes/DumbAgents":"/Users/abattle/sideprojects/ngineer.in/js/kaboo-webgl/shapes/DumbAgents.js"}],"/Users/abattle/sideprojects/ngineer.in/js/kaboo-webgl/shapes/DumbAgents.js":[function(require,module,exports){
/**
 * Created by Arlando Battle on 1/28/15.
 */
'use strict';

var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;

var options = {
    STEP_SIZE: .03,
    DIAMETER: 1,
    NUMBER_OF_AGENTS: 10
};

function DumbAgents(scene) {
    var number_of_agents = options.NUMBER_OF_AGENTS;

    this.particles = new THREE.Geometry();
    this.pMaterial = new THREE.PointCloudMaterial({
        color: 0xFFFFFF,
        size: .01
    });
    return this.initialize(scene);
}

DumbAgents.prototype = {
    update: function () {
        var number_of_agents = options.NUMBER_OF_AGENTS;
        var vertices = this.particles.vertices;
        var STEP_SIZE = options.STEP_SIZE;

        for (var i = 0; i < number_of_agents; i++) {
            var direction = getDirection();
            var currentVertex = vertices[i];

            switch (direction) {
                case NORTH:
                case SOUTH:
                    currentVertex.y -= STEP_SIZE;
                    break;
                case NORTHEAST:
                case SOUTHWEST:
                    currentVertex.x += STEP_SIZE;
                    currentVertex.y -= STEP_SIZE;
                    break;
                case EAST:
                case NORTHWEST:
                    currentVertex.x += STEP_SIZE;
                    break;
                case SOUTHEAST:
                case WEST:
                    currentVertex.x += STEP_SIZE;
                    currentVertex.y += STEP_SIZE;
                    break;
            }
        }
        this.particles.verticesNeedUpdate = true;
    },

    initialize: function (scene) {

        var number_of_agents = options.NUMBER_OF_AGENTS;

        for (var i = 0; i < number_of_agents; i++) {
            var particle = new THREE.Vector3(0, 0, 0);
            this.particles.vertices.push(particle);
        }

        this.particleSystem = new THREE.PointCloud(this.particles, this.pMaterial)
        scene.add(this.particleSystem);
    }
};

function getDirection() {
    return Math.floor(Math.random() * 8);
}

module.exports = DumbAgents;

},{}],"/Users/abattle/sideprojects/ngineer.in/js/main.js":[function(require,module,exports){
'use strict';

//var Backbone = require('backbone');
//var $ = require('jquery');
//Backbone.$ = $;
//var Router = require('./meta/router');
////var AppView = require('./views/AppView');
////var contents = require('./data/contents.json');
////var StaticContentView = require('./views/StaticContentView');
////var SpotifyView = require('./views/SpotifyView');
//
////var KaleidoscopeApp = require('./kaleidoscope/Kaleidoscope');
////var kaleidoscope = require('./kaleidoscope/three');
//
//var Flex = require('./flex/Flex');
////var lines = require('./flex/lines');
//var ecosystem = require('./flex/eco/eco');
//
//var router;
//
//router = new Router({
//    app: new Flex({
//
//    })
//});
//Backbone.history.start();

var kaboogl = require('./kaboo-webgl/kaboo');

},{"./kaboo-webgl/kaboo":"/Users/abattle/sideprojects/ngineer.in/js/kaboo-webgl/kaboo.js"}]},{},["/Users/abattle/sideprojects/ngineer.in/js/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdjAuMTAuMzMvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMva2Fib28td2ViZ2wva2Fib28uanMiLCJqcy9rYWJvby13ZWJnbC9zaGFwZXMvRHVtYkFnZW50cy5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy92YXIgQ3ViZSA9IHJlcXVpcmUoJy4vY3ViZScpO1xudmFyIENpcmNsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL0R1bWJBZ2VudHMnKTtcbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwICk7XG5cbnZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWVcbn0pO1xucmVuZGVyZXIuYXV0b0NsZWFyQ29sb3IgPSBmYWxzZTtcbnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcblxudmFyIGNpcmNsZSA9IG5ldyBDaXJjbGUoc2NlbmUpO1xuXG5cbmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbnZhciB0aWNrID0gMDtcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCByZW5kZXIgKTtcbiAgICBjaXJjbGUudXBkYXRlKCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIHRpY2srKztcbn07XG5cbnJlbmRlcigpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBcmxhbmRvIEJhdHRsZSBvbiAxLzI4LzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBOT1JUSCA9IDA7XG52YXIgTk9SVEhFQVNUID0gMTtcbnZhciBFQVNUID0gMjtcbnZhciBTT1VUSEVBU1QgPSAzO1xudmFyIFNPVVRIID0gNDtcbnZhciBTT1VUSFdFU1QgPSA1O1xudmFyIFdFU1QgPSA2O1xudmFyIE5PUlRIV0VTVCA9IDc7XG5cbnZhciBvcHRpb25zID0ge1xuICAgIFNURVBfU0laRTogLjAzLFxuICAgIERJQU1FVEVSOiAxLFxuICAgIE5VTUJFUl9PRl9BR0VOVFM6IDEwXG59O1xuXG5mdW5jdGlvbiBEdW1iQWdlbnRzKHNjZW5lKSB7XG4gICAgdmFyIG51bWJlcl9vZl9hZ2VudHMgPSBvcHRpb25zLk5VTUJFUl9PRl9BR0VOVFM7XG5cbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgIHRoaXMucE1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50Q2xvdWRNYXRlcmlhbCh7XG4gICAgICAgIGNvbG9yOiAweEZGRkZGRixcbiAgICAgICAgc2l6ZTogLjAxXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZShzY2VuZSk7XG59XG5cbkR1bWJBZ2VudHMucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnVtYmVyX29mX2FnZW50cyA9IG9wdGlvbnMuTlVNQkVSX09GX0FHRU5UUztcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gdGhpcy5wYXJ0aWNsZXMudmVydGljZXM7XG4gICAgICAgIHZhciBTVEVQX1NJWkUgPSBvcHRpb25zLlNURVBfU0laRTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcl9vZl9hZ2VudHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbigpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIE5PUlRIOlxuICAgICAgICAgICAgICAgIGNhc2UgU09VVEg6XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWZXJ0ZXgueSAtPSBTVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTk9SVEhFQVNUOlxuICAgICAgICAgICAgICAgIGNhc2UgU09VVEhXRVNUOlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmVydGV4LnggKz0gU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmVydGV4LnkgLT0gU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEVBU1Q6XG4gICAgICAgICAgICAgICAgY2FzZSBOT1JUSFdFU1Q6XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWZXJ0ZXgueCArPSBTVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU09VVEhFQVNUOlxuICAgICAgICAgICAgICAgIGNhc2UgV0VTVDpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZlcnRleC54ICs9IFNURVBfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZlcnRleC55ICs9IFNURVBfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKHNjZW5lKSB7XG5cbiAgICAgICAgdmFyIG51bWJlcl9vZl9hZ2VudHMgPSBvcHRpb25zLk5VTUJFUl9PRl9BR0VOVFM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJfb2ZfYWdlbnRzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0aWNsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMudmVydGljZXMucHVzaChwYXJ0aWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtID0gbmV3IFRIUkVFLlBvaW50Q2xvdWQodGhpcy5wYXJ0aWNsZXMsIHRoaXMucE1hdGVyaWFsKVxuICAgICAgICBzY2VuZS5hZGQodGhpcy5wYXJ0aWNsZVN5c3RlbSk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEdW1iQWdlbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL3ZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG4vL3ZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vL0JhY2tib25lLiQgPSAkO1xuLy92YXIgUm91dGVyID0gcmVxdWlyZSgnLi9tZXRhL3JvdXRlcicpO1xuLy8vL3ZhciBBcHBWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9BcHBWaWV3Jyk7XG4vLy8vdmFyIGNvbnRlbnRzID0gcmVxdWlyZSgnLi9kYXRhL2NvbnRlbnRzLmpzb24nKTtcbi8vLy92YXIgU3RhdGljQ29udGVudFZpZXcgPSByZXF1aXJlKCcuL3ZpZXdzL1N0YXRpY0NvbnRlbnRWaWV3Jyk7XG4vLy8vdmFyIFNwb3RpZnlWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9TcG90aWZ5VmlldycpO1xuLy9cbi8vLy92YXIgS2FsZWlkb3Njb3BlQXBwID0gcmVxdWlyZSgnLi9rYWxlaWRvc2NvcGUvS2FsZWlkb3Njb3BlJyk7XG4vLy8vdmFyIGthbGVpZG9zY29wZSA9IHJlcXVpcmUoJy4va2FsZWlkb3Njb3BlL3RocmVlJyk7XG4vL1xuLy92YXIgRmxleCA9IHJlcXVpcmUoJy4vZmxleC9GbGV4Jyk7XG4vLy8vdmFyIGxpbmVzID0gcmVxdWlyZSgnLi9mbGV4L2xpbmVzJyk7XG4vL3ZhciBlY29zeXN0ZW0gPSByZXF1aXJlKCcuL2ZsZXgvZWNvL2VjbycpO1xuLy9cbi8vdmFyIHJvdXRlcjtcbi8vXG4vL3JvdXRlciA9IG5ldyBSb3V0ZXIoe1xuLy8gICAgYXBwOiBuZXcgRmxleCh7XG4vL1xuLy8gICAgfSlcbi8vfSk7XG4vL0JhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcblxudmFyIGthYm9vZ2wgPSByZXF1aXJlKCcuL2thYm9vLXdlYmdsL2thYm9vJyk7XG4iXX0=
