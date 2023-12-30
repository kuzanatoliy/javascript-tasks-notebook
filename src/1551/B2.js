module.exports = {
  getColorArray: (colorCount, numbers) => {
    const uniq = new Map();
    let count = 0;
    const ans = [];

    for (let j = 0; j < numbers.length; j++) {
      let item = uniq.get(numbers[j]);
      ans[j] = 0;

      if (!item) {
        uniq.set(numbers[j], []);
        item = uniq.get(numbers[j]);
      }

      item.push(j);
    }

    uniq.forEach((item) => {
      count += item.length < colorCount ? item.length : colorCount;
    });

    count -= count % colorCount;

    let lk = 0;

    uniq.forEach((item) => {
      for (let j = 0; j < item.length && j < colorCount; j++) {
        if (count) {
          lk++;
          ans[item[j]] = lk;
          if (lk === colorCount) {
            lk = 0;
          }
          count--;
        }
      }
    });

    return ans;
  },
};
