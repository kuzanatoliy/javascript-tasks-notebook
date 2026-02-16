module.exports = {
  getOrder: (k, arr) => {
    const fls = {};
    const order = [];
    for (let j = 0; j < arr.length; j++) {
      if (!fls[arr[j]]) {
        fls[arr[j]] = 1;
        order.push(arr[j]);
        if (order.length > k) {
          fls[order[order.length - k - 1]] = 0;
        }
      }
    }
    return order.reverse().slice(0, k);
  },
};
