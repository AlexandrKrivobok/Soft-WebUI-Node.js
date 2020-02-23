// function callbackFunc() {
//   console.log((Date.now() % 100000) / 1000);
// }

// setTimeout(callbackFunc, 1000, 'timeOut');
// setInterval(callbackFunc, 3000, 'interval');

const arr1 = ['▲', '►', '▼', '◄'];

function spinner(ob) {
  console.clear();
  console.log(arr1[ob.counter]);
  ob.counter++;
  if (ob.counter === 4) ob.counter = 0;
}

setInterval(spinner, 500, {counter: 0});

const arr2 = ['-', '-', '-', '-', '-', '-', '-'];

function load(ob) {
  console.clear();
  if (ob.counter === arr2.length) {
    ob.counter = -1;
    for (let i = 0; i < arr2.length; i++) {
      arr2[i] = '-';
    }
  }else{
    
    arr2[ob.counter] = '@';
  }


  console.log(arr2.join(''));
  ob.counter++;
}

setInterval(load, 500, {counter: 0});