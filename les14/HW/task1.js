function calculate(str) {

  if (str.indexOf('*') !== -1) {
    const quipuArr = str.split('*').map(quipuNum => quipuNum.split('~'));
    const numsArr = quipuToNumsArr(quipuArr);

    return numsArr[0] * numsArr[1];
  } else
  if (str.indexOf('/') !== -1) {
    const quipuArr = str.split('/').map(quipuNum => quipuNum.split('~'));
    const numsArr = quipuToNumsArr(quipuArr);

    return numsArr[0] / numsArr[1];
  } else
  if (str.indexOf('+') !== -1) {
    const quipuArr = str.split('+').map(quipuNum => quipuNum.split('~'));
    const numsArr = quipuToNumsArr(quipuArr);

    return parseInt(numsArr[0]) + parseInt(numsArr[1]);
  } else
  if (str.indexOf('-') !== -1) {
    const quipuArr = str.split('-').map(quipuNum => quipuNum.split('~'));

    const numsArr = quipuToNumsArr(quipuArr);

    return parseInt(numsArr[0]) - parseInt(numsArr[1]);
  }

  function quipuToNumsArr(quipuArr) {
    let numsArr = [];

    quipuArr.forEach((quipuNum, i) => {
      let strNum = '';

      quipuNum.forEach((orderNum, j, arr) => {
        if (j !== arr.length - 1) {
          strNum += `${orderNum.length}`;
        } else if (orderNum.length !== 0) {
          strNum += `${orderNum.length}`;
        }
      });

      numsArr[i] = strNum;

    });

    return numsArr;
  }
}

// console.log(calculate("@~@@*@@"));
// console.log(calculate("@~@@-@@~~~"));
// console.log(calculate("@@@@~@@~@~@@@@@@@/@@@@@@~~~@")); // 4217/6001 = 0.7027162139643393
// console.log(4217/6001); 