let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]); // +
const b = Number(input[1]); // -
const v = Number(input[2]); // 높이

console.log(Math.ceil((v-b) / (a-b)));