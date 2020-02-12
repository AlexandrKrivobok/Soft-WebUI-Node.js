function nextVersion(str) {  
  let arr = str.split('.').map(n => +n);
  
  arr[arr.length - 1] += 1;

  for (let i = arr.length - 1; i > 0; i--) {

    if (arr[i] > 9) {
      arr[i] = 0;
      arr[i - 1] += 1;
    }
  }
  
  return arr.join('.');
}

console.log(nextVersion('21.0.0.0.9'));
console.log(nextVersion('10.0.0.0'));
console.log(nextVersion('10.11.27.44.0.0.0.'));