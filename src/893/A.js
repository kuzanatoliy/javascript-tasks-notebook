module.exports = {
  isItBattle: (order) => {
    let win = 1;
    let op = 2;
    let next = 3;
    for (let j = 0; j < order.length; j++) {
      if (win === order[j]) {
        const temp = next;
        next = op;
        op = temp;
        continue;
      }
      if (op === order[j]) {
        const temp = next;
        next = win;
        win = op;
        op = temp;
        continue;
      }
      return 'NO';
    }
    return 'YES';
  },
};
