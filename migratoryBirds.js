const data = [1, 4, 4, 4, 5, 3];
// const data = [1, 2, 3];
// const data = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// const data = [9, 1, 8];
// const data = [1, 1, 2, 2, 3, 3];

function migratoryBirds(arr) {
    let obj = {};
    for (let i of arr) {
        if (!obj[i]) obj[i] = 1;
        else obj[i]++;
    }

    let outObj = {};
    let temp = Object.keys(obj)[0];
    let unique = true;
    let firstOccurance = Object.keys(obj)[0];
    for (let i of Object.keys(obj)) {
        if (!outObj[i]) outObj[i] = obj[i];
        if (obj[i] > outObj[temp]) {
            temp = i;
            unique = false;
            firstOccurance = i;
        }
    }
    if (unique) return arr[0];
    return firstOccurance;
}

console.log(migratoryBirds(data));
