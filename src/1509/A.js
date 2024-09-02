module.exports = {
  getOrder: (array) => {
    const odd = [];
    const even = [];
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 0) {
        even.push(array[j]);
        continue;
      }
      odd.push(array[j]);
    }
    return [...odd, ...even];
  },
};
