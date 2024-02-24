const { getCountOfNumbers } = require('./A');

describe('1537A. Arithmetic Array', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 1, 1]}    | ${0}
    ${2} | ${[1, 2]}       | ${1}
    ${3} | ${[8, 4, 6, 2]} | ${16}
    ${4} | ${[-2]}         | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfNumbers(array)).toBe(result);
  });
});
