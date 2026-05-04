const { getLength } = require('./B');

describe('2200B. Deletion Sort', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 4, 2, 3]} | ${1}
    ${2} | ${[100]}        | ${1}
    ${3} | ${[6, 7]}       | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLength(arr)).toBe(result);
  });
});
