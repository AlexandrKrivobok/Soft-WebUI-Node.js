export function getNumbers(length, minSqr) {
  // validation
  if (typeof length !== 'number' || typeof minSqr !== 'number' || isNaN(length) || isNaN(minSqr)) {
    return {status: 'failure', reason: 'incorrect input type'}
  }

  let len = Math.abs(length);
  let sqr = Math.abs(minSqr);

  if (len !== parseInt(len)) {
    return {status: 'failure', reason: 'non integer length'};
  }

  let res = [];
  
  const firstNum = Math.sqrt(sqr) % 1 === 0 ? Math.sqrt(sqr) + 1 : Math.ceil(Math.sqrt(sqr));

  for ( let i = 0; i < len; i++) {
    res.push(firstNum + i);
  }

  return res.join(', ');
}
