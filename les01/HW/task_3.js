function cardsResieving(arrOfCards) {

  let result = [];

  let teamA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let teamB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  arrOfCards.forEach(str => {
    if (str[2] === 'R') {
      if (str[0] === 'A') {
        teamA[+str[1] - 1] = 'kicked';
      } else {
        teamB[+str[1] - 1 ] = 'kicked';
      }
    } else {
      if (str[0] === 'A') {
        if (typeof teamA[+str[1] - 1] === 'number') {
          teamA[+str[1] - 1] = `${teamA[+str[1] - 1]}`;
        } else {
          teamA[+str[1] - 1] = 'kicked';
        }
      } else {
        if (typeof teamB[+str[1] - 1] === 'number') {
          teamB[+str[1] - 1] = `${teamB[+str[1] - 1]}`;
        } else {
          teamB[+str[1] - 1] = 'kicked';
        }
      }
    }
  });

  let count = (team) => {
    let counter = 0;

    team.forEach(e => {
      if (e === 'kicked') {
        counter++;
      }
    });

    result.push(11 - counter);
  }

  count(teamA);
  count(teamB);

  return result;
}

console.log(cardsResieving(['A4Y', 'B6R', 'A4Y', 'B5R', 'B4R', 'B2R', 'B7R', 'B10R']));