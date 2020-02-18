let arrOfPoints = [
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
]

function getShortest(arrOfPoints) {
  let sourse = [...arrOfPoints];
  let result = [];
  let counter = getDistance(sourse[0], sourse[1]);

  sourse.forEach(point => {
    sourse.forEach(el => {
      if (el !== point) {
        if (getDistance(point, el) < counter) {
          counter = getDistance(point, el);
          result[0] = point;
          result[1] = el
        }
      }
    });
  });

  function getDistance(point1, point2) {
    let [x1, y1] = point1;
    let [x2, y2] = point2;

    const distance = Math.abs(
      Math.sqrt(
        Math.pow((x1 - x2), 2) +
        Math.pow((y1 - y2), 2)
      )
    );

    return distance;
  }

  return result;
}

console.log(getShortest(arrOfPoints));