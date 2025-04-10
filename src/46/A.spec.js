const { getOrder } = require('./A');

describe('46A. Ball Game', () => {
  it.each`
    n    | num   | result
    ${1} | ${10} | ${[2, 4, 7, 1, 6, 2, 9, 7, 6]}
    ${2} | ${3}  | ${[2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getOrder(num)).toStrictEqual(result);
  });
});
