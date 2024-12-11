const { buildArray } = require('./A');

describe('1864A. Increasing and Decreasing', () => {
  it.each`
    n    | x      | y      | num  | result
    ${1} | ${1}   | ${4}   | ${3} | ${[1, 3, 4]}
    ${2} | ${1}   | ${3}   | ${3} | ${[-1]}
    ${3} | ${100} | ${200} | ${4} | ${[100, 197, 199, 200]}
  `('Base test: $n', ({ x, y, num, result }) => {
    expect(buildArray(x, y, num)).toStrictEqual(result);
  });
});
