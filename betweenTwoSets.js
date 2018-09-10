
// enter smallest and largest number in set
function gcd(a, b) {
    let lrg = a > b ? a : b;
    let sml = a < b ? a : b;
    let remainder = lrg % sml;

    while (remainder > 0) {
        lrg = sml;
        sml = remainder;
        remainder = lrg % sml;
    }
    return sml;
}


function lcm(a, b) {
    // console.log(gcd(a , b))
    return (a * b) / gcd(a, b);
    // return gcd(a, b);
}


function getLcmA(a) {
    return lcm(Math.min(...a), Math.max(...a));
}

function getGcdB(b) {
    return gcd(Math.min(...b), Math.max(...b));
}


function getTotalX(a, b) {
    a = getLcmA(a);
    b = getGcdB(b);
    let countBy = a;
    console.log(a, b);
    let count = 0;
    for (let i = a; i <= b; i++) {
        // console.log(a, i)
        if (a % i == 0) count++;
        a += countBy;
    }
    return count;
}
// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([3, 4], [24, 48]));
console.log(getTotalX([3, 6, 9], [36, 72]));

// console.log(getLcmA([2, 4]));
// 9, 18, 27, 36
// 4, 8, 12, 16
