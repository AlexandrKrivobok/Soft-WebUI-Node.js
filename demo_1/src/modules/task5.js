export function getLuckyTicket({min, max}) {
  let localMin = min;
  let localMax = max;
  let res = {};
  res.ez = 0;
  res.hrd = 0;

  for (localMin; localMin < localMax; localMin++) {
    if (checkEz(localMin)) {
      res.ez += 1;
    }

    if (checkHrd(localMin)) {
      res.hrd += 1;
    }
  }

  function checkEz(num){
    let 
      rank1 = num % 10, 
      rank2 = parseInt(num % 100 / 10),
      rank3 = parseInt(num % 1000 / 100),
      rank4 = parseInt(num % 10000 / 1000),
      rank5 = parseInt(num % 100000 / 10000),
      rank6 = parseInt(num % 1000000 / 100000);

    if (rank1 + rank2 + rank3 === rank4 + rank5 + rank6) {
      return true;
    }

    return false;
  }

  function checkHrd(num){
    let 
      rank1 = num % 10, 
      rank2 = parseInt(num % 100 / 10),
      rank3 = parseInt(num % 1000 / 100),
      rank4 = parseInt(num % 10000 / 1000),
      rank5 = parseInt(num % 100000 / 10000),
      rank6 = parseInt(num % 1000000 / 100000);

    if (rank1 + rank3 + rank5 === rank2 + rank4 + rank6) {
      return true;
    }

    return false;
  }

  if (res.ez === res.hrd) {
    res.winner = `it's a Draw!`; 
  } else if (res.ez > res.hrd) {
    res.winner = `the winner is: EASY WAY`;
  } else {
    res.winner = `the winner is: HARD WAY`;
  }

  return res;
}

// console.log(getLuckyTicket({min:1, max:999999}));
// console.log(getLuckyTicket({min:123221, max:452999}));
// console.log(getLuckyTicket({min:2332, max:88594}));