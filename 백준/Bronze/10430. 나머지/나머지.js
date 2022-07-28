let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const [A,B,C] = [input[0],input[1],input[2]];

for(let i=0; i<=3; i++){
	switch(i){
		case 0:
			console.log( (A+B)%C );
			break;
		case 1:
			console.log( ((A%C) + (B%C))%C );
			break;
		case 2:
			console.log( (A*B)%C );
			break;
		case 3:
			console.log( ((A%C) * (B%C))%C );
			break;
	}
}