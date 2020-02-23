let game1 = [
  [2, 1, 2],
  [1, 2, 1],
  [1, 2, 0]
];

let game2 = [
  [1, 2, 1],
  [2, 1, 2],
  [2, 1, 2]
];

let game3 = [
  [1, 2, 1],
  [2, 1, 2],
  [2, 1, 1]
];

let game4 = [
  [2, 2, 2],
  [0, 1, 1],
  [2, 1, 1]
];



function ticTacToe(gameArr) {
  // checking rows
  for (let i = 0; i < 3; i++) {
    if (new Set(gameArr[i]).size === 1 && gameArr[i][0] !== 0) return gameArr[i][0];
  }

  // checking columns
  for (let i = 0; i < 3; i++) {
    if (gameArr[0][i] === gameArr[1][i] && gameArr[0][i] === gameArr[2][i]) {
      if (gameArr[0][i] === 1) return 1;
      if (gameArr[0][i] === 2) return 2;
    }
  }

  // checking diagonals
  if (gameArr[0][0] === gameArr[1][1] && gameArr[0][0] === gameArr[2][2]) {
    if (gameArr[0][0] === 2) return 2;
    if (gameArr[0][0] === 1) return 1;
  }

  if (gameArr[0][2] === gameArr[1][1] && gameArr[0][2] === gameArr[2][0]) {
    if (gameArr[0][2] === 2) return 2;
    if (gameArr[0][2] === 1) return 1;
  }
  
  // -1 board is not finished yet
  for (let i = 0; i < gameArr.length; i++) {
    if (gameArr[i].includes(0)) {
      return -1;
    }
  }

  return 0;
}

// console.log(ticTacToe(game1));
// console.log(ticTacToe(game2));
// console.log(ticTacToe(game3));
// console.log(ticTacToe(game4));