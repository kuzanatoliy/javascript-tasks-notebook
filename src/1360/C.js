module.exports = {
  checkSimilarPairs: (numbers) => {
    const arr = numbers.sort((a, b) => b - a);
    let c1 = 0;
    let c2 = 0;
    let f = false;
    for (let j = 0; j < numbers.length; j++) {
      if (!f && arr[j] - arr[j + 1] === 1) {
        f = true;
      }
      if (arr[j] % 2 === 0) {
        c1++;
      } else {
        c2++;
      }
    }
    const t1 = c1 % 2;
    const t2 = c2 % 2;
    if (t1 !== t2) {
      return 'NO';
    } else if (t1 === 0) {
      return 'YES';
    } else if (f) {
      return 'YES';
    } else {
      return 'NO';
    }
  },
};
