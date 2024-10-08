const { getNumber } = require('./A');

describe('1805A. We Need the Zero', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2, 5]}    | ${6}
    ${2} | ${[1, 2, 3]}    | ${0}
    ${3} | ${[0, 1, 2, 3]} | ${0}
    ${4} | ${[1, 2, 2, 3]} | ${-1}
    ${5} | ${[1]}          | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getNumber(arr)).toBe(result);
  });
});
