/**
 * Created by Arlando Battle on 1/18/15.
 */
/**
 * Created by Arlando Battle on 1/18/15.
    TODO this is to perfect make less perfect
 */
'use strict';

function TearDrop(scene) {
//    var group = new THREE.Group();
//    var geometry = new THREE.SphereGeometry(1, 32, 32, Math.PI, Math.PI, 3 * Math.PI / 2);
//    var spMaterial = new THREE.MeshBasicMaterial({ color: 0xddddff });
//    var mesh = new THREE.Mesh(geometry, spMaterial);
//    mesh.material.side = THREE.DoubleSide;
//    group.add(mesh);
//    var coneGeometry = new THREE.CylinderGeometry(0, 1, 2, 32, 50);
//    var cone = new THREE.Mesh(coneGeometry, spMaterial);
//
//    cone.position.y -= 1;
//    cone.rotation.x += Math.PI;
//    group.add(cone);
//    scene.add(group);
//
//    return group;

    var group = new THREE.Group();
    var sphere  = new THREE.SphereGeometry(1, 32, 32, Math.PI, Math.PI, - 3 * Math.PI / 2);
    var cone = new THREE.CylinderGeometry(0, 1, 2, 32, 50);
    var numberOfConeVertices = cone.vertices.length;

    for (var i = 0; i < numberOfConeVertices; i++) {
        cone.vertices[i].y += 1;
    }

    sphere.merge(cone);
    var materialNormal = new THREE.MeshNormalMaterial();
    var spMaterial = new THREE.MeshBasicMaterial({ color: 0xddddff });
    var mesh = new THREE.Mesh(sphere, materialNormal);
    mesh.material.side = THREE.DoubleSide;
    group.add(mesh);
    scene.add(group);
    return group;
}

module.exports = TearDrop;