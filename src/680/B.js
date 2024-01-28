module.exports = {
  getNumbersOfCriminals: (index, cities) => {
    let j = 0;
    let jj = 0;
    index--;
    let sum = cities[index];
    for (
      j = index - 1, jj = index + 1;
      j >= 0 && jj < cities.length;
      j--, jj++
    ) {
      const ans1 = cities[j];
      const ans2 = cities[jj];
      if (ans1 > 0 && ans2 > 0) {
        sum += ans1 + ans2;
      }
    }
    while (j >= 0) {
      sum += cities[j];
      j--;
    }
    while (jj < cities.length) {
      sum += cities[jj];
      jj++;
    }
    return sum;
  },
};
