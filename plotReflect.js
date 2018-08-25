var data = `4
1 1
-1 1
-1 -1
1 -1
5
C 1 4
X 2 4
C 3 4
Y 1 2
C 1 3`;

void (function processData(input) {
  input = input.split("\n");
  let quadrantsNum = input.shift();
  let querysNum = input.splice(4, 1)[0];
  let quadrants = input.splice(0, quadrantsNum);
  quadrants = quadrants.map(a => a.split(" "));
  quadrants = quadrants.map(x => [+x[0], +x[1]]);
  //   let original = quadrants.slice();
  // console.log(quadrants);
  for (let i of input) {
    if (i.split(" ")[0] != "C") {
      quadrants = reflect(i, quadrants);
      //   console.log(quadrants)
    } else {
    //   console.log(getQuadNums(i, quadrants));
      getOccurance(getQuadNums(i, quadrants));
    }
  }
})(data);

function reflect(query, arr) {
  query = query.split(" ");
  query[1] = +query[1] - 1;
  query[2] = +query[2] - 1;
  if (query[0] == "X")
    return arr.map((x, i) => {
      if (between(i, query[1], query[2])) return [x[0], -x[1]];
      else return [x[0], x[1]];
    });
  if (query[0] == "Y")
    return arr.map((x, i) => {
      if (between(i, query[1], query[2])) return [-x[0], x[1]];
      else return [x[0], x[1]];
    });
  return arr;
}

function getQuadrant(point) {
  if (point[0] > 0 && point[1] > 0) return 1;
  if (point[0] < 0 && point[1] > 0) return 2;
  if (point[0] < 0 && point[1] < 0) return 3;
  if (point[0] > 0 && point[1] < 0) return 4;
  return 0;
}

function getQuadNums(query, arr) {
  query = query.split(" ");
  query[1] = +query[1] - 1;
  query[2] = +query[2] - 1;
  return arr.map((x, i) => {
    if (between(i, query[1], query[2])) return getQuadrant([x[0], x[1]]);
    else return 0;
  });
}

function getOccurance(arr) {
  let quadrantsNumsArr = [1, 2, 3, 4];
  
}
// function reflect(query, arr) {
//   query = query.split(" ");
//   query[1] = +query[1] - 1;
//   query[2] = +query[2] - 1;
//   if (query[0] == "C") return arr;
//   let currentArr = [];
//   for (let i = query[1]; i <= query[2] - 1; i++) {
//     if (query[0] == "X") currentArr.push([arr[i][0], -arr[i][1]]);
//     if (query[0] == "Y") currentArr.push([-arr[i][0], arr[i][1]]);
//   }
//   return currentArr;
// }

function between(number, start, end) {
  return number >= Math.min(start, end) && number <= Math.max(start, end);
}

// console.log(between(3, 0, 3))
