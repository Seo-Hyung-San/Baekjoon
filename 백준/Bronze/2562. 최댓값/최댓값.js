let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

const max = Math.max(...input);
const sequence = input.indexOf(max) + 1;

console.log(max + "\n" + sequence);