module.exports = {
  getOperationCount: (a, b, x) => {
    const arrA = [a];
    const arrB = [b];
    let val = a;
    while (val) {
      val = Math.floor(val / x);
      arrA.push(val);
    }
    val = b;
    while (val) {
      val = Math.floor(val / x);
      arrB.push(val);
    }
    let best = Math.abs(a - b);
    for (let i = 0; i < arrA.length; i++) {
      for (let j = 0; j < arrB.length; j++) {
        const cost = i + j + Math.abs(arrA[i] - arrB[j]);
        if (cost < best) {
          best = cost;
        }
      }
    }
    return best;
  },
};
