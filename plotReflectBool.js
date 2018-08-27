'use strict';
const fs = require('fs');
const data = fs.readFileSync('./data.dat', 'utf-8');

console.time('processData');
// process.stdout.write(processData(data));
processData(data);
console.timeEnd('processData');

function processData(input) {
  let quadrants;
  console.time('parse');
  ({ quadrants, input } = parseData(input));
  console.timeEnd('parse');
  return transformData(input, quadrants);
}

function parseData(input) {
  input = input.split('\n');
  const quadrantsNum = input.shift();
  input.splice(quadrantsNum, 1);
  let quadrants = input.splice(0, quadrantsNum);
  input = splitQuery(input);
  quadrants = splitQuad(quadrants);
  return { quadrants, input };
}

function transformData(input, quadrants) {
  let dataOut = '';
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i][0] === 'X' || input[i][0] === 'Y') {
      reflect(...input[i], quadrants);
    } else {
      dataOut += getOccurance(input[i][1], input[i][2], quadrants) + '\n';
    }
  }
  return dataOut;
}

function reflect(query, start, end, arr) {
  if (query === 'X') {
    for (let i = start; i < end; i++) {
      arr[i][1] = !arr[i][1];
    }
  }

  if (query === 'Y') {
    for (let i = start; i < end; i++) {
      arr[i][0] = !arr[i][0];
    }
  }
}

function splitQuad(data) {
  let contain = [];
  let segment;
  for (let i = 0; i < data.length; i++) {
    segment = data[i].split(' ');
    contain.push([+segment[0] > 0 ? true : false, +segment[1] > 0 ? true : false]);
  }
  return contain;
}

function splitQuery(data) {
  let contain = [];
  let segment;
  for (let i = 0; i < data.length; i++) {
    segment = data[i].split(' ');
    contain.push([segment[0], +segment[1] - 1, +segment[2]]);
  }
  return contain;
}

function getOccurance(start, end, arr) {
  let q1 = 0;
  let q2 = 0;
  let q3 = 0;
  let q4 = 0;
  for (let i = start; i < end; i++) {
    if (arr[i][0] === true && arr[i][1] == true) {
      q1++;
    } else if (arr[i][0] === false && arr[i][1] === true) {
      q2++;
    } else if (arr[i][0] === false && arr[i][1] === false) {
      q3++;
    } else if (arr[i][0] === true && arr[i][1] === false) {
      q4++;
    }
  }

  return `${q1} ${q2} ${q3} ${q4}`;
}

