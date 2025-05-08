module.exports = {
  getDominantPiranha: (piranhas) => {
    let [max] = piranhas;
    for (let jj = 1; jj < piranhas.length; jj++) {
      if (piranhas[jj] > max) {
        max = piranhas[jj];
      }
    }
    if (max === piranhas[0] && max !== piranhas[1]) {
      return 1;
    }
    if (
      max === piranhas[piranhas.length - 1] &&
      max !== piranhas[piranhas.length - 2]
    ) {
      return piranhas.length;
    }
    for (let j = 1; j < piranhas.length - 1; j++) {
      if (
        max === piranhas[j] &&
        (max !== piranhas[j + 1] || max !== piranhas[j - 1])
      ) {
        return j + 1;
      }
    }
    return -1;
  },
};
