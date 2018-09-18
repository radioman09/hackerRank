function beautifulDays(i, j, k) {
    let reversed;
    let count = 0;
    for (let a = i; a <= j; a++) {
        reversed = +a.toString().split('').reverse().join('');
        if ((Math.abs(a - reversed) / k) % 1 == 0) count++;
    }
    return count;
}

console.log(beautifulDays(20, 23, 6));
