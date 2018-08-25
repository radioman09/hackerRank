function between(number, start, end) {
  return number >= Math.min(start, end) && number <= Math.max(start, end);
}

function occ(arr) {
  let quad = [1, 2, 3, 4];
  let obj = {};
  let occurance
  for (let i = 0; i < arr.length; i++) {
    if (!obj[quad[i]]) obj[quad[i]] = 0;
    if (arr.includes(quad[i])) obj[quad[i]]++;
  }
  return obj;
}

console.log(occ([2, 4, 2, 0]));
