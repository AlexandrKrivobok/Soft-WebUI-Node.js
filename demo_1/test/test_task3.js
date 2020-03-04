import {sortTriangle} from '../src/modules/task3.js'
export function testTriangles(ass) {
  describe('Test of task3', () => {
    it('correct parameters', () => {
      ass.deepEqual(sortTriangle([{vertices: 'ABD', a: 2, b: 2, d: 2 }, {vertices: 'ABC', a: 3, b: 3, c: 3 }]), ['ABC', 'ABD']);
    });

    it('incorrect input data type', () => {
      ass.deepEqual(sortTriangle(true), {status: 'failure', reason: 'incorrect input type. should be an arr'});
    });

    it('triangles names are not unique', () => {
      ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 2, b: 2, c: 2 }, {vertices: 'ABC', a: 3, b: 3, c: 3 }]), {status: 'failure', reason: 'some of triangles names are not unique'});
    });
    
    it('unapropriate data in triangle', () => {
      ass.deepEqual(sortTriangle([{vertices: 'ABD', a: 2, x: 2, y: 2 }, {vertices: 'ABC', a: 3, b: 3, c: 3 }]), {status: 'failure', reason: 'some of triangles is incorrect'});
    });
    
  });
}

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