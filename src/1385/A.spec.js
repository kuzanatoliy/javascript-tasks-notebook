const { isItValid } = require('./A');

describe('1385A. Three Pairwise Maximums', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[3, 2, 3]}                   | ${['YES', [2, 2, 3]]}
    ${2} | ${[100, 100, 100]}             | ${['YES', [100, 100, 100]]}
    ${3} | ${[50, 49, 49]}                | ${['NO']}
    ${4} | ${[10, 30, 20]}                | ${['NO']}
    ${5} | ${[1, 1000000000, 1000000000]} | ${['YES', [1, 1, 1000000000]]}
  `('Base test: $n', ({ array, result }) => {
    expect(isItValid(array)).toStrictEqual(result);
  });
});
