const { isItPossibleToSplit } = require('./A');

describe('2107A. LRC and VIP', () => {
  it.each`
    n    | num               | result
    ${1} | ${[1, 20, 51, 9]} | ${['YES', [1, 1, 2, 1]]}
    ${2} | ${[5, 5, 5, 5]}   | ${['NO']}
    ${3} | ${[1, 2, 2]}      | ${['YES', [1, 2, 2]]}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossibleToSplit(num)).toStrictEqual(result);
  });
});
