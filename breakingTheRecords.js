

let data = [12, 24, 10, 24];
// let obj = {};
// for (let i of data) {
//     if (!obj[i]) obj[i] = 1;
//     else obj[i]++;
// }

// console.log(obj);


function breakingRecords(scores) {
    let minScore = Infinity;
    let maxScore = -Infinity;
    let min = -1;
    let max = -1;
    for (let score of scores) {
        if (score < minScore) min++;
        if (score > maxScore) max++;
        if (score > maxScore) maxScore = score;
        if (score < minScore) minScore = score;
    }
    console.log(min, max);
}

console.log(breakingRecords(data));
