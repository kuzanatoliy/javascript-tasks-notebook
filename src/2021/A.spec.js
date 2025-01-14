const { getResNum } = require('./A');

describe('2021A. Meaning Mean', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 7, 8, 4, 5]} | ${6}
    ${2} | ${[2, 6, 5]}       | ${4}
    ${3} | ${[5, 5, 5, 5, 5]} | ${5}
  `('Base test: $n', ({ array, result }) => {
    expect(getResNum(array)).toBe(result);
  });
});
