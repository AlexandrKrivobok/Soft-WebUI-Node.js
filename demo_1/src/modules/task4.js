export function checkPolindrome(num) {
  // validation
  if (isNaN(num)) {
    return {status: 'failure', reason: 'wrong input type'};
  }

  if (num !== parseInt(num)) {
    return {status: 'failure', reason: 'non integer input'}
  }

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
