'use strict';
function catAndMouse(x, y, z) {
    const catA = Math.abs(z - x);
    const catB = Math.abs(z - y);
    if (catA === catB) return 'Mouse C';
    return catA < catB ? 'Cat A' : 'Cat B';
}

console.log(catAndMouse(1, 2, 3));
