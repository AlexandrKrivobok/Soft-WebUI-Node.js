//let tr1 = {
//   vertices: 'ABC',
//   a: 10,
//   b: 20,
//   c: 22.36,
// }
  
class Triangle {
  constructor(name, a, b, c) {
    this.vertices = name;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

let tr1 = new Triangle('ABC', 30, 40, 50);
let tr2 = new Triangle('ABD', 3, 4, 5);

let arrOfTriangles = [];
arrOfTriangles.push(tr1, tr2);

function sortTriangles(arrOfTriangles) {

  arrOfTriangles.forEach(tr => {
    let {a, b, c, vertices : name} = tr;
    console.log(a, b, c, name);
  });
}

sortTriangles(arrOfTriangles);
// export {sortTriangles};