/**
 * Created by Arlando Battle on 1/18/15.
 */
'use strict';
function Cube(scene) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    return cube;
}

module.exports = Cube;