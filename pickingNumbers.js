function pickingNumbers(a) {
  let out = [];
  let out2 = [];
  for (let i = 0; i < a.length; i++) {
    console.log(Math.abs(a[i] - a[i + 1]));

    if (Math.abs(a[i] - a[i + 1]) <= 1) {
      out.push(a[i]);
    } else {
      out2.push(a[i]);
    }
  }
  return out;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
// 5
