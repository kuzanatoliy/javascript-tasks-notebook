module.exports = {
  getDelay: (pin) => {
    let curr = 1;
    let sum = 0;
    for (let j = 0; j < pin.length; j++) {
      const next = pin[j] === '0' ? 10 : +pin[j];
      sum += Math.abs(curr - next);
      curr = next;
    }
    return sum + 4;
  },
};
