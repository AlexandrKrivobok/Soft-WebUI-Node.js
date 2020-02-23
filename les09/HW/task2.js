board = [
  [0,0,0,2,2,0],
  [0,3,0,0,0,0],
  [0,3,0,1,0,0],
  [0,3,0,1,0,0]
];

attacks = [[2, 1], [1, 3], [4, 2], [4, 1], [4, 4]];

// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }

function damagedOrSunk(boards, attacks) {
  let compareArr = [];
  let elements = [];
  let result = {};
  result.sunk = 0;
  result.damaged = 0;
  result.notTouched = 0;
  result.points = 0;

  // taking all the "ships" parts into arr
  boards.forEach(row => {
    row.forEach(el => {
      if (el !== 0) {
        elements.push(el);
      }
    });
  });
  
  // taking all the "hits" into arr
  attacks.forEach(e => {
    if (boards[4 - e[1]][e[0] - 1] !== 0) {
      compareArr.push(boards[4 - e[1]][e[0] - 1]);
    }
  });

  // sorting "ships" and "hits" arrs (not rly necessary for func work, but for debugging ^_^)
  // elements.sort((a,b) => a - b);
  // compareArr.sort((a,b) => a - b);

  let countOfShips = new Set(elements).size;  // this needs to count unque ships for later notTouched formula

  // comparing of "ships" and "hits" to realise what is the "points" and "sunk" situation
  // mutating "ships" (deleting "hitted" numbers) for "damaged" counting in future
  for (let i = 0; i < compareArr.length; i++) {
    let elementsIndex = elements.indexOf(compareArr[i]);
    if (elementsIndex != -1) {
      elements.splice(elementsIndex, 1);
      result.points += 0.5;

      if (elements.indexOf(compareArr[i]) === -1) {
        result.points += 1;
        result.sunk += 1;
      }
    }
  }  

  // making Sets to compare "ships" and "hits" by unique values for "damaged" counting
  const setCompareArr = new Set(compareArr);
  const setElements = new Set(elements);

  // "damaged" counting
  setCompareArr.forEach(el => {
    if (setElements.has(el)) {
      result.damaged += 1;
    }
  });

  // final countings of notTouched and points (just a simple arithmetic)
  result.notTouched = countOfShips - result.sunk - result.damaged;
  result.points -= result.notTouched;

  return result;
}

// console.log(damagedOrSunk(board, attacks));