function sortStr(str) {
  if (str === '') return '';

  let arr = str.split(' ');
  let resArr = [];

  arr.forEach(word => {
    let theWord = word;

    word.split('').forEach(letter => {
      if (!isNaN(+letter)) {
        resArr[letter - 1] = theWord;
      }
    });
  });

  return resArr.join(' ');
}

console.log(sortStr('is2 Thi1s T4est 3a'));
console.log(sortStr('4of Fo1r pe6ople g3ood th5e the2'));
console.log(sortStr(''));