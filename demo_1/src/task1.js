// import { ifUndData } from './validation.js';

function chessPlate(height, width, symb) {  
  let result = '';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i % 2 === 0) {
        result += symb + ' ';
      } else {
        result += ' ' + symb;
      }
    }
    result += '\n';
  }

  // let pre = document.createElement('pre');
  // document.body.append(pre);
  // pre.innerHTML = result;

  return result;
}

// console.log(chessPlate(5, 7, '#'));