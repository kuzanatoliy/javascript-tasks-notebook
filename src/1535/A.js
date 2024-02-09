module.exports = {
  isFairPlayoff: (powers) => {
    let max = 0;
    let submax = 3;

    if (powers[max] < powers[submax]) {
      submax = 0;
      max = 3;
    }

    for (let i = 1; i < 3; i++) {
      if (powers[i] > powers[max]) {
        submax = max;
        max = i;
        continue;
      }
      if (powers[i] > powers[submax]) {
        submax = i;
      }
    }

    return Math.abs(Math.floor(max / 2) - Math.floor(submax / 2)) === 1
      ? 'YES'
      : 'NO';
  },
};
