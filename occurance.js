// function between(number, start, end) {
//     return number >= Math.min(start, end) && number <= Math.max(start, end);
// }

function occ(arr) {
    let quad = [1, 2, 3, 4];
    let out = [0, 0, 0, 0];
    for (let i = 0; i < quad.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == quad[i]) {
                out[i]++;
                arr.splice(j, 1);
            }
        }
    }
    return out.join('');
}

occ([2, 4, 2, 0]);
