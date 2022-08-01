let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let num = Number(input);

let i = 2;
let result = [];

while(true){
	if(num % i == 0){
		num = num / i;
		result.push(i);
		i = 1;
	}
	
	i++;
	
	if(i>num){
		break;
	}
}

console.log(result.join("\n"));