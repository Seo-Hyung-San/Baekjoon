let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);
let sum;
let a = 0;

while(true){
	a++;
	
	sum = Math.floor(num / 10) + num % 10;
	num = (num % 10) * 10 + sum % 10;
	
	if(Number(input) === num){
		break;
	}
}

console.log(a);