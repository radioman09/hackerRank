'use strict';

function countingValleys(n, s) {
    let seaLevel = 0;
    let level = seaLevel;
    let count = 0;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        s[i] === 'U' ? level++ : level--;
        if (level === seaLevel && temp < seaLevel) count++;
        temp = level;
    }
    if (level < seaLevel) count++;
    return count;
}
console.log(countingValleys(8, 'UUUUDDDD'));
console.log(countingValleys(8, 'DDDDDDDD'));
console.log(countingValleys(8, 'UUUUUUUU'));
console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(12, 'DDUUDDUDUUUD'));


