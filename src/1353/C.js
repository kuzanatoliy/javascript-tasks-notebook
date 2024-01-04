module.exports = {
  getMinCountOfSteps: (size) => {
    const temp = [0n];
    const val = Math.floor(size / 2);
    let j = temp.length - 1;
    while (j < val) {
      const test = BigInt(j + 1);
      temp.push(test * test * 8n + temp[j]);
      j++;
    }
    return temp[val];
  },
};
