// 6,2 >> 1
// [][1] > [2][3]
// [6][] > [4][5] > [2][3]

// 6, 6 >> 0
// [6][]
// [][6]

// 6, 5 >> 1
// [][1] > [2][3] > [4][5] > [6][]
// [6][] > [5][4]

// 1, 3 >> 0
// [][1]
// [2][3] > [][1]

// 3, 1 >> 0
// [0][1]
// [2][3] > [][1]

// 5, 1
// [0][1]

void function () {
    const tests = [
        [6, 2], [6, 6], [6, 5],
        [1, 3], [3, 1], [0, 0],
        [1, 1], [70809, 46090],
        [5, 1], [21235, 17], [2, 1],
    ];
    const res = [1, 0, 1, 0, 0, 0, 0, 12359, 0, 8, 0];
    let i = 0;
    let out = '';
    for (let test of tests) {
        if (pageCount(...test) !== res[i]) {
            out += `Test ${i}: ${test} [${res[i]} != ${pageCount(...test)}]\n`;
        }
        i++;
    }
    console.log(out);
}();


function pageCount(n, p) {
    if (n <= 1 || p <= 1) return 0;
    if (n % 2 == 0 && n - p == 1) return 1;
    if (n - p == 1 || n == p) return 0;

    return Math.min(Math.floor(p / 2), Math.floor((n - p) / 2));
}


