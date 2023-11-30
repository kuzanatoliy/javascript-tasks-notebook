const { getCountOfToasts } = require('./A');

describe('151A. Soft Drinking', () => {
  it.each`
    n    | numbers                               | result
    ${1} | ${[3, 4, 5, 10, 8, 100, 3, 1]}        | ${2}
    ${2} | ${[5, 100, 10, 1, 19, 90, 4, 3]}      | ${3}
    ${3} | ${[10, 1000, 1000, 25, 23, 1, 50, 1]} | ${0}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getCountOfToasts(...numbers)).toBe(result);
  });
});
