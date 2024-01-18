module.exports = {
  couldBeSatisfied: (numbers1, numbers2) => {
    let flag = true;
    const last = numbers1.length - 1;
    for (let j = 0; j < last; j++) {
      if (numbers1[last] >= numbers1[j] && numbers2[last] >= numbers2[j]) {
        continue;
      }
      if (numbers1[last] >= numbers2[j] && numbers2[last] >= numbers1[j]) {
        continue;
      }
      flag = false;
    }
    return flag ? 'Yes' : 'No';
  },
};
