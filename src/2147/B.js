module.exports = {
  getConstruction: (num) => {
    const p1 = [num];
    const p2 = [num];
    for (let j = 1; j < num; j++) {
      p1.push(num - j);
      p2.push(j);
    }
    return [...p1, ...p2];
  },
};
