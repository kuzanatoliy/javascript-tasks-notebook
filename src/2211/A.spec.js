const { getLengths } = require('./A');

describe('2211A. Antimedian Deletion', () => {
  it.each`
    n    | num          | result
    ${1} | ${[1]}       | ${[1]}
    ${2} | ${[2, 1, 3]} | ${[2, 2, 2]}
  `('Base test: $n', ({ num, result }) => {
    expect(getLengths(num)).toStrictEqual(result);
  });
});
