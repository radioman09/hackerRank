// const data = [73, 67, 38, 33, 42, 40, 91, 99];
const data = [73, 67, 38, 33];

function gradingStudents(data) {
    return data.map((i) => {
        const nextMult = getNextMult(i);
        if (i < 38) return i;
        if (nextMult - i < 3) return nextMult;
        else return i;
    });
}


function getNextMult(num) {
    const baseNum = ((num / 10 >> 0) * 10);
    const mult1 = baseNum + 5;
    const mult2 = baseNum + 10;
    const first = mult1 - num;
    const second = mult2 - num;
    if (first < 0) return mult2;
    if (second < 0) return mult1;
    if (first < second) return mult1;
    else return mult2;
}


// let nums = getNextMult(78);
console.log(gradingStudents(data));
// console.log(nums);


// get multiples of 5
// use lowest non negative number
// 73 75 || 80 : 2 || 7 ==> 2
// 67 65 || 70 :-2 || 5 ==> 5
// 38 35 || 40 :-3 || 5 ==> 5
// 33 35 || 40 : 2 || 5 ==> 2
// 31 35 || 40 : 4 || 9 ==> 4

// find which is greater
// return first num
// 75 - 73         80 - 73
