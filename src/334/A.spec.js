const { getBagsNumbers } = require('./A');

describe('334A. Candy Bags', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[[1, 4], [2, 3]]}
  `('Base test: $n', ({ num, result }) => {
    expect(getBagsNumbers(num)).toStrictEqual(result);
  });
});
