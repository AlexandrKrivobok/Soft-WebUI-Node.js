export function sum(...nums) {
  return nums.reduce((p, c) => {
    if (typeof c == 'number' && !isNaN(c)){
      return p + c;
    } else {
      return p;
    }
  }, 0);
}