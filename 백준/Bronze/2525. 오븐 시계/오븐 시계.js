let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const time = input[0].split(' ').map(Number);

const hour = time[0];
const minute = time[1];
const ing = Number(input[1]);

const answer = (hour, minute, ing) => {
	minute += ing;
	
	if(minute >= 60){
		hour += Math.floor(minute/60);
		minute %= 60;
	}
	
	if(hour > 23){
		hour -= 24;
	}
	
	console.log(hour + " " + minute);
}

answer(hour, minute, ing);