function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

module.exports = {
  getCost: (arr) => {
    let [allGcd] = arr;
    for (let j = 1; j < arr.length; j++) {
      allGcd = gcd(allGcd, arr[j]);
    }
    if (allGcd === 1) {
      return 0;
    }
    if (gcd(allGcd, arr.length) === 1) {
      return 1;
    }
    if (gcd(allGcd, arr.length - 1) === 1) {
      return 2;
    }
    return 3;
  },
};
