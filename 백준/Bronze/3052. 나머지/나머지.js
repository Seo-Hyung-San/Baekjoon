let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

let list = [];

for(let i=0; i<10; i++){
	list.push(input[i]%42);
}

let set = new Set(list);
let sets = [...set];

console.log(sets.length);