'use strict';

function utopianTree(n) {
    let total = 0;
    for (let i = 1; i <= n + 1; i++) {
        if (i % 2 == 0) total += total;
        else total++;
    }
    return total;
}

console.log(utopianTree(0));
