module.exports = {
  getOrder: (n, k) => {
    const l = n - k;
    let order = [];
    for (let j = 1; j <= l; j++) {
      order.push(j);
    }
    order = order.reverse();
    for (let j = l + 1; j <= n; j++) {
      order.push(j);
    }
    return order;
  },
};
