export function fibRow({min, max, length}) {
  let res = [];
  let prev = 1;
  let cur = 1;
  let sum = 2;

  if (max && min) {
    while(cur < max) {
      if(cur >= min) {
        res.push(cur);
      }

      sum = prev + cur;
      prev = cur;
      cur = sum;      
    }
  }

  if (length) {
    while(cur.toString().length <= length) {
      if(cur.toString().length === length) {
        res.push(cur);
      }

      sum = prev + cur;
      prev = cur;
      cur = sum;      
    }
  }

  return res;
}

// console.log(fibInRange({min:10, max:100}));
// console.log(fibInRange({length: 4}));