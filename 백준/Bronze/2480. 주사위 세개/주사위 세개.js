let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

if(a == b && a == c && b == c){
	console.log(10000 + (a*1000));
}

if(a != b || a != c || b != c){
	if(a == b || a == c){
		console.log(1000 + (a*100));
	}
	
	if(b == c){
		console.log(1000 + (b*100));
	}
}

if(a != b && a != c && b != c){
	const sort = [a,b,c].sort();
	console.log(sort.pop() * 100);
}