function binary(num) {
  let binaryArr = num.toString(2).split('').map(e => +e);
  let counter = 0;

  for (let val of binaryArr) {
    if (val === 1) {
      counter += 1;
    }
  }

  return counter;
}

console.log(binary(8));
console.log(binary(22));
console.log(binary(2342));