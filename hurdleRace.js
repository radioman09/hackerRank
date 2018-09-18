'use strict';

function hurdleRace(arr, height) {
    const shots = Math.max(...arr) - height;
    if (shots > 0) return shots;
    return 0;
}

console.log(hurdleRace([1, 2, 3, 3, 2], 1));
console.log(hurdleRace([1, 6, 3, 5, 2], 4));
console.log(hurdleRace([2, 5, 4, 5, 2], 7));
