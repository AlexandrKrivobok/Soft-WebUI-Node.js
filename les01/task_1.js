function nextVersion(oldVersion) {  
  let arr = oldVersion.split('.').map(n => +n);

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i] + 1;

    if (arr[i] > 9) {
      arr[i] = 0;
      arr[i - 1] = arr[i - 1] + 1;
    }
  }
  
  return arr.join('.');
}

console.log(nextVersion('21.9.9.9.9'));