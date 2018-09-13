// function gcd(a, b) {
//     let lrg = Math.max(a, b);
//     let sml = Math.min(a, b);
//     let remainder = lrg % sml;

//     while (remainder > 0) {
//         lrg = sml;
//         sml = remainder;
//         remainder = lrg % sml;
//     }
//     return sml;
// }
// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

function gcd(num1, num2) {
    let a = Math.max(num1, num2);
    let b = Math.min(num1, num2);
    let remainder = 1;
    let gcdNum = 0;
    while (remainder > 0) {
        gcdNum = b;
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return gcdNum;
}

function getLcGc(a, fn) {
    a = a.sort((a, b) => b - a);
    if (a.length == 1) return a[0];
    if (a.length == 2) return fn(a[0], a[1]);

    let i = 2;
    let temp = fn(a[0], a[1]);
    return fn(temp, a[i++]);
}


console.log(getLcGc([20, 30, 12], gcd));
