module.exports = {
  getOrder: (number) => {
    const order = [];
    for (let i = 0; i < number; i++) {
      order.push(i * 2 + 1);
    }
    return order;
  },
};
