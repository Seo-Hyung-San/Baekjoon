let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);
const list = input[1].split(' ');
const max = Math.max(...list);
let sum = 0;

for(let i=0; i<num; i++){
	sum += list[i]/max*100;
}

console.log( sum / num );