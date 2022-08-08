let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const cards = input[1].split(" ").map(Number);
const NM = input[0].split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

let answer = 0;
let sum;
let diff;

for(let i=0; i<N; i++){
	for(let j=i+1; j<N; j++){
		for(let k=j+1; k<N; k++){
			sum = cards[i] + cards[j] + cards[k];
			diff = M - sum;
			
			if(diff >= 0 && answer <= sum){
				answer = sum;
			}
		}
	}
}

console.log(answer);