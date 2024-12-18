const { getMinCountOfInvites } = require('./A');

describe('1969A. Two Friends', () => {
  it.each`
    n    | array              | result
    ${1} | ${[3, 1, 2, 5, 4]} | ${2}
    ${2} | ${[2, 3, 4, 1]}    | ${3}
    ${3} | ${[2, 1]}          | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfInvites(array)).toBe(result);
  });
});
