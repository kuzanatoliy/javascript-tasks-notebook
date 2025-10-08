module.exports = {
  getCountOfLockedRooms: (d1, d2) => {
    const [l, r] = d1;
    const [L, R] = d2;
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      if (i >= l && i <= r && i >= L && i <= R) {
        count++;
      }
    }

    if (count !== 0 && l !== L) {
      count++;
    }

    if (count !== 0 && r !== R) {
      count++;
    }

    count--;

    if (count <= 0) {
      count = 1;
    }

    return count;
  },
};
