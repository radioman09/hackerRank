'use strict';
function getMoneySpent(keyboards, drives, b) {
    let prices = [];
    for (let i of keyboards) {
        for (let j of drives) {
            if (i + j <= b) prices.push(i + j);
        }
    }
    if (prices.length == 0) return -1;
    const price = Math.max(...prices);
    return price > b ? -1 : price;
}

console.log(getMoneySpent([5, 11], [4], 5));
