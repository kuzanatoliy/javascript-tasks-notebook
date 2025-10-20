function found(a, b, total) {
  let fo = false;
  for (let i = 0; i < total; i++) {
    if ((b + i) ** (total - i) > a) {
      fo = true;
    }
  }
  return fo;
}

module.exports = {
  getCountOfOperations: (a, b) => {
    let total = 1;
    let c = 0;
    if (b === 1) {
      b += 1;
      c = 1;
    }

    while (!found(a, b, total)) {
      total += 1;
    }

    return total + c;
  },
};
