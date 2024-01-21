const { getMinNumberOfPriceTags } = require('./C');

describe('1798C. Candy Store', () => {
  it.each`
    n    | participants                                                        | result
    ${1} | ${[[20, 3], [6, 2], [14, 5], [20, 7]]}                              | ${2}
    ${2} | ${[[444, 5], [2002, 10], [2020, 2]]}                                | ${1}
    ${3} | ${[[7, 7], [6, 5], [15, 2], [10, 3], [7, 7]]}                       | ${3}
    ${4} | ${[[10, 1], [11, 5], [5, 1], [2, 2], [8, 2]]}                       | ${2}
    ${5} | ${[[7, 12], [12, 3], [5, 3], [9, 12], [9, 3], [1000000000, 10000]]} | ${5}
  `('Base test: $n', ({ participants, result }) => {
    expect(getMinNumberOfPriceTags(participants)).toStrictEqual(result);
  });
});
