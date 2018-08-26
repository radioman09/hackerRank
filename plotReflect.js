'use strict';
const fs = require('fs');
const data = fs.readFileSync('./data.dat', 'utf-8');

console.time('processData');
processData(data);
console.timeEnd('processData');

function processData(input) {
  input = input.split('\n');
  const quadrantsNum = input.shift();
  input.splice(quadrantsNum, 1);
  let quadrants = input.splice(0, quadrantsNum);
  input = input.map((x) => {
    x = x.split(' ');
    return [x[0], +x[1], +x[2]];
  });
  quadrants = quadrants.map((a) => a.split(' '));
  quadrants = quadrants.map((x) => [+x[0], +x[1]]);

  let dataOut = '';
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i][0] === 'X' || input[i][0] === 'Y') {
      reflect(...input[i], quadrants);
    } else {
      dataOut += getOccurance(getQuadNums(input[i][1], input[i][2], quadrants)) + '\n';
    }
  }
  // process.stdout.write(dataOut);
}

function reflect(query, start, end, arr) {
  if (query === 'C') return arr;
  start--;
  if (query === 'X') {
    for (let i = start; i < end; i++) {
      arr[i] = [arr[i][0], -arr[i][1]];
    }
  }

  if (query === 'Y') {
    for (let i = start; i < end; i++) {
      arr[i] = [-arr[i][0], arr[i][1]];
    }
  }
}

function getQuadrant(point) {
  if (point[0] > 0 && point[1] > 0) return 1;
  if (point[0] < 0 && point[1] > 0) return 2;
  if (point[0] < 0 && point[1] < 0) return 3;
  if (point[0] > 0 && point[1] < 0) return 4;
  return 0;
}

function getQuadNums(start, end, arr) {
  start--;
  let out = [];
  for (let i = start; i < end; i++) {
    out.push(getQuadrant(arr[i]));
  }
  return out;
}

function getOccurance(arr) {
  const quad = [1, 2, 3, 4];
  let out = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === quad[i]) {
        out[i]++;
      }
    }
  }
  return out.join(' ');
}
