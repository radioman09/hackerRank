'use strict';
let total = (i, j) => Math.abs(i + j);
function formingMagicSquare(rows) {
    let [columns, cross] = getColCros(rows);
    let colMag = getTotal(columns);
    let rowMag = getTotal(rows);
    cross = crossTotal(cross);
    let remove = Math.min(...cross);
    const crossMult = cross[0] * cross[1];
    colMag
    rowMag
    remove
    if(colMag == rowMag) return rowMag
    if (Math.abs(colMag - rowMag) > 0 && crossMult != rowMag) return Math.max(colMag, rowMag);
    else if (Math.abs(colMag - rowMag) > 0) return Math.max(colMag, rowMag) - remove;
    return colMag;
}
console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]));
console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]));
console.log(formingMagicSquare([[4, 1, 5], [7, 6, 4], [7, 2, 2]]));
console.log(formingMagicSquare([[2, 1, 7], [9, 9, 9], [4, 8, 6]]));

function getColCros(rows) {
    let columns = [[], [], []];
    for (let i = 0; i < rows.length; i++) {
        columns[0].push(rows[i][0]);
        columns[1].push(rows[i][1]);
        columns[2].push(rows[i][2]);
    }
    let cross = [[], []];
    let temp = rows.length - 1;
    for (let i = 0; i < rows.length; i++) {
        cross[0].push(rows[i][i]);
        cross[1].push(rows[i][temp]);
        temp--;
    }
    return [columns, cross];
}

function getTotal(arr) {
    let magic = [];
    for (let i = 0; i < arr.length; i++) {
        magic.push(arr[i].reduce(total));
    }
    let out = [];
    for (let i of magic) {
        out.push(Math.abs(15 - i));
    }
    return out.reduce((i, j) => i + j);
}

function crossTotal(cross) {
    let total = [];
    for (let i = 0; i < cross.length; i++) {
        total.push(cross[i].reduce((i, j) => i + j));
    }
    total[0] = Math.abs(15 - total[0]);
    total[1] = Math.abs(15 - total[1]);

    return total;
}




