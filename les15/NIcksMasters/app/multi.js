export function multi(...nums) {
  return nums.reduce((p, c) => {
    return p * c;
  });
}