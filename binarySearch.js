const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function search(arr, num) {
//   let middle = (arr.length / 2) >> 0;
//   let len = arr.length - 1;
//   let index = -1;
//   for (let i = 0; i < len; i++) {
//     if (arr[middle] == num) return i;
//     else if (arr[middle] < num) {
//       i = middle;
//       middle = (len - middle / 2) >> 0;
//       if(arr.length % 2 !== 0)
//         if ((len - middle) % 2 !== 0) middle--
//     } else if (arr[middle] > num) {
//       len = middle;
//       middle = (len - middle / 2) >> 0;
//       if(arr.length % 2 == 0)
//         if ((len - middle) % 2 == 0) middle--
//     } else {
//       index = i;
//     }
//   }
//   return index;
// }

function search(arr, num) {
  let start = 0;
  let stop = arr.length;
  let middle = Math.floor((start + stop) / 2);
  for (let i = start; i < stop; i++) {
    num < arr[i] ? (stop = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + stop) / 2);
    if (num == arr[middle]) return middle;
    if (start > stop) break;
  }
}
console.time("search");
search(arr, 1)
console.timeEnd("search");
// console.log(search(arr, 9));
//                   6
// [1, 2, 3, 4, [5], 6, 7, 8, 9]

// [1, 2, 3, 4][5, 6, 7, 8, 9]

//                 6
// [1, 2][3, 4][5, 6] 7,[8, 9]]
