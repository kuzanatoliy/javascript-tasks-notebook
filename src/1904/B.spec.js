const { getCountOfNumbers } = require('./B');

describe('1904A. Forked!', () => {
  it.each`
    n    | array                                                        | result
    ${1} | ${[20, 5, 1, 4, 2]}                                          | ${[4, 3, 0, 3, 1]}
    ${2} | ${[1434, 7, 1442]}                                           | ${[1, 0, 2]}
    ${3} | ${[1]}                                                       | ${[0]}
    ${4} | ${[999999999, 999999999, 999999999, 1000000000, 1000000000]} | ${[4, 4, 4, 4, 4]}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfNumbers(array)).toStrictEqual(result);
  });
});
