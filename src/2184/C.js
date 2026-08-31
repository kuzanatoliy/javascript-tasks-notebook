module.exports = {
  getMinTime: (num, k) => {
    const order = [[num, 0]];
    const set = new Set();
    for (let j = 0; j < order.length; j++) {
      if (order[j][0] === k) {
        return order[j][1];
      }
      if (order[j][0] < k || set.has(order[j][0])) {
        continue;
      }
      set.add(order[j][0]);
      const d = order[j][0] / 2;
      const dl = Math.floor(d);
      const dr = Math.ceil(d);
      order.push([dl, order[j][1] + 1]);
      order.push([dr, order[j][1] + 1]);
    }
    return -1;
  },
};
