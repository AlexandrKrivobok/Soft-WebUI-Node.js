function findPartMaxProd(n){
  let partitionArr = [];
  let lastIndex = 0;
  partitionArr[partitionArr.length] = n;
  let allPartitions = [];
  let resPartitionsArray = [];
  let resValue = 0;

  while (partitionArr.length < n) {
    allPartitions.push([...partitionArr]);

    let remVal = 0;

    while(lastIndex >= 0 && partitionArr[lastIndex] === 1) {
      
      remVal += partitionArr[lastIndex];
      lastIndex--;

      // if ( partitionArr.reduce((p,c) => p + c) > n) {
      //   partitionArr.pop();
      // }
    }

    if (lastIndex < 0) return;

    partitionArr[lastIndex]--;
    remVal++;

    while (remVal > partitionArr[lastIndex]) {
      partitionArr[lastIndex + 1] = partitionArr[lastIndex];
      remVal = remVal - partitionArr[lastIndex];
      lastIndex++;

      // if ( partitionArr.reduce((p,c) => p + c) > n) {
      //   partitionArr.pop();
      // }
    }

    partitionArr[lastIndex + 1] = remVal;
    lastIndex++;
  }

  console.log(allPartitions);

  allPartitions.forEach(part => {
    let curComp = part.reduce((p, c) => p * c);

    if ( curComp > resValue) {
      resValue = curComp;
    }
  });

  allPartitions.forEach(part => {
    let c = part.reduce((p, c) => p * c);
    if ( c == resValue) {
      resPartitionsArray.push(part);
    }
  });

  console.log(resValue);
  console.log(resPartitionsArray);

  if (n > 3) {
    resPartitionsArray.forEach(e => {
      let i = 0;

      while (e[i]) {
        if(e[i] === 1) {
          e.length = i;
        }
        i++
      }
    });
  }

  return [...resPartitionsArray, resValue]
}

console.log(findPartMaxProd(10));