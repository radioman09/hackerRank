function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    for (let i = 0; i < n; i++) {
        liked += Math.floor(shared / 2);
        shared = 3 * Math.floor(shared / 2);
    }
    return liked;
}
console.log(viralAdvertising(2));
