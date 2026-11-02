module.exports = {
  getSkipedDocuments: (map) => {
    const order = [];
    const skiped = [];
    for (let j = 1; j <= map.length; j++) {
      if (map[j - 1] === '1') {
        order.push(j);
      } else if (map[j - 1] === '2') {
        if (order.length) {
          order.length--;
          skiped.push(j);
        }
      }
    }
    return [...skiped, ...order].sort((a, b) => a - b);
  },
};
