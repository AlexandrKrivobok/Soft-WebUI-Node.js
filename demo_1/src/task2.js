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

function envelopeInput(env1, env2) {
  let h1 = Math.min(env1.a, env1.b);
  let w1 = Math.max(env1.a, env1.b);

  let h2 = Math.min(env2.a, env2.b);
  let w2 = Math.max(env2.a, env2.b);

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

console.log(envelopeInput(env1, env2));
console.log(envelopeInput(env3, env4));