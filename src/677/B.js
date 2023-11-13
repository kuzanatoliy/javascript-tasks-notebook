module.exports = {
  checkCountOfPotato: (height, step, potatoes) => {
    let value = 0;
    let count = 0;
    for (let i = 0; i < potatoes.length; i++) {
      if (value + potatoes[i] <= height) {
        value += potatoes[i];
      } else {
        count++;
        value = potatoes[i];
      }
      const mod = value % step;
      count += (value - mod) / step;
      value = mod;
    }
    if (value > 0) {
      count++;
    }
    return count;
  },
};
