let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = [+input[0], +input[2]];
const [hascard, card] = [new Set(input[1].split(' ').map(Number)), input[3].split(' ').map(Number)];

let ar = '';
for(let i=0; i<b; i++){
	if(hascard.has(card[i])){
		ar += 1 + ' ';
	}else{
		ar += 0 + ' ';
	}
}

console.log(ar);