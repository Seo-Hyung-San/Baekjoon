let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let count = 0;

while(true){
	if(input % 5 == 0){
		console.log(input/5 + count);
		break;
	}
	
	if(0 > input){
		console.log(-1);
		break;
	}
	
	count++;
	input -= 3;
}