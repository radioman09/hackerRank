const data = [1, 1, 1, 1, 1, 1];
// const data = [2, 2, 1, 3, 2];
// const data = [1, 2, 1, 3, 2];

function birthday(s, d, m) {
    let peices = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce((a, b) => a + b) == d) peices++;
    }
    return peices;
}

console.log(birthday(data, 3, 2));
