module.exports = {
  getRoundNumbers: (number) => {
    const n = number.toString();
    let count = 0;
    const res = [];
    for (let j = 0; j < n.length; j++) {
      if (+n[j] > 0) {
        count++;
        res.push(
          +`${n[j]}000000000000000000000000000000000`.slice(0, n.length - j, 0)
        );
      }
    }
    return [count, res];
  },
};
