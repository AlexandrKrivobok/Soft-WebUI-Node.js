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
  let isMatch = false;
  for (let i = index; i >= 0; i--) {
    if (sourse[i] === subStr[subStr.length - 1]) {
      let subStrIndex = subStr.length - 2;
      let sourseOrder = 0;
      
      for (let j = subStrIndex; j >= 0; j--) {
        sourseOrder++;
        
        if (subStr[j] !== sourse[i - sourseOrder]) {
          isGood = false;
          break;
        }
        
        isMatch = true;
      }
    }

    if (isMatch) return i - subStr.length + 1;
  }

  return -1;
}

console.log(myLastIndexOf('qwerty', 'wer', '4'));
console.log(myLastIndexOf('qwerty', 'asawer', '4'));
console.log(myLastIndexOf('qweraswerjjdkls', 'wer'));

// ---------------------- includes() ----------------------

function myIncludes(sourse, subStr, index = 0) {
  let sourseMaxIndex = sourse.length - 1;
  let isMatch = false;

  if (index >= sourse.length) return false;

  for (let i = index; i < sourseMaxIndex; i++) {
    if (sourse[i] === subStr[0]) {
      let subStrMaxIndex = subStr.length;

      for (let j = 1; j < subStrMaxIndex; j++) {
        if (subStr[j] !== sourse[i + j]) {
          isMatch = false;
          break;
        }

        isMatch = true;
      }

      if (isMatch) return true;
    }
  }

  return false;
}

console.log(myIncludes('hellow, world!', 'world'));
console.log(myIncludes('hellow, world!', 'world', 3));
console.log(myIncludes('qwerty qwerty  ll  ll  gg', 'erty ', 7));

// ---------------------- repeat() ----------------------

function myRepeat(sourse, count) {
  let intCount = parseInt(count);

  if (intCount < 1) throw new RangeError('Out of range, use positive numbers');

  let result = '';

  for (let i = 0; i < intCount; i++) {
    result += sourse;
  }

  return result;
}

console.log(myRepeat('hi', 5));
console.log(myRepeat('hi', 2.5));
// console.log(myRepeat('hi', 0));
// console.log(myRepeat('hi', -5));

// ---------------------- substr() ----------------------

function mySubstr(sourse, start, length = sourse.length - start) {
  let startIndex = start;
  let result = '';

  if (start < 0) {
    startIndex = sourse.length + start;
    length = sourse.length - startIndex;
  }

  for (let i = 0; i <= length - 1; i++) {
    result += sourse[startIndex + i];
  }

  return result;
}


console.log(mySubstr('hello!', 0, 2)); // he
console.log(mySubstr('Hello!', 3, 1)); // l
console.log(mySubstr('Hello!', 2));    // llo!
console.log(mySubstr('Hello!', -2));   // o!

// ---------------------- substring() ----------------------

function mySubstring(sourse, start = 0, end = sourse.length) {
  if (start < 0 || end < 0) throw new Error('Out of range, use positive numbers');

  if (start > end) {
    a = end;
    end = start;
    start = a;
  }

  console.log(start, end);

  let result = '';

  for (let i = start; i < end; i++) {
    result += sourse[i];
  }

  return result;
}

console.log(mySubstring('hello!', 0, 2)); // he
console.log(mySubstring('Hello!', 3, 1)); // el
console.log(mySubstring('Hello!', 2));    // llo!
// console.log(mySubstring('Hello!', -2));   // o!