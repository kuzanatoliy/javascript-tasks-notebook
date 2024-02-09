module.exports = {
  getLevels: (number) => {
    let i = 1;
    let step = 1;

    while (step <= number) {
      number -= step;
      i++;
      step += i;
    }

    return i - 1;
  },
};
