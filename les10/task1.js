function getSolution(arr, sum) {
  let sums = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let curSums = []

    sums.forEach(e => {
      curSums.push(e + arr[i]);
      curSums.push(e - arr[i]);
    });

    sums = curSums;
  }

  return sums.includes(sum);
}

console.log(getSolution([1, 3, 4], 0));
