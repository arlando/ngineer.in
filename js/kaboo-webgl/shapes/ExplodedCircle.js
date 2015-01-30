/**
 * Created by Arlando Battle on 1/24/15.
 */
'use strict';

function ExplodedCircle(scene) {
    var group = new THREE.Group();
    var mainSphere  = new THREE.SphereGeometry(2, 64, 64);
    var materialNormal = new THREE.MeshNormalMaterial();
    var mesh = new THREE.Mesh(mainSphere, materialNormal);
//    mainSphere.merge(makeAdditionalSphere(0, 1.8, 0));
//    mainSphere.merge(makeAdditionalSphere(0, -1.8, 0));
//    mainSphere.merge(makeAdditionalSphere(1.2, 1.2, 0));
//    mainSphere.merge(makeAdditionalSphere(1.2, -1.2, 0));
//    mainSphere.merge(makeAdditionalSphere(-1.2, -1.2, 0));
//    mainSphere.merge(makeAdditionalSphere(-1.2, 1.2, 0));
    makeAdditionalSphereZ(mainSphere);
    group.add(mesh);
    scene.add(group);

    return group;
}

function makeAdditionalSphere(x, y, z) {
    var additionalSphere = new THREE.SphereGeometry(.5, 64, 64);
    var vertices = additionalSphere.vertices.length;

    for (var i = 0; i < vertices; i++) {
        additionalSphere.vertices[i].x -= x;
        additionalSphere.vertices[i].y -= y;
        additionalSphere.vertices[i].z -= z;
    }

    return additionalSphere;
}

function makeAdditionalSphereZ(geometry) {
    var length = 30;
    for (var i = 0; i < length; i++) {
        var x = 3 * Math.cos(2 * ((i - 5) * 2 / length));
        var y = 3 * Math.sin(2 * (( i - 5) * 2/ length));
        geometry.merge(makeAdditionalSphere(x, y, 0));

    }
}

module.exports = ExplodedCircle;