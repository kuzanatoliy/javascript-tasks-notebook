module.exports = {
  getShopsOnDay: (x, mis) => {
    x.sort((a, b) => a - b);
    const countLessOrEqual = function (a, item) {
      let l = 0;
      let r = a.length;
      while (l <= r) {
        const i = Math.floor((r + l) / 2);
        const curItem = a[i];
        const nextItem = a[i + 1];

        if (
          curItem <= item &&
          (typeof nextItem === 'undefined' || nextItem > item)
        ) {
          return i + 1;
        } else if (curItem <= item) {
          l = i + 1;
        } else {
          r = i - 1;
        }
      }
      return 0;
    };

    const shopsOnDay = [];
    for (let i = 0; i < mis.length; ++i) {
      const mi = mis[i];
      shopsOnDay.push(countLessOrEqual(x, mi));
    }

    return shopsOnDay;
  },
};
