module.exports = {
  isItPossibleDivideToSubsegments: (segmentsCount, numbers) => {
    const elems = [];

    numbers.forEach((item, index) => {
      if (item % 2 > 0) {
        elems.push(index);
      }
    });

    if (
      elems.length < segmentsCount ||
      elems.length % 2 !== segmentsCount % 2
    ) {
      return ['NO'];
    } else {
      const res = [];
      for (let j = 0; j < segmentsCount - 1; j++) {
        res.push(elems[j] + 1);
      }
      res.push(numbers.length);
      return ['YES', res];
    }
  },
};
