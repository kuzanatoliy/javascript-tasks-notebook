module.exports = {
  getCountOfHours: (buckets, k) => {
    buckets.sort((a, b) => b - a);
    for (let j = 0; j < buckets.length; j++) {
      if (!(k % buckets[j])) {
        return k / buckets[j];
      }
    }
    return k;
  },
};
