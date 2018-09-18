'use strict';
const fs = require('fs');
let file = fs.readFileSync('./testFile.txt', 'utf-8');
file = file.split('\r\n');
function angryProfessor(studentsNeeded, studentList) {
    if (studentList.length === 1 && +studentList[0] <= 0) return 'NO';
    let totalShowed = 0;
    for (let i = 0; i < studentList.length; i++) {
        if (+studentList[i] <= 0) {
            totalShowed++;
        }
    }
    return totalShowed < studentsNeeded ? 'YES' : 'NO';
}

// console.log(angryProfessor(4, [-1, -1, 0, 0, 1, 1]));
console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));
// console.log(angryProfessor(0, []));

let num = [];
let counter = file.shift(0);

for (let i = 0; i < counter * 2; i += 2) {
    num.push(+file[i].split(' ')[1]);
}

let arr = [];
let count = 0;
for (let i = 1; i < counter * 2; i += 2) {
    arr = file[i].split(' ');
    console.log(angryProfessor(num[count], arr));
    count++;
}
