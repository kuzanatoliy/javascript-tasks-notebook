const { isPossibleStayOnlyOneElement } = require('./A');

describe('1399A. Remove Smallest', () => {
  it.each`
    n    | numbers         | result
    ${1} | ${[1, 2, 2]}    | ${'YES'}
    ${2} | ${[5, 5, 5, 5]} | ${'YES'}
    ${3} | ${[1, 2, 4]}    | ${'NO'}
    ${3} | ${[1, 3, 4, 4]} | ${'NO'}
    ${3} | ${[100]}        | ${'YES'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(isPossibleStayOnlyOneElement(numbers)).toBe(result);
  });
});
