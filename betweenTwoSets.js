
// enter smallest and largest number in set
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

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getLcGc(a, fn) {
    a = a.sort((a, b) => b - a);
    if (a.length == 1) return a[0];
    if (a.length == 2) return fn(a[0], a[1]);

    let i = 2;
    let temp = fn(a[0], a[1]);
    return fn(temp, a[i++]);
}

function getTotalX(a, b) {
    a = getLcGc(a, lcm);
    b = getLcGc(b, gcd);

    let countBy = a;
    let count = 0;
    let temp = 0;
    for (let i = a; i <= b; i += countBy) {
        temp = b / i;
        if (temp % 1 === 0) {
            count++;
        }
    }
    return count;
}
console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([3, 4], [24, 48]));
console.log(getTotalX([3, 9, 6], [36, 72]));
console.log(getTotalX([2], [20, 30, 12]));

// console.log(getLcmA([2, 4]));
// 9, 18, 27, 36
// 4, 8, 12, 16


// 2, 4, 6
// 2, 1, 1.5

// 2,4,6,8,10,12,14,16,18,20


