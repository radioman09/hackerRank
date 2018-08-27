// // function between(number, start, end) {
// //     return number >= Math.min(start, end) && number <= Math.max(start, end);
// // }

// function reflectXY(query1, query2, arr) {
//     const min = Math.min(query1[1], query2[1]);
//     const max = Math.max(query1[2], query2[2]);
//     const least = query1[1] > query2[1] ? query2 : query1;
//     const last = query1[1] < query2[1] ? query2 : query1;
//     let skip = least[2] - last[1] - 1;
//     for (let i = min - 1; i < max; i++) {
//         if (i === least[2] && skip > 0) i += skip;
//         arr[i] = -arr[i];
//     }
//     return arr;
// }
// // reflectXY(['X', 2, 4], ['Y', 7, 10], [1, 5, 1, 7, 5, 6, 3, 9, 2, 15, 11, 12]);
// reflectXY(['Y', 7, 10], ['X', 2, 4], [1, 5, 1, 7, 5, 6, 3, 9, 2, 15, 11, 12]);
// // reflectXY(['X', 2, 4], ['Y', 3, 6], [1, 5, 1, 7, 5, 6, 3, 9, 2, 15, 11, 12]);
// // [1, 5, 1, 7, 5, 6, 3, 9, 2, 15, 11, 12]
// //     [2, 3, 4]
// //        [3, 4, 5, 6]
// //    [2, 3, 4]      [7, 8, 9, 10]


//     if (input[i][0] === 'X' && input[i + 1][0] === 'Y') {
//       reflectXY(input[i], input[i + 1], quadrants);
//       i++;
//     } else 

// function reflectXY(query1, query2, arr) {
//   const min = Math.min(query1[1], query2[1]);
//   const max = Math.max(query1[2], query2[2]);
//   const least = query1[1] > query2[1] ? query2 : query1;
//   const last = query1[1] < query2[1] ? query2 : query1;
//   let skip = least[2] - last[1] - 1;
//   for (let i = min; i < max - 1; i++) {
//     if (i === least[2] && skip > 0) i += skip;
//     arr[i] = [-arr[i][0], -arr[i][1]];
//   }
// }

// // function reflectXY(query1, query2, arr) {
// //   const min = Math.min(query1[1], query2[1]);
// //   const max = Math.max(query1[2], query2[2]);
// //   const least = query1[1] > query2[1] ? query2 : query1;
// //   const last = query1[1] < query2[1] ? query2 : query1;
// //   let skip = last[1] - least[2] - 1;
// //   for (let i = min; i < max; i++) {
// //     if (i === least[2] && skip >= 0) i += skip;
// //     arr[i] = [-arr[i][0], -arr[i][1]];
// //   }
// // }