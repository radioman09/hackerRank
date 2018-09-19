function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    let out = [];
    for (let i = 0; i < queries.length; i++) {
        out.push(a[queries[i]]);
    }
    return out;
}


console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
