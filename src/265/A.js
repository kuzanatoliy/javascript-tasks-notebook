module.exports = {
  getPosition: (string, instructions) => {
    let idx = 0;
    for (let j = 0; j < instructions.length; j++) {
      if (string[idx] === instructions[j]) {
        idx++;
      }
    }
    return idx + 1;
  },
};
