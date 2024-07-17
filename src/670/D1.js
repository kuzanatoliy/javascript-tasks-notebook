module.exports = {
  getCountOfCookies: (limits, stores, k) => {
    let count = 0;
    while (k > 0) {
      for (let j = 0; j < limits.length; j++) {
        if (stores[j] >= limits[j]) {
          stores[j] -= limits[j];
          continue;
        }
        if (k > 0 && stores[j] + k >= limits[j]) {
          k -= limits[j] - stores[j];
          stores[j] = 0;
          continue;
        }
        return count;
      }
      count++;
    }
    return count;
  },
};
