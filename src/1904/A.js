module.exports = {
  getCountOfPositions: (step, king, queen) => {
    let count = 0;
    const [a, b] = step;
    const positions = [
      [a, b],
      [a, -b],
      [-a, b],
      [-a, -b],
      [b, a],
      [b, -a],
      [-b, a],
      [-b, -a],
    ];
    const kSet = new Set();
    const qSet = new Set();
    for (const pos of positions) {
      const ak = pos[0] + king[0];
      const bk = pos[1] + king[1];
      kSet.add(`${ak},${bk}`);
    }
    for (const pos of positions) {
      const aq = pos[0] + queen[0];
      const bq = pos[1] + queen[1];
      const posQ = `${aq},${bq}`;
      if (kSet.has(posQ) && !qSet.has(posQ)) {
        qSet.add(posQ);
        count++;
      }
    }
    return count;
  },
};
