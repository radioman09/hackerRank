
let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.map((i) => i + a);
    oranges = oranges.map((i) => i + b);
    let applesCount = 0;
    let orangesCount = 0;
    for (let i of apples) {
        if (between(i, s, t)) applesCount++;
    }
    for (let i of oranges) {
        if (between(i, s, t)) orangesCount++;
    }
    return `${applesCount}\n${orangesCount}`;
}
function between(num, s, t) {
    return num >= s && num <= t;
}
process.stdout.write(countApplesAndOranges(s, t, a, b, apples, oranges));


