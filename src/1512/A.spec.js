const { getIndexOfNotEqualElement } = require('./A');

describe('1512A. Spy Detected!', () => {
  it.each`
    n    | numbers                            | result
    ${1} | ${[11, 13, 11, 11]}                | ${2}
    ${2} | ${[1, 4, 4, 4, 4]}                 | ${1}
    ${3} | ${[3, 3, 3, 3, 10, 3, 3, 3, 3, 3]} | ${5}
    ${4} | ${[20, 20, 10]}                    | ${3}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getIndexOfNotEqualElement(numbers)).toBe(result);
  });
});
