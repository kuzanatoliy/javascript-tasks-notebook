const { getCounOfOperations } = require('./A');

describe('1300A. Non-zero', () => {
  it.each`
    n    | arr              | result
    ${1} | ${[2, -1, -1]}   | ${1}
    ${2} | ${[-1, 0, 0, 1]} | ${2}
    ${3} | ${[-1, 2]}       | ${0}
    ${4} | ${[0, -2, 1]}    | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCounOfOperations(arr)).toBe(result);
  });
});
