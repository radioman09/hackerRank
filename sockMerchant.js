function sockMerchant(n, ar) {
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (!obj[ar[i]]) obj[ar[i]] = 1;
        else obj[ar[i]]++;
    }
    let count = 0;
    for (let i of Object.keys(obj)) {
        count += Math.floor(obj[i] / 2);
    }
    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
