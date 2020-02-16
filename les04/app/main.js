cars //Массив с объектами
let cars2 = [];

for (let i = 0; i < 10; i++) {
  cars2.push(cars[i]);
}

function countColor(carsArr){
  //Выдает в виде массива все цвета всех машин в исходном массиве
  //['БІЛИЙ', "ЧОРНИЙ", "БЛАКИТНИЙ", ...]

  let result = [];

  for (car of carsArr) {
    result.push(car.COLOR);
  }

  return result;
}

function maxColor(carsArr){
  //Выдает в виде строки цвет наиболее часто встречаемый в массиве
  //'ЗЕЛЕНИЙ'

  let counter = {};

  countColor(carsArr).forEach(color => {
    if (!counter.hasOwnProperty(color)) {
      Object.defineProperty(counter, color, {
        value: 1,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      counter[color] += 1;
    }
  });

  let popularColorNumber = 0;
  let mostPopularColor = '';

  for (color in counter) {
    if (counter[color] > popularColorNumber) {
      popularColorNumber = counter[color];
      mostPopularColor = color;
    }
  }
  
  return mostPopularColor;
}

function countCars(carsArr){
  //Выдает массив объектов с именем ОВД и количеством автомобилей
  // [{OVD: 'Название ОВД', count : количество_машин}, ...]

  let result = [];
  let isIn = true;

  carsArr.forEach(car => {
    isIn = true;

    for (let i = 0; i < result.length; i++) {
      if (result[i].OVD === car.OVD) {
        result[i].count++;
        isIn = false;
        break;
      }
    }

    if (isIn) {
      result.push({
        OVD: car.OVD,
        count: 1,
      });
    }
  });

  return result;
}

function oldAndNew(carsArr){
  //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
  //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]

  let sortedData = [];
  let result = [];

  carsArr.forEach(car => {
    sortedData.push({
      name: car.BRAND,
      date: car.THEFT_DATA,
    });
  });

  let max = 0;
  let min = Date.parse(sortedData[0].date);
  
  sortedData.forEach(car => {
    let milliseconds = Date.parse(car.date);

    if (milliseconds < min) {
      min = milliseconds;
      result[0] = car;
    } else if (milliseconds > max) {
      max = milliseconds;
      result[1] = car;
    }
  });

  return result;
}

console.log(countColor(cars));
console.log(maxColor(cars));
console.log(countCars(cars));
console.log(oldAndNew(cars));