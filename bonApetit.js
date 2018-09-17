function bonAppetit(bill, k, b) {
    let total = 0;
    let split = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) total += bill[i];
    }
    split = total / 2;
    if (b - split === 0) return 'Bon Appetit';
    return b - split;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));
