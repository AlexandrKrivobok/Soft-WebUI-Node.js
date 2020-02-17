let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd'];

// ---------------------- pop() ----------------------

function myPop(arr) {
  const result = arr[arr.length - 1];
  arr.length -= 1;
  return result;
}

// console.log(myPop(testArr));
// console.log(testArr);

// ---------------------- push() ----------------------

function myPush(arr, ...args) {
  let iterations = args.length;
  let sourseLength = arr.length;

  for (let i = 0; i < iterations; i++) {
    arr[sourseLength + i] = args[i];
  }

  return arr.length;
}

// function myPush(arr, ...args) {
//   let newarr = [...arr, ...args];

//   return arr.length;
// }

// console.log(testArr);
// console.log(myPush(testArr, 'e', 'f', 'g'));
// console.log(testArr);

// ---------------------- shift() ----------------------

function myShift(arr) {
  const result = arr[0];
  const iterations = arr.length;

  for (let i = 0; i < iterations; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;

  return result;
}

// console.log(testArr);
// console.log(myShift(testArr));
// console.log(testArr);

// ---------------------- unshift() ----------------------

function myUnshift(arr, ...args) {
  const iterations = args.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + iterations] = arr[i];
  }

  for (let i = 0; i < iterations; i++) {
    arr[i] = args[i];
  }

  return arr.length;
}

// console.log(testArr);
// console.log(myUnshift(testArr, 'e', 'f', 'g'));
// console.log(testArr);

// ---------------------- concat() ----------------------

function myConcat(arr, ...args) {
  let result = [];
  myPush(result, ...arr);

  let recConcat = (resultArr, arrOfArgs) => {
    for (let i = 0; i < arrOfArgs.length; i++) {
      if (!Array.isArray(arrOfArgs[i])) {
        myPush(resultArr, arrOfArgs[i]);
        continue;
      } else {
        recConcat(resultArr, arrOfArgs[i]);
      } 
    }
  }
    
  recConcat(result, args);

  return result;
}

// console.log(testArr);
// console.log(myConcat(testArr, 'e', ['f', 'g', ['h', 'i', 'j']]));
// console.log(testArr);