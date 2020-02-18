class Triangle {
  constructor(name, a, b, c) {
    this.vertices = name;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

let tr1 = new Triangle('ABD', 33, 44, 55);
let tr2 = new Triangle('ABC', 30, 40, 50);
let tr3 = new Triangle('ABD', 3, 4, 5);

let arrOfTriangles = [];
arrOfTriangles.push(tr1, tr2, tr3);

function sortTriangles(arrOfTriangles) {
  let changedData = [];

  arrOfTriangles.forEach(tr => {
    let {a, b, c, vertices : name} = tr;
    
    changedData.push({
      area: findArea(a, b, c),
      name: name,
    });
  });

  function findArea(a, b, c){
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return area;
  }

  changedData.sort((a, b) => a.area < b.area ? 1 : -1);
  

  return changedData.map(e => e.name);
}



console.log(sortTriangles(arrOfTriangles));
// export {sortTriangles};