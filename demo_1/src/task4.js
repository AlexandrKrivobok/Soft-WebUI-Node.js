function takePalindrom(num) {
  let myStr = num.toString();
  let myIndex = myStr.length - 1;

  for ( let i = 0; i < myIndex; i++) {
    let j = 0;
    while (j - i < 1) {
      let subNumber = myStr.substr(j, myStr.length - i);

      if (isPalindrome(subNumber)) return subNumber;
      j++;
    }
  }

  function isPalindrome(str) {
    if (parseInt(str) < 10) return 0;

    let  strReverse = str.split('').reverse().join('');

    if (strReverse == str) {

      return str;
    } else {

      return 0;
    }
  }

  return 0;
}

// console.log(takePalindrom(11221));    
// console.log(takePalindrom(102873642983888374889));
// console.log(takePalindrom(111));
// console.log(takePalindrom(1));