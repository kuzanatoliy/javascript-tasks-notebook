module.exports = {
  getPossibleSellers: (k, sellers) => {
    const res = [];
    for (let j = 0; j < sellers.length; j++) {
      const min = Math.min(...sellers[j]);
      if (min < k) {
        res.push(j + 1);
      }
    }
    return res;
  },
};
