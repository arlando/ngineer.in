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
