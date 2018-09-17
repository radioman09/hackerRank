// let row1 = [s[0], s[1], s[2]];
// let row2 = [s[3], s[4], s[5]];
// let row3 = [s[6], s[7], s[8]];
// let column1 = [s[0], s[3], s[6]];
// let column2 = [s[1], s[4], s[7]];
// let column3 = [s[2], s[5], s[8]];

// let crossTwo = [s[0], s[4], s[8]];
// let crossOne = [s[6], s[4], s[2]];
// let magicSquare = {
//     row1: isMaigc(row1), row2: isMaigc(row2),
//     row3: isMaigc(row3), column1: isMaigc(column1),
//     column2: isMaigc(column2), column3: isMaigc(column3),
//     crossOne: isMaigc(crossOne), crossTwo: isMaigc(crossTwo),
// };
// row3[0] = 
// let obj = {};
// for (let i of Object.keys(magicSquare)) {
//     if (magicSquare[i] === false) obj[i] = false;
// }
// return obj;













// 'use strict';

// function formingMagicSquare(s) {
//     let columns = [];
//     for (let i = 0; i < s.lenght; i++) {
//         console.log(i);

//         columns.push(s[0][i]);
//     }
//     // const rows = [0, isMagic(s[0]), isMagic(s[1]), isMagic(s[2])];
//     // let cross = [[s[0][0], s[1][1], s[2][2]], [s[0][2], s[1][1], s[2][0]]];
//     // cross = cross.map((i) => isMagic(i));

//     console.log(columns);

//     // let colRes = columns.reduce((acc, i) => acc + Math.abs(15 - i));
//     // let rowRes = rows.reduce((acc, i) => acc + Math.abs(15 - i));
//     // let crossRes = cross.map((i) => Math.abs(15 - i));
//     // console.log(colRes, rowRes, crossRes);


//     // const magicSquare = [0, isMagic(s[0]), isMagic(s[1]), isMagic(s[2])];
//     // return magicSquare.reduce((acc, i) => acc + Math.abs(15 - i));
// }

// // console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));
// // console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]));
// // console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]));
// console.log(formingMagicSquare([[4, 1, 5], [7, 6, 4], [7, 2, 2]]));


// function isMagic(arr) {
//     return arr.reduce((i, j) => i + j);
// }


// // 4 1 5  > 10 > |15 - 10| > 5
// // 7 6 4  > 17 > |15 - 17| > 2
// // 7 2 2  > 11 > |15 - 11| > 4
