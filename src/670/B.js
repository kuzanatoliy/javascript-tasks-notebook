module.exports = {
  getRobotId: (ids, k) => {
    let j = 1;
    while (k > j) {
      k -= j;
      j++;
    }
    return ids[k - 1];
  },
};
