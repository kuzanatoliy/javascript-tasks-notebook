const { getResult } = require('./A');

describe('686A. Free Ice Cream', () => {
  it.each`
    n    | initCount | iterations                                                 | result
    ${1} | ${7}      | ${[['+', 5], ['-', 10], ['-', 20], ['+', 40], ['-', 20]]}  | ${[22, 1]}
    ${2} | ${17}     | ${[['-', 16], ['-', 2], ['-', 98], ['+', 100], ['-', 98]]} | ${[3, 2]}
  `('Base test: $n', ({ initCount, iterations, result }) => {
    expect(getResult(initCount, iterations)).toStrictEqual(result);
  });
});
