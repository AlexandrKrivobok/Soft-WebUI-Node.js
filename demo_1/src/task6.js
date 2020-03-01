function series(length, minSqr) {
  let res = [];
  
  const firstNum = Math.sqrt(minSqr) % 1 === 0 ? Math.sqrt(minSqr) + 1 : Math.ceil(Math.sqrt(minSqr));

  for ( let i = 0; i < length; i++) {
    res.push(firstNum + i);
  }

  return res;
}

// console.log(series(10, 25));
// console.log(series(10, 24.5));