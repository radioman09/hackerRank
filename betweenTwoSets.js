// // [ 2, 4 ] [ 16, 32, 96 ]


// function getTotalX(a, b) {
//     let arr = [];
//     let count = 0;
//     for (let i = 1; i <= b[0]; i++) {
//         if (a.length == 1 && b.length == 1 && b[0] % i == 0) {
//             arr.push(i);
//         }
//         if (a.length == 1 && a[0] > 1 && i % a[0] == 0) {
//             arr.push(i);
//         }

//         if (a[0] !== 1 && i % a[0] == 0 && i % a[a.length - 1] == 0) arr.push(i);
//         if (i % a[0] == 0 && i % a[1] == 0) arr.push(i);
//     }
//     console.log(new Set(arr))
//     for (let i = 0; i < arr.length; i++) {
//         for (let j of arr) {
//             if (b[i] % j == 0 && b.length == 1) count++;
//             else if (b[i] % j == 0) count += (1 / arr.length);
//         }
//     }
//     return count.toFixed(0);
// }

// // console.log(getTotalX([2, 4], [16, 32, 96]));
// // console.log(getTotalX([3, 4], [24, 48]));
// // console.log(getTotalX([2], [20, 30, 12]));

// // console.log(getTotalX([1], [100]));
// console.log(getTotalX([2, 4, 8], [20, 30]));
// // console.log(getTotalX([0, 0, 0], [20, 30, 12]));


function getTotalX(a, b) {
    arr = [];
    let bTotal = b.reduce((x, y) => x * y);
    let aTotal = a.reduce((x, y) => x * y);
    let counter = 0;
    let len = a.length > 1 ? a.length - 1 : 0;
    console.log(bTotal);
    let large;
    let small;
    for (let i = a[len]; i < b[0] + 1; i++) {
        if (b[0] % i == 0) {
            arr.push(i);
            // counter++;
        }
    }

    let rangeLarge = arr.length > b.length ? arr.length : b.length;
    let rangeSmall = a.length > b.length ? b.length : a.length;
    console.log(arr)
    console.log(rangeLarge, rangeSmall)
    for (let i = 0; i < rangeLarge; i++) {
        large = arr[i] > aTotal ? arr[i] : aTotal;
        small = arr[i] > aTotal ? aTotal : arr[i];
        console.log(b[0] / small);
        for (let j = 0; j < rangeSmall; j++) {
            if (b[j] / small % 2 == 0) counter++;
        }

    }

    // console.log(arr);
    return counter;
}

// aTotal / 
// console.log(getTotalX([1], [100]));
// console.log(getTotalX([2], [16, 32, 96]));

// console.log(getTotalX([1, 2, 3, 4], [10]));

// console.log(getTotalX([1, 2, 3], [10, 20]));
console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([3, 4], [24, 48]));
// console.log(getTotalX([2, 4], [16, 32, 96, 108]));

// 1, 1
// 1, 3
// 4, 1
// 3, 2
// 2, 3
// 3, 3

// var bTotal = multiply all numbers in b
// var arrTotal = multiply all numbers in arr
// bTotal / arrTotal/ 2 % 2    the correct numbers will result in 0
// subtract number and test again
// add previous number and subtract the next one
// add to counter each time result is 0

// 36864 /384/2 % 2
// maybe  (total-i)%arrtotal%2
