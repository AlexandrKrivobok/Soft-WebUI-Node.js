export function getLuckyTicket(context) {
  // validation
  if (typeof context !== 'object' || Array.isArray(context)) {
    return {status: 'failure', reason: 'wrong input type'};
  }

  let localMin = Math.abs(context.min);
  let localMax = Math.abs(context.max);

  if (!localMin || !localMax) {
    return {status: 'failure', reason: 'wrong input type'};
  }

  if (localMin !== parseInt(localMin) || localMax !== parseInt(localMax)) {
    return {status: 'failure', reason: 'non integer parameters'}
  }

  if (localMin > localMax) {
    return {status: 'failure', reason: 'min > max'};
  }

  if (
  localMin < 1 ||
  localMin > 999999  ||
  localMax < 1 ||
  localMax > 999999
  ) {
    return {status: 'failure', reason: 'out of range'};
  }

  
  let res = {};
  res.simpleCount = 0;
  res.hardCount = 0;

  for (localMin; localMin < localMax; localMin++) {
    if (checkEz(localMin)) {
      res.simpleCount += 1;
    }

    if (checkHrd(localMin)) {
      res.hardCount += 1;
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

  if (res.simpleCount === res.hardCount) {
    res.winner = `it's a Draw!`; 
  } else if (res.simpleCount > res.hardCount) {
    res.winner = `the winner is: EASY WAY`;
  } else {
    res.winner = `the winner is: HARD WAY`;
  }

  return res;
}
