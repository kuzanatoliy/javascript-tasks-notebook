const { getIndexes } = require('./A');

describe('1323A. Even Subset Sum Problem', () => {
  it.each`
    n    | array        | result
    ${1} | ${[1, 4, 3]} | ${[2]}
    ${2} | ${[15]}      | ${-1}
    ${3} | ${[3, 5]}    | ${[1, 2]}
  `('Base test: $n', ({ array, result }) => {
    expect(getIndexes(array)).toStrictEqual(result);
  });
});
