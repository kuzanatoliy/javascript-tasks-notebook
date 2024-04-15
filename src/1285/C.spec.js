const { getIntegers } = require('./C');

describe('1285C. Fadi and LCM', () => {
  it.each`
    n    | x    | result
    ${1} | ${2} | ${[1, 2]}
    ${2} | ${6} | ${[2, 3]}
    ${3} | ${4} | ${[1, 4]}
    ${4} | ${1} | ${[1, 1]}
  `('Base test: $n', ({ x, result }) => {
    expect(getIntegers(x)).toStrictEqual(result);
  });
});
