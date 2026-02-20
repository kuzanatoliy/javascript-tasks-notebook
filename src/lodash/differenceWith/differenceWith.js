module.exports = {
  differenceWith: (array, values, iteratee) => {
    let comporator;
    if (!iteratee) {
      comporator = (item) => item;
    } else if (typeof iteratee === 'string' || typeof iteratee === 'number') {
      comporator = (item) => item[iteratee];
    } else {
      comporator = iteratee;
    }
    const set = new Set(values.map(comporator));
    return array.filter((item) => !set.has(comporator(item)));
  },
};
