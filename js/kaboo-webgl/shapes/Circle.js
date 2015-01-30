/**
 * Created by Arlando Battle on 1/18/15.
 */
/**
 * Created by Arlando Battle on 1/18/15.
 */
'use strict';
function Circle(scene) {
    var group = new THREE.Group();
    var geometry = new THREE.CircleGeometry(1, 64);
    var material = new THREE.LineBasicMaterial({
        color: 0xFFFFFF,
        linewidth: 2
    });
    var geometry2 = new THREE.CircleGeometry(1.5, 64);
    var geometry3 = new THREE.CircleGeometry(1.45, 64);
    var circle = new THREE.Line(geometry, material);
    var circle2 = new THREE.Line(geometry2, material);
    var circle3 = new THREE.Line(geometry3, material);

    // Remove center vertex
    geometry.vertices.shift();
    geometry2.vertices.shift();
    geometry3.vertices.shift();

    group.add(circle);
    group.add(circle2);
    group.add(circle3);
    scene.add(group);

    return group;
}

module.exports = Circle;