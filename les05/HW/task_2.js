//console.log(['Яблоко', 'Банан', 'Ананас'].map(el=>el[0])); // ['Я', 'Б', 'А']

console.log(['Яблоко', 'Банан', 'Ананас'].reduce(function(acc, cur) {
  acc.push(cur[0]);
  return acc;
}, []));

//console.log(['Яблоко', 'Банан', 'Ананас'].filter(el=>el[0].toLowerCase() == 'a')); // ['Ананас']

console.log(['Яблоко', 'Банан', 'Ананас'].reduce(function(acc, cur) {
  if (cur[0].toLowerCase() === 'а') {
    acc.push(cur);
  }
  return acc;
}, []));

//console.log(['Яблоко', 'Банан', 'Ананас'].forEach((e, i, arr) => arr[i] = `${i + 1}: ${el}`)); // ['Я', 'Б', 'А']

console.log(['Яблоко', 'Банан', 'Ананас'].reduce(function(acc, cur, i, arr) {
  arr[i] = `${i + 1}: ${cur}`;
  return arr;
}, []));