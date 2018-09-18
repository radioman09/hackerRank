function saveThePrisoner(prisoners, sweets, start) {
    return sweets % prisoners + start - 1;
}
// const saveThePrisoner = (a, b, c) => b % a + c - 1;
console.log(saveThePrisoner(7, 19, 2));
console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
console.log(saveThePrisoner(4, 5, 3));
console.log(saveThePrisoner(352926151, 380324688, 94730870));
console.log(saveThePrisoner(94431605, 679262176, 5284458));
console.log(saveThePrisoner(208526924, 756265725, 150817879));

// 352926151, 380324688, 94730870
// 94431605, 679262176, 5284458
// 208526924, 756265725, 150817879
// 122129406
// 23525398
// 72975907
