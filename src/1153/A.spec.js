const { getBusNumber } = require('./A');

describe('1153A. Serval and Bus', () => {
  it.each`
    n    | buses                                       | t    | result
    ${1} | ${[[6, 4], [9, 5]]}                         | ${2} | ${1}
    ${2} | ${[[3, 3], [2, 5], [5, 6], [4, 9], [6, 1]]} | ${5} | ${3}
    ${3} | ${[[2, 2], [2, 3], [2, 4]]}                 | ${7} | ${1}
  `('Base test: $n', ({ buses, t, result }) => {
    expect(getBusNumber(buses, t)).toStrictEqual(result);
  });
});
