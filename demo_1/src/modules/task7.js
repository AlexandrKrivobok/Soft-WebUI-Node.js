export function fibRow(context) {
  // validation
  if (typeof context !== 'object' || Array.isArray(context)) {
    return {status: 'failure', reason: 'wrong input type'};
  }

  let min, max;
  let length;

  if (context.min && context.max) {
    if(typeof context.min !== 'number' || typeof context.max !== 'number') {
      return {status: 'failure', reason: 'wrong type of value'};
    }
    
    min = Math.abs(context.min);
    max = Math.abs(context.max);
  } else if(context.length) {
    if(typeof context.length !== 'number') {
      return {status: 'failure', reason: 'wrong type of value'};
    }

    if (parseInt(context.length) !== context.length) {
      return {status: 'failure', reason: 'non integer length'};
    }

    length = context.length;
  } else {
    return {status: 'failure', reason: 'value is missing'};
  }

  

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
