module.exports = {
  changeQueue: (ticks, queue) => {
    const order = queue.split('');
    while (ticks > 0) {
      for (let i = 1; i < queue.length; i++) {
        if (order[i - 1] === 'B' && order[i] === 'G') {
          temp = order[i - 1];
          order[i - 1] = order[i];
          order[i] = temp;
          i++;
        }
      }
      ticks--;
    }
    return order.join('');
  },
};
