let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const hour = Number(input[0]);
const minute = Number(input[1]);

const getAlarm = (hour, minute) => {
	minute -= 45;
	
	if(minute < 0){
		minute += 60;
		hour--;
		
		if(hour == -1){
			hour = 23;
		}
	}
	
	console.log(hour + " " + minute);
}

getAlarm(hour, minute);