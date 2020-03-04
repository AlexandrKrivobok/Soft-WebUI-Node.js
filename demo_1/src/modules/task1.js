export function createCheeseBoard(height, width, symb) {
  //validation
  if (!width || !height || !symb) {
    return {status: 'failure', reason: 'some of parameters missed'};
  }

  if (typeof width !== 'number' || typeof height !== 'number' || typeof symb !== 'string') {
    return {status: 'failure', reason: 'wrong input type. width, height - numbers, symb - string'};
  }

  if (height % 1 !== 0 || width % 1 !== 0) {
    return {status: 'failure', reason: 'width, height must be an integer'};
  }

  let myWidth = Math.abs(width);
  let myHeight = Math.abs(height);

  if (myHeight < 1 || myHeight > 50 || myWidth < 1 || myWidth > 50) {
    return {status: 'failure', reason: 'input values are not in range. width and height should be in range 1 - 50'};
  }
  
  let result = '';

  for (let i = 0; i < myHeight; i++) {
    for (let j = 0; j < myWidth; j++) {
      if (i % 2 === 0) {
        result += symb + ' ';
      } else {
        result += ' ' + symb;
      }
    }
    result += '\n';
  }

  return result;
}

// console.log(createCheeseBoard(5, 7, '#'));