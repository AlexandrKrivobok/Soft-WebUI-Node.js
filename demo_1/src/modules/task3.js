export function sortTriangle(arrOfTriangles) {
  //validation
  if (!Array.isArray(arrOfTriangles)) {
    return {status: 'failure', reason: 'incorrect input type. should be an arr'};
  }

  const arrOfNames = arrOfTriangles.map(e => e.vertices);

  if (arrOfNames.length !== new Set(arrOfNames).size) {
    return {status: 'failure', reason: 'some of triangles names are not unique'};
  }

  let valObj = false;
  
  arrOfTriangles.forEach(e => {
    if (
    !e[e.vertices[0].toLowerCase()] ||
    !e[e.vertices[1].toLowerCase()] ||
    !e[e.vertices[2].toLowerCase()] ||
    e[e.vertices[3]]
    ) {
      valObj = {status: 'failure', reason: 'some of triangles is incorrect'};
    }
  });

  if (valObj) return valObj;

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