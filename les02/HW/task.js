// ---------------------- concat() ----------------------

function myConcat(sourse, ...stringsToConcat) {

  let strLength = sourse.length;
  let result = sourse

  for (let i = 0; i < strLength - 3; i++) {
    result += stringsToConcat[i];
  }

  return result
}

console.log(myConcat('Hello', ',', 'World!'));

// ---------------------- lastIndexOf() ----------------------

function myLastIndexOf(sourse, subStr, index = sourse.length - 1) {
  for (let i = index; i >= 0; i--) {
    if (sourse[i] === subStr[subStr.length - 1]) {
      let subStrLength = subStr.length - 2;
      let sourseOrder = 0;
      
      for (let j = subStrLength; j >= 0; j--) {
        sourseOrder++;
        
        if (subStr[j] !== sourse[i - sourseOrder]) { 
          break;
        }
        
        return i - subStr.length + 1;
      }
    }
  }

  return -1;
}

console.log(myLastIndexOf('qwerty', 'wer', '4'));
console.log(myLastIndexOf('qwerty', 'asawer', '4'));

// ---------------------- includes() ----------------------

function myIncludes(sourse, subStr) {
  let sourseMax = sourse.length - 1;

  for (let i = 0; i < sourseMax; i++) {
    if (sourse[i] === subStr[0]) {
      let subStrMax = subStr.length - 1;
      for (let j = 1; j < subStr.length - 1; j++) {
        if (subStr[j] !== sourse[i + j]) {
          break;
        }
      }
    }
  }
}