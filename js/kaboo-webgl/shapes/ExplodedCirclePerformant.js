/**
 * Created by Arlando Battle on 1/24/15.
 * TODO READY i like it
 */
'use strict';
var ticks = 0;
var g = .005;

function ExplodedCirclePerformant(scene) {
    this.group = new THREE.Group();

    this.mother = this.makeMother();

    this.children = [];

    for (var i = 1; i < 10; i++) this.group.add(this.makeChild(this.mother));
    this.group.add(this.mother);
    scene.add(this.group);
}

ExplodedCirclePerformant.prototype = {
    makeMother: function () {
        var mainSphere  = new THREE.SphereGeometry(.01, 64, 64);
        var materialNormal = new THREE.MeshNormalMaterial();


        return new THREE.Mesh(mainSphere, materialNormal);
    },

    makeChild: function () {
        var mainSphere  = new THREE.SphereGeometry(.05, 64, 64);
        var materialNormal = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(mainSphere, materialNormal);
        var seed;

        mesh.seed = seed = Math.random();
        mesh.vx = Math.random() / 10;
        mesh.vy = Math.random() / 10;
        mesh.position.x = this.mother.position.x;
        mesh.position.y = this.mother.position.y;

        this.children.push(mesh);
        return mesh;
    },

    update: function () {
        var numberChildren = this.children.length;

        this.updateMother();

        for (var i = 0; i < numberChildren; i++) {
            var obj = this.children[i];

            var scale = obj.scale;
            var seed = obj.seed / 4;
            scale.set(scale.x - seed, scale.y - seed, scale.z - seed);
            obj.position.x += .001 + obj.vx;
            obj.position.y += .001 + obj.vy - g;
            if (scale.x - seed < 0 || scale.y - seed < 0 || scale.z - seed < 0) {
                obj.position.x = this.mother.position.x;
                obj.position.y = this.mother.position.y;
                var randomS = Math.random() * 3;
                obj.vy = (Math.random() - .5) / 20;
                obj.vx = (Math.random() - .6) / 20;
                scale.set(randomS, randomS, randomS);
            }
        }

        ticks++;
    },

    updateMother: function () {
        this.mother.position.x = Math.cos(ticks / 10);
        this.mother.position.y = Math.sin(ticks / 500) * 2;
//        this.mother.position.y += Math.sin(this.mother.position.y) + .001;
    }
};

module.exports = ExplodedCirclePerformant;