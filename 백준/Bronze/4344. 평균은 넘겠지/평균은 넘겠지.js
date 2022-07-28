const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i=1; i<=count; i++){
    let sum = 0;
    let cnt = 0;
    const scores = input[i].split(' ').map(Number);
    const n = scores.shift();
    
    sum = scores.reduce((acc, cur) => acc+=cur, 0);
    const avg = sum/n;
    
    for(let j=0; j<n; j++){
        if(scores[j]>avg)
        cnt++;
    }
    console.log((cnt/n*100).toFixed(3)+"%");
}