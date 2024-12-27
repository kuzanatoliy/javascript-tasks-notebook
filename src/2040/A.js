module.exports = {
  isItPossibleToWin: (array, k) => {
    let result = -1;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      let find = false;
      for (let j = 0; j < array.length; j++) {
        if (i === j) {
          continue;
        }
        const itemother = array[j];
        if (Math.abs(item - itemother) % k === 0) {
          find = true;
          break;
        }
      }
      if (!find) {
        result = i + 1;
        break;
      }
    }
    if (result !== -1) {
      return ['YES', result];
    } else {
      return ['NO'];
    }
  },
};
