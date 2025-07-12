const { getCountOfGears } = require('./A');

describe('215A. Bicycle Chain', () => {
  it.each`
    n    | arrA            | arrB                    | result
    ${1} | ${[4, 5]}       | ${[12, 13, 15]}         | ${2}
    ${2} | ${[1, 2, 3, 4]} | ${[10, 11, 12, 13, 14]} | ${1}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfGears(arrA, arrB)).toBe(result);
  });
});
