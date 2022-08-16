const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();

const result = input.map(v => {
  const [a, b] = v.split(' ');  
    
  let r = 1;

  for (let j = 0; j < b; j++) {
    r = (r * a) % 10;
  }
    
  return r === 0 ? 10 : r;
});  

console.log(result.join("\n"));