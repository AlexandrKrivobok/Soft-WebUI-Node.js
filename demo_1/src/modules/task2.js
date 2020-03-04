class Envelope {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

let env1 = new Envelope(88, 13);
let env2 = new Envelope(81, 59);
let env3 = new Envelope(3, 4);
let env4 = new Envelope(1, 2);

export function rectangleInRectangle(env1, env2) {
  //validation
  if (typeof env1 != 'object' || typeof env2 != 'object') {
    return {status: 'failure', reason: 'wrong input type. should be objects'}
  }

  if (!(env1.w && env1.h && env2.w && env2.h)) {
    return {status: 'failure', reason: 'parameters missing'};
  }

  if (
  typeof env1.w !== 'number' ||
  typeof env1.h !== 'number' ||
  typeof env2.w !== 'number' ||
  typeof env2.h !== 'number'
  ) {
    return {status: 'failure', reason: 'wrong parameters type'};
  }

  if (env1.w <= 0 || env1.h <= 0 || env2.w <= 0 || env2.h <= 0) {
    return {status: 'failure', reason: 'out of range. width, height should be in range > 0'};
  }

  let h1 = Math.min(env1.w, env1.h);
  let w1 = Math.max(env1.w, env1.h);

  let h2 = Math.min(env2.w, env2.h);
  let w2 = Math.max(env2.w, env2.h);

  if (h1 > h2 && w1 > w2) return 1;
  if (h2 > h1 && w2 > w1) return 2;
 
  // p = w1, a = w2, b = h2, q = h1
  if (w1 > w2 && h2 >= (w1 * h1 * w2 * 2 + (w1 * w1 - h1 * h1) * Math.sqrt(w1 * w1 + h1 * h1 - w2 * w2))/ (w1 * w1 + h1 * h1)) {
    return 2;
  }
 
  if (w2 > w1 && h1 >= (w2 * h2 * w1 * 2 + (w2 * w2 - h2 * h2) * Math.sqrt(w2 * w2 + h2 * h2 - w1 * w1))/ (w2 * w2 + h2 * h2)) {
    return 1;
  }

  return 0;
}

// console.log(envelopeInput(env1, env2));
// console.log(envelopeInput(env3, env4));