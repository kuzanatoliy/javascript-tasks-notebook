module.exports = {
  getMaxSum: (arrA, arrB) => {
    const comb = [...arrA, ...arrB];

    comb.sort((a, b) => b - a);

    let sum = 0;
    let isIncluded = false;
    for (let i = 0; i < arrA.length; i++) {
      if (comb[i] === arrB[arrB.length - 1]) {
        isIncluded = true;
      }
      sum += comb[i];
    }
    if (!isIncluded) {
      sum = sum - comb[arrA.length - 1] + arrB[arrB.length - 1];
    }
    return sum;
  },
};
