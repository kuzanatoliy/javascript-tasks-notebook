const { getCountOfOptions } = require('./A');

describe('169A. Chores', () => {
  it.each`
    n    | x1   | x2   | array                    | result
    ${1} | ${2} | ${3} | ${[6, 2, 3, 100, 1]}     | ${3}
    ${2} | ${3} | ${4} | ${[1, 1, 9, 1, 1, 1, 1]} | ${0}
  `('Base test: $n', ({ x1, x2, array, result }) => {
    expect(getCountOfOptions(x1, x2, array)).toBe(result);
  });
});
